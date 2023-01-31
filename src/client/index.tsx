import './index.css'
import { Games } from './components/games.js'
import { Stream } from './components/stream.js'
import { Devlog } from './components/devlog.js'
import { SignIn } from './components/signIn.js'

import { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'bootstrap'
import { styles } from 'styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const Browser = () => {
  const [state, setState] = useState({
    nav: '',
  })

  const Menu = () => {
    const history = useHistory()

    const changeRoute = (route) => {
      history.push(route)
      setState({...state, nav: route})
    }

    return (
      <div className='offcanvas h-100 bg-black' tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <ul style={styles.root}>
          <li style={styles.navButton} onClick={() => changeRoute('/')}>
            <button type='button' data-bs-dismiss="offcanvas" aria-label="Close">Home</button>
          </li>
          <li style={styles.navButton} onClick={() => changeRoute('/games')}>
            <button type='button' data-bs-dismiss="offcanvas" aria-label="Close">Games</button>
          </li>
          <li style={styles.navButton} onClick={() => changeRoute('/news')}>
            <button type='button' data-bs-dismiss="offcanvas" aria-label="Close">News</button>
          </li>
          <SignIn/>
        </ul>
    </div>
    )
  }

  return (
    <div>
      
      <Router>
        <Menu />
        <a className='btn btn-primary' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></a>
        <div>
          <h1 id="heading-primary-main">Hackjob Games</h1>
        </div>
        <Switch>
          <Route key={'games'} path={`/games`}><Games/></Route>
          <Route key={'stream'} path={`/stream`}><Stream/></Route>
          <Route key={'devlog'} path={'/devlog'}><Devlog/></Route>
        </Switch>
        <div style={{ bottom: '0', height: '25vh', width: '100%', border: '1px solid black' }}></div>   
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

