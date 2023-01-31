import './index.css'
import { Games } from './components/games.js'
import { Stream } from './components/stream.js'
import { Devlog } from './components/devlog.js'
import { SignIn } from './components/signIn.js'
import { Feedback } from './components/feedback.js'

import React from 'react'
import ReactDOM from 'react-dom'
import { styles } from 'styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const Browser = () => {
  const [state, setState] = React.useState({
    nav: '',
  })

  const Menu = () => {
    const history = useHistory()

    const changeRoute = (route) => {
      history.push(route)
      setState({...state, nav: route})
    }

    const [navOpen, setNavOpen] = React.useState(false)

    const toggleDrawer = (status: boolean) => { 
      setNavOpen(status)
    }

    return <div style={{ position: 'fixed', top: '10px', left: '10px' }}>
        <ul style={styles.root}>
          <li style={styles.navButton} onClick={() => changeRoute('/')}>
            <a>Home</a>
          </li>
          <li style={styles.navButton} onClick={() => changeRoute('/games')}>
            <a>Games</a>
          </li>
          <li style={styles.navButton} onClick={() => changeRoute('/stream')}>
            <a>Watch</a>
          </li>
          <li style={styles.navButton} onClick={() => changeRoute('/feedback')}>
            <a>Feedback</a>
          </li>
          <SignIn/>
        </ul>
    </div>
  }

  return (
    <div>
      <Router>
        <Menu />
        <div>
          <h1 id="heading-primary-main">Hackjob Games</h1>
        </div>
        <Switch>
          <Route key={'games'} path={`/games`}><Games/></Route>
          <Route key={'stream'} path={`/stream`}><Stream/></Route>
          <Route key={'feedback'} path={'/feedback'}><Feedback/></Route>
          <Route key={'devlog'} path={'/devlog'}><Devlog/></Route>
        </Switch>
        <div style={{ bottom: '0', height: '25vh', width: '100%', border: '1px solid black' }}></div>   
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

