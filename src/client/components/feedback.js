import React from 'react'
import axios from 'axios/dist/axios'
import { getCookie } from '../../util'
import v4 from 'uuid-browser/v4'
import {
  useHistory
} from "react-router-dom";

const styles = {
  grid: {
    width: '75%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '8vh'
  },
  item: {
    borderStyle: 'solid',
    borderColor: '#45b80b',
    marginTop: '5px',
    marginBottom: '5px',
    cursor: 'pointer'
  },
  text: {
    position: 'relative',
    top: '50%',
    fontSize: '50px',
    transform: 'translateY(-50%)',
  },
  textContainer: {
    width: '100%',
    height: '100%',
    color: 'white',
    textDecoration: 'none',
  },
  pencil: {
    color: '#45b80b',
    position: 'absolute',
    top: '0%',
    right: '0%',
    fontSize: '2em',
    zIndex: '100'
  },
  create: {
    backgroundColor: '#45b80b',
    position: 'absolute',
    top: '0%',
    right: '0%',
    fontSize: '.8em',
  },
  button: {
    backgroundColor: '#151719',
    color: '#45b80b'
  },
  input: {
    color: '#45b80b',
    borderBottom: '#45b80b 2px'
  },
  log: {
    width: '80%',
    top: '10%',
    margin: 'auto'
  }
}

export const Feedback = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    comments: [],
    pullData: true,
    isNew: false,
    token: getCookie('session')
  })
  if (state.pullData) {
    axios.get('/api/feedback/1').then(res => {
      setState({...state, comments: res.data || [], pullData: false })
    })
  }


  return (
    <div>
    </div>
  )
} 
