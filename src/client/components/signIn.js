import { ListItem, Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios/dist/axios'
import { getCookie } from '../../util'


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
    axios.post('/api/users/signUp', state).then(res => {
      setState({ ...state, response: { severity: 'success', message: 'User Created Successfully, You May Sign In' }, username: '', password: ''  })
    }).catch(err => {
      setState({ ...state, response: { severity: 'error', message: err.response.data}, username: '', password: ''  })
    })
  }

  const toggleDialog = (status) => {
    setState({ ...state, dialogOpen: status })
  }

  const ActionAlert = (props) => {
    if (props.response) {
      return <Alert severity={props.response.severity} style={styles.dialog}>
              {props.response.message}
            </Alert>
    } else {
      return <span/>
    }
  }

  const SignInButton = () => {
    if (getCookie('session') === '') {
      return <ListItem style={styles.item} onClick={() => toggleDialog(true)}>
        <a>Sign In</a>
      </ListItem>
    } else {
      return <ListItem style={styles.item} onClick={() => {
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        location.reload()
      }}>Sign Out</ListItem>
    }
  }

  return <div>
          <SignInButton/>
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
            </Dialog>
  </div>
  
  
}