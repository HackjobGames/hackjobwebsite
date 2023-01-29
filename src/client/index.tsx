import React from 'react'
import { Main } from './components/main'
import axios from 'axios/dist/axios'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { createRoot } from 'react-dom/client';

axios.get('/users').then(res => {
  console.log('RESPONSE FROM SERVER: ', res.data)
})

const styles = {}

const Browser = () => {
  
  const [payload, setPayload] = React.useState({username: '', password: ''})


  const updateUsername = (event) => {
    setPayload({...payload, username: event.target.value})
  }

  const updatePassword = (event) => {
    setPayload({...payload, password: event.target.value})
  }

  const signIn = () => {
    axios.post('/signIn', payload)
  }

  const signUp = () => {
    axios.post('/signUp', payload)
  }

  const signOut = () => {
    axios.post('/signOut', payload)
  }

  return (
  <div>
    <nav className="navbar navbar-light bg-light justify-content-end">
      <div>
        Text
      </div>
      <div className="p-1">
        Username or Email
        <input onChange={updateUsername}/>
        Password
        <input onChange={updatePassword} type="password"/>
        <button onClick={signIn} className="btn button-primary bg-primary">
          Sign In
        </button>
        <button onClick={signUp} className="btn button-primary bg-primary">
          Sign Up
        </button>
        <button onClick={signOut} className="btn button-primary bg-primary">
          Sign Out
        </button>
      </div>
    </nav>

    <Router>
      <Switch>
        <Route key="home" path="/"><Main/></Route>
      </Switch>
    </Router>

  </div>
  )
}

createRoot(document.getElementById('app')).render(<Browser/>)





