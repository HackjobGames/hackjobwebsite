import React from 'react'
import potato from './game_info/potato'
import birds from './game_info/birdsaway'
import { GridList, GridListTile } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  tile: {
    width: 300,
    height: 300
  }
}));

const gameComponents = [birds, potato]

export const games = () => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    gamePlayer: null,
    browserData: null
  })

  const loadPlayer = (game) => {
    setState({ ...state,
      gamePlayer:
        <iframe frameBorder="0" src={`https://itch.io/embed-upload/${game.itchId}?color=333333`} 
        allowFullScreen={true} width="1000" height="660">
            <a href={`https://hackjobgames.itch.io/${game.name}`}>Play Plant The Potato on itch.io</a>
        </iframe>
    })
  }
  return (
    <div className={classes.root}>
      <Route exact path='/games'>
        <GridList spacing={10} className={classes.gridList + ' center'} cellHeight='auto' cols={2}>
          {gameComponents.map(game => 
            <GridListTile className={classes.tile} key={game.name} cols={1}>
              <Link onClick={() => setState({ gamePlayer: null, browserData: game.about })} key={game.name} to={`/games/${game.name}`} >
                <img src={game.img}/>
              </Link>
            </GridListTile>
          )}
        </GridList>
      </Route>
      {gameComponents.map(game =>
          <Route key={game.name} exact path={`/games/${game.name}`}>
            <div className='center'>
              <a onClick={() => setState({ ...state, browserData: game.about })} className="button">About The Game</a>
              <a onClick={() => setState({ ...state, browserData: game.howTo })} className="button">How To Play</a>
              <a onClick={() => loadPlayer(game)} className="button">Play</a>
              <div>{state.gamePlayer}</div>
              <div>{state.browserData}</div>
            </div>
          </Route>
        )
      }
    </div>
  )
}

