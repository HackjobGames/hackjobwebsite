
import './css/style.css'

import { splash } from './components/splash.js'
import { about } from './components/about.js'
import { games } from './components/games.js'
import { stream } from './components/stream.js'
import { devlog } from './components/devlog.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
//import { Drawer, List, ListItem } from '@material-ui/core'
import axios from 'axios/dist/axios'
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Browser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: faBars,
      nextIcon: faTimes,
      screen: splash
    }
  }
  componentDidMount() {
  }
  handleClick() {
    $(".sidebar").toggleClass("side"); 
    $(".body-shift").toggleClass(".body-unshift");
    this.setState({ icon: this.state.nextIcon, nextIcon: this.state.icon })
  }

  renderScreen(screen) {
    this.setState({ screen: screen })
  }

  render() {
    return (
      <div>
        <nav id="navbar" className="sidebar">
          <FontAwesomeIcon className='toggle-button' icon={this.state.icon} onClick={() => this.handleClick()} />
          <ul>
            <li onClick={() => this.renderScreen(splash)}>Home</li>
            <li onClick={() => this.renderScreen(about)}>About Us</li>
            <li onClick={() => this.renderScreen(games)}>Games</li>
            <li onClick={() => this.renderScreen(stream)}>Stream</li>
            <li onClick={() => this.renderScreen(devlog)}>Devlog</li>
          </ul>
        </nav>
        <this.state.screen/>
      </div>
    )
  }
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

