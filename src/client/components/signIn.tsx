import React from 'react'
import axios from 'axios/dist/axios'
import { getCookie } from '../modules/getCookie'

const initial = {
  dialogOpen: false,
  username: '',
  password: '',
  userHash: '',
  response: undefined
}

export const SignIn = () => {

  const [state, setState] = React.useState(initial)

  const updateUserName = (event) => {
    setState({ ...state, username: event.target.value })
  }

  const updatePassword = (event) => {
    setState({ ...state, password: event.target.value })
  }

  const signIn = () => {
    axios.put('/api/users/signIn', state).then(res => {
      setState(initial)
      document.cookie = `session=${res.data.id}`
      document.cookie = `admin=${res.data.admin}`
      location.reload()
    }).catch(err => {
      setState({ ...state, response: { severity: 'error', message: err.response.data } })
    })
  }

  const signUp = () => {
    axios.post('/api/users/signUp/', state).then(res => {
      setState({ ...state, response: { severity: 'success', message: res.data }, username: '', password: ''  })
    }).catch(err => {
      setState({ ...state, response: { severity: 'error', message: err.response.data}, username: '', password: ''  })
    })
  }

  const toggleDialog = (status) => {
    setState({ ...state, dialogOpen: status })
  }

  const ActionAlert = (props) => {
    if (props.response) {
      return null // fixme with alert
    } else {
      return <span/>
    }
  }

  const signOut = () => {
    axios.delete(`/api/users/signOut/${getCookie('session')}`).then(() => {
      document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      location.reload()
    }) 
  }

  const SignInButton = () => {
    // if (getCookie('session') === '') {
    //   return <ListItem style={styles.navButton} onClick={() => toggleDialog(true)}>
    //     <a>Sign In</a>
    //   </ListItem>
    // } else {
    //   return <ListItem style={styles.navButton} onClick={signOut}>
    //     Sign Out
    //   </ListItem>
    // }
  }

  return <div>
          {/* <SignInButton/>
          <Dialog open={state.dialogOpen}
            PaperProps={{
              style: {
                height: '40%',
                width: '40%'
              }
            }}
            >
              <DialogTitle style={styles.dialog}>
                Sign In
              </DialogTitle>
              <DialogContent style={styles.dialog}>
                <ActionAlert response={state.response}></ActionAlert>
                <TextField
                  label="UserName"
                  value={state.username}
                  onChange={updateUserName}
                  InputLabelProps={{
                    style: styles.dialog
                  }}
                  InputProps= {{
                    style: styles.input
                  }}
                />
                <br/>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={state.password}
                  onChange={updatePassword}
                  InputLabelProps={{
                    style: styles.dialog
                  }}
                  InputProps= {{
                    style: styles.input
                  }}
                />
              </DialogContent>
              <DialogActions style={styles.dialog}>
                <Button onClick={signIn} style={styles.dialog}>
                  Sign In
                </Button>
                <Button onClick={signUp} style={styles.dialog}>
                  Sign Up
                </Button>
                <Button onClick={() => toggleDialog(false)} style={styles.dialog}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog> */}
  </div>
  
  
}