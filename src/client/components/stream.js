import React from 'react'
import axios from 'axios/dist/axios'
import '../js/twitch-embed'
export class stream extends React.Component {
  componentDidMount() {
    new Twitch.Embed("twitch-embed", {
      width: 1280,
      height: 720,
      channel: "greengogg"
    })
  }
  render() {
    return (
      <div>
        <div id="twitch-embed"/>
      </div>
    )
  }
}
