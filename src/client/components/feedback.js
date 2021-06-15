import React from 'react'
import axios from 'axios/dist/axios'
import { getCookie } from '../../util'
import { GridList, GridListTile, Dialog, DialogContent, DialogActions, DialogTitle, TextareaAutosize, Button, TextField } from '@material-ui/core'
import { styles } from 'styles'
import {
  useHistory
} from "react-router-dom";

export const Feedback = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    feedback: [],
    pullData: true,
    content: '',
    token: getCookie('session')
  })
  if (state.pullData) {
    axios.get('/api/feedback').then(res => {
      setState({...state, feedback: res.data || [], pullData: false })
    })
  }

  const save = () => {
    axios.post(`/api/feedback`, { ...state, feedback: undefined }).then((res) => {
      setState({ ...state, feedback: [res.data, ...state.feedback] })
    })
  }

  const updateContent = (event) => {
    setState({ ...state, content: event.target.value })
  }

  return (
    <div>
      <div style={styles.grid}>
        <TextareaAutosize rows={10} cols={100} style={styles.button} onChange={updateContent} value={state.content} />
        <Button onClick={save} style={styles.button}>
          Post
        </Button>
      </div>
      <GridList style={styles.grid} cellHeight={'auto'} cols={1}>   
        {state.feedback.map(post =>
          <GridListTile  key={post.id}>
            <h1>{post.username}</h1>
            <div style={styles.item}>
              <div style={{overflowWrap: "break-word", fontSize: '30px'}}>{post.content}</div>
            </div>
          </GridListTile>
        )}
      </GridList>
    </div>
  )
} 
