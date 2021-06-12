
import './index.css'
import { Games } from './components/games.js'
import { Stream } from './components/stream.js'
import { Devlog } from './components/devlog.js'
import { SignIn } from './components/signIn.js'
import { Feedback } from './components/feedback.js'
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
    const history = useHistory()

    const changeRoute = (route) => {
      history.push(route)
      setState({...state, nav: route})
    }

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
          <ListItem style={styles.item} onClick={() => changeRoute('/')}>
            <a>Home</a>
          </ListItem>
          <ListItem style={styles.item} onClick={() => changeRoute('/games')}>
            <a>Games</a>
          </ListItem>
          <ListItem style={styles.item} onClick={() => changeRoute('/stream')}>
            <a>Watch</a>
          </ListItem>
          <ListItem style={styles.item} onClick={() => changeRoute('/feedback')}>
            <a>Watch</a>
          </ListItem>
          <SignIn/>
        </List>
      </Drawer>
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
          <Route key={'devlog'} path={'/feedback'}><Feedback/></Route>
          <Route key={'devlog'} path={'/'}><Devlog/></Route>
        </Switch>
        <div style={{ bottom: '0', postion: 'absolute', height: '25vh', width: '100%', border: '1px solid black' }}></div>   
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

