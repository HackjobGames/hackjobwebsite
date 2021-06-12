import React from 'react'
import potato from './game_info/potato'
import birds from './game_info/birdsaway'
import mirror from './game_info/mirror'
import { Container, GridList, GridListTile } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  tile: {
    width: '30vw',
    height: '30vw'
  },
  button: {
    width: '200px',
    border: '2px #45b80b',
    color: '#45b80b',
    fontFamily: 'VT323, monospace',
    fontSize: '2em'
  }
}


const gameComponents = [birds, potato, mirror]

export const Games = () => {

  const BrowserData = (props) => {
    const game = props.game
    const [state, setState] = React.useState({
      browserData: game.about
    })

    return (
    <div>
      <ToggleButtonGroup
        value={state.browserData}
        exclusive
        onChange={(event, data) => setState({ browserData: data || state.browserData })}
      >
        <ToggleButton selected value={game.about} style={styles.button} className="button">
          About
        </ToggleButton>
        <ToggleButton value={game.howTo} style={styles.button} className="button">
          How To Play
        </ToggleButton>
      </ToggleButtonGroup>

      <div>{state.browserData}</div>
    </div>

    )
  }

  const GameScreen = (props) => {
    const game = props.game
    return (
      <div className='center'> 
        <iframe frameBorder="0" src={`https://itch.io/embed-upload/${game.itchId}?color=333333`} 
          allowFullScreen={true} width="1000" height="660">
          <a href={`https://hackjobgames.itch.io/${game.name}`}>Play Plant The Potato on itch.io</a>
        </iframe>
        <BrowserData game={game}/>
      </div>
    )
  }



  return (
    <div style={styles.root}>
      <Route exact path='/games'>
        <GridList spacing={10} style={styles.gridList} className={'center'} cellHeight='auto' cols={2}>
          {gameComponents.map(game => 
            <GridListTile key={game.name} cols={1}>
              <Link key={game.name} to={`/games/${game.name}`} >
                <img style={styles.tile} src={game.img}/>
              </Link>
            </GridListTile>
          )}
        </GridList>
      </Route>
      {gameComponents.map(game =>
          <Route key={game.name} exact path={`/games/${game.name}`}>
            <GameScreen game={game}/>
          </Route>
        )
      }
    </div>
  )
}
