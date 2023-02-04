import { Games } from './components/games.js'
import { Stream } from './components/stream.js'
import { Devlog } from './components/devlog.js'
import { SignIn } from './components/signIn.js'

import { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
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
    
    const NavButton = (props: { route: string }) => {
      const [hover, setHover] = useState(false)
      return (
        <button
          className = 'navButton'
          onClick={() => changeRoute(`/${props.route}`)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          {props.route}
        </button>
      )
    }

    return (
      <div style={{WebkitTransition: '0.5s', width: '250px'}} className='offcanvas offcanvas-start h-100 bg-dark border-end' tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <ul className='root'>
          <li>
          <NavButton route='Home'/>
          </li>
          <li>
            <NavButton route='Games'/>
          </li>
          <li>
            <NavButton route='News'/>
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
        <a className='drawerButton btn btn-primary' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon={faBars}/>
        </a>
        <div>
          <h1 id="heading-primary-main">Hackjob Games</h1>
        </div>
        <Switch>
          <Route key={'games'} path={`/games`}><Games/></Route>
          <Route key={'stream'} path={`/stream`}><Stream/></Route>
          <Route key={'devlog'} path={'/news'}><Devlog/></Route>
        </Switch>
        <div style={{ bottom: '0', height: '25vh', width: '100%', border: '1px solid black' }}></div>   
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

