import { Games } from './components/games'
import { Devlog } from './components/devlog'
import { SignIn } from './components/signIn'
import { About } from './components/about'

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
          <h1 id="heading-primary-main">HACKJOB GAMES</h1>
        </div>
        <Switch>
          <Route key='home' path='/home'><About/></Route>
          <Route key='games' path='/games'><Games/></Route>
          <Route key='devlog' path='/news'><Devlog/></Route>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

