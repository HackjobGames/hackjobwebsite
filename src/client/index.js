
import './css/style.css'
import { Splash } from './components/splash.js'
import { about } from './components/about.js'
import { games } from './components/games.js'
import { stream } from './components/stream.js'
import { devlog } from './components/devlog.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Drawer, List, ListItem } from '@material-ui/core'
import axios from 'axios/dist/axios'
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const screens = [[Splash, 'Home'], [about, 'About'], [games, 'Games'], [stream, 'Stream'], [devlog, 'Devlog']]

const styles = makeStyles({
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
  }
})

const Browser = function () {
  const classes = styles()
  const [state, setState] = React.useState({
    icon: faBars,
    nextIcon: faTimes,
    navOpen: false
  })

  const toggleDrawer = (open) => { 
    setState({ ...state, navOpen: open });
  }

  return (
    <div>
      <FontAwesomeIcon className='toggle-button' icon={state.icon} onClick={() => toggleDrawer(true)} />
      <Router>
        <div>
          <Drawer open={state.navOpen} onClose={() => toggleDrawer(false)}>
            <List className={classes.root}>
              {screens.map(([screen, name]) => {
                return <Link key={name} to={`/${name.toLowerCase()}`}><ListItem className={classes.item} onClick={() => toggleDrawer(false)}>{name}</ListItem></Link>
              })}
            </List>
          </Drawer>
          <Switch>
            {screens.map(([Screen, name]) => <Route key={name} path={`/${name.toLowerCase()}`}><Screen /></Route>)}
            <Route path='/'><Splash/></Route>
          </Switch> 
        </div>
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser />, document.getElementById('app'))

