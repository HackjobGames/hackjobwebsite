import React from 'react'
import axios from 'axios/dist/axios'
// import { GridList, GridListTile, Dialog, DialogContent, DialogActions, DialogTitle, TextareaAutosize, Button, TextField } from '@material-ui/core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { getCookie } from 'getCookie'
import v4 from 'uuid-browser/v4'
import { styles } from 'styles'
import {
  Route,
  useHistory
} from "react-router-dom";
import { marked } from 'marked'

const emptyLog = {
  markdown: '',
  title: '',
  id: v4()
}

export const Devlog = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    logs: [],
    pullData: true,
    currentLog: {id: null, markdown: null, title: null},
    dialogOpen: false,
    isNew: false,
    token: getCookie('session'),
    adminFlag: getCookie('admin')

  })
  if (state.pullData) {
    axios.get('/api/devlog/1').then(res => {
      setState({...state, logs: res.data || [], pullData: false })
    })
  }

  const save = () => {
    if (!state.isNew) {
      axios.put('/api/devlog/save', state.currentLog).then((res) => {
        const ix = state.logs.findIndex(log => log.id === res.data.id)
        state.logs.splice(ix, 1, res.data)
        setState({ ...state, isNew: false, dialogOpen: false })
      })
    } else {
      axios.post('/api/devlog/create', state.currentLog).then(res => {
        setState({...state, isNew: false, dialogOpen: false, logs: [res.data, ...state.logs]})
      })
    }
  }

  const updateMarkdown = (event) => {
    setState({ ...state, currentLog: {...state.currentLog, markdown: event.target.value } })
  }

  const updateTitle = (event) => {
    setState({ ...state, currentLog: { ...state.currentLog, title: event.target.value } })
  }
  
  const newLog = () => {
    state.isNew = true
    state.currentLog = emptyLog;
    setState({...state, dialogOpen: true})
  }

  const EditIcon = (props) => {
    return null
      // <FontAwesomeIcon 
      //   onClick={() => setState({...state, dialogOpen: true, currentLog: props.log})}
      //   icon={faPencilAlt}
      //   style={styles.pencil}
      // /> : <div></div>
  }
  
  const CreateButton = (props) => {
    return props.admin === 'true' ? null
      // <Button style={styles.create} onClick={newLog}>Create New Devlog</Button>
    : <div></div>
  }

  const handlePaste = (event) => {
    const items = event.clipboardData.items || []
    console.log(event)

    for (let i = 0; i < items.length; i++) {
        if (!items[i].type.includes('image')) {
          continue
        }
        const blob = items[i].getAsFile()
        let data = new FormData()
        data.append('file', blob, 'image.png')
        data.append('id', state.currentLog.id)
        data.append('token', getCookie('session'))
        axios.put('/api/devlog/image/' + state.currentLog.id, data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data`,
          }
        }).then(res => {
          setState({ ...state, currentLog: { ...state.currentLog, markdown: state.currentLog.markdown + `![](${window.location.protocol}//${window.location.host}${res.data})` } }) 
        })
    }
  }

  const goToLog = (log) => {
    history.push('/devlog/' + log.id)
  }

  return (
    <div>
      <Route exact path={'/'}>
        <CreateButton admin={state.adminFlag}/>
        {/* <Dialog open={state.dialogOpen} >
          <DialogTitle style={styles.button}>
            <TextField
              label="Title"
              value={state.currentLog ? state.currentLog.title : ''}
              onChange={updateTitle}
              InputLabelProps={{
                style: styles.button
              }}
              InputProps= {{
                style: styles.input
              }}
            />
          </DialogTitle>
          <DialogContent style={styles.button}>
            <TextareaAutosize rows={50} cols={70} style={styles.button} onPaste={handlePaste}  onChange={updateMarkdown} value={state.currentLog ? state.currentLog.markdown : ''} />
          </DialogContent>
          <DialogActions style={styles.button}>
            <Button onClick={save} style={styles.button}>
              Post
            </Button>
            <Button onClick={() => setState({...state, dialogOpen: false})} style={styles.button}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <GridList style={styles.grid} cellHeight={300} cols={1}>   
        {state.logs.map(log =>
          <GridListTile style={styles.item} key={log.id}>
            <EditIcon admin={state.adminFlag} log={log}/>
            <div onClick={() => goToLog(log)} style={styles.textContainer} >
              <div style={styles.text}>{log.title}</div>
            </div>
          </GridListTile>
        )}
        </GridList> */}
      </Route>
      {state.logs.map(log =>
        <Route key={log.id} exact path={'/devlog/' + log.id}>
          <article style={styles.log} dangerouslySetInnerHTML={{ __html: marked(log.markdown) }}/>
        </Route>
      )}
    </div>
  )
} 
