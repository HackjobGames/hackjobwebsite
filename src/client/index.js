
import './css/style.css'
import { Splash } from './components/splash.js'
import { about } from './components/about.js'
import { games } from './components/games.js'
import { stream } from './components/stream.js'
import { devlog } from './components/devlog.js'
import { SignIn } from './components/signIn.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Drawer, List, ListItem, Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios/dist/axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const screens = [[Splash, 'Home'], [about, 'About'], [games, 'Games'], [stream, 'Stream'], [devlog, 'Devlog']]

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

const Browser = function () {


  const Menu = () => {
    const [state, setState] = React.useState({
      open: false
    })
    const toggleDrawer = (status) => { 
      setState({ ...state, navOpen: status })
    }
    return <div>
      <FontAwesomeIcon className='toggle-button' icon={faBars} onClick={() => toggleDrawer(true)} />
      <Drawer open={state.navOpen} onClose={() => toggleDrawer(false)}>
        <List style={styles.root}>
          {screens.map(([screen, name]) => {
            return <Link key={name} to={`/${name.toLowerCase()}`}><ListItem style={styles.item} onClick={() => toggleDrawer(false)}>{name}</ListItem></Link>
          })}
          <SignIn/>
        </List>
      </Drawer>
    </div>
  }

  return (
    <div>
      <Router>
        <div>
          <Menu />
          <Switch>
            {screens.map(([Screen, name]) => <Route key={name} path={`/${name.toLowerCase()}`}><Screen /></Route>)}
            <Route path='/'><Splash/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

