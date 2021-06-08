
import './index.css'
import { games } from './components/games.js'
import { stream } from './components/stream.js'
import { devlog } from './components/devlog.js'
import { SignIn } from './components/signIn.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCamera, faEdit, faGamepad } from '@fortawesome/free-solid-svg-icons'

import { Drawer, List, ListItem, BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios/dist/axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const styles = 
{
  root: {
    width: '200px',
    height: '100%',
    background: '#151719',
    zIndex: 99999
  },
  item: {
    color: '#45b80b',
    listStyle: 'none',
    padding: '15px 10px',
    borderBottom: '1px solid rgba(100, 100, 100, .3)',
    cursor: 'pointer'
  },

  dialog: {
    backgroundColor: '#151719',
    color: '#45b80b',
    borderBottom: '#45b80b 2px'
  },
  input: {
    color: '#45b80b',
    borderBottom: '#45b80b 2px'
  }
}

const Browser = () => {
  const [state, setState] = React.useState({
    nav: '',
  })

  const Menu = () => {
    const [mState, setMState] = React.useState({
      open: false,
    })
    const toggleDrawer = (status) => { 
      setMState({ ...mState, navOpen: status })
    }
    return <div style={{ position: 'fixed', top: '10px', left: '10px' }}>
      <FontAwesomeIcon className='toggle-button' icon={faBars} onClick={() => toggleDrawer(true)} />
      <Drawer open={mState.navOpen} onClose={() => toggleDrawer(false)}>
        <List style={styles.root}>
          <SignIn/>
        </List>
      </Drawer>
    </div>
  }

  const setNav = (event, value) => {
    setState({ ...state, nav: value })
  }

  const Navigation = () => {
    const history = useHistory()

    const changeRoute = (path) => {
      history.push(path)
    }

    return <BottomNavigation
    value={state.nav}
    onChange={setNav}
    showLabels
    style={
      {
        height: '16vh',
        backgroundColor: 'black',
        color: '#45b80b'
      }
    }
  >
      <BottomNavigationAction onClick={() => changeRoute('/devlog')} style={{ maxWidth: '1000000px' }} icon={<FontAwesomeIcon fontSize="20em" color="#45b80b" icon={faEdit} />} />
      <BottomNavigationAction onClick={() => changeRoute('/stream')} style={{ maxWidth: '1000000px' }} icon={<FontAwesomeIcon fontSize="20em" color="#45b80b" icon={faCamera} />} />
      <BottomNavigationAction onClick={() => changeRoute('/games')} style={{ maxWidth: '1000000px' }} icon={<FontAwesomeIcon fontSize="20em" color="#45b80b" icon={faGamepad} />} />
    </BottomNavigation>
  }

  return (
    <div>
      <Router>
          <Menu />
          <div>
            <h1 id="heading-primary-main">Hackjob Games</h1>
          </div>
          <Switch>
            {[[devlog, 'devlog'], [games, 'games'], [stream, 'stream']].map(([Screen, name]) => <Route key={name} path={`/${name.toLowerCase()}`}><Screen /></Route>)}
          </Switch>
          <div style={{ bottom: '0', postion: 'absolute', height: '25vh', width: '100%', border: '1px solid black' }}></div>   
        <Navigation/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

