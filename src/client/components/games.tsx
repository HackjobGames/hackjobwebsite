import React from 'react'
import potato from './game_info/potato'
import birds from './game_info/birdsAway'
import mirror from './game_info/mirror'
import rogue from './game_info/rogueGrappler'
import { styles } from 'styles'
import {
  Route,
  Link
} from "react-router-dom";

const gameComponents = [birds, potato, mirror, rogue]

export const Games = () => {

  const BrowserData = (props) => {
    const game = props.game
    const [state, setState] = React.useState(null)

    return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={() => { setState(game.about) }} value={game.about} style={styles.button}>
          About
        </button>
        <button onClick={() => { setState(game.howTo) }} style={styles.button}>
          How To Play
        </button>
      </div>

      <div>{state}</div>
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
    <div style={styles.gamesRoot} className="container text-center">
      <Route exact path='/games'>
        <div className='row align-items-start display-flex'>
          {gameComponents.map(game => 
            <div className='col-sm-6 col-lg-3'>
              <Link key={game.name} to={`/games/${game.name}`} >
                <img className="img-thumbnail" src={game.img}/>
              </Link>
            </div>
          )}
        </div>
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
