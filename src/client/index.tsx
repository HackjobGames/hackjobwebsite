import { Games } from './components/games'
import { Devlog } from './components/devlog'
import { SignIn } from './components/signIn'
import { About } from './components/about'

import { useState } from 'react'
import { createRoot } from 'react-dom/client'
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

  const NavButton = (props: { route: string }) => {
    const history = useHistory()
    const changeRoute = (route: string) => {
      history.push(route)
      setState({...state, nav: route})
    }
    return (
      <button
        className = 'btn rounded-0 p-0 navButton button col'
        onClick={() => changeRoute(`/${props.route}`)}
      >
        {props.route}
      </button>
    )
  }

  return (
    <div>
      <Router>
      <div className='row gx-0'>
        <NavButton key='home' route='Home'/>
        <NavButton key='games' route='Games'/>
        <NavButton key='news' route='News'/>
      </div>   
      <SignIn/>
        <div>
          <h1 id="heading-primary-main">HACKJOB GAMES</h1>
        </div>
        <Switch>
          <Route key='home' path='/home'><About/></Route>
          <Route key='games' path='/games'><Games/></Route>
          <Route key='devlog' path='/news'><Devlog/></Route>
        </Switch>
      </Router>
      <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center my-4 ">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </a>
      <span className="mb-3 mb-md-0 ">© 2024 HackjobGames</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

createRoot(document.getElementById('app')).render(<Browser/>)

