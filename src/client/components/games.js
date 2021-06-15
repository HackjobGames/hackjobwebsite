import React from 'react'
import potato from './game_info/potato'
import birds from './game_info/birdsAway'
import mirror from './game_info/mirror'
import rogue from './game_info/rogueGrappler'
import { GridList, GridListTile } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { styles } from 'styles'
import {
  Route,
  Link
} from "react-router-dom";

const gameComponents = [birds, potato, mirror, rogue]

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
        onChange={(_, data) => setState({ browserData: data || state.browserData })}
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
    <div style={styles.gameRoot}>
      <Route exact path='/games'>
        <GridList spacing={10} className={'center'} cellHeight='auto' cols={2}>
          {gameComponents.map(game => 
            <GridListTile key={game.name} cols={1}>
              <Link key={game.name} to={`/games/${game.name}`} >
                <img style={styles.gameButton} src={game.img}/>
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
