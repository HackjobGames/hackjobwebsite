import React from 'react'
import axios from 'axios/dist/axios'
export class devlog extends React.Component {
  constructor(params) {
    super(params)
    this.state = {
      logs: []
    }
  }
  componentDidMount() {
    axios.get('/devlog/1').then(res => {
      this.setState({
        logs: res.data
      })
    })
  }
  render() {
    return (
      this.state.logs.map(log => 
        <div className='center'>
          {log.info}
        </div>
      )
    )
  }
} 
