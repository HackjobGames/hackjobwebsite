import React from 'react'
import potato from './game_info/potato'
import birds from './game_info/birdsaway'

export class games extends React.Component {
  constructor(props) {
    super(props)
    this.state = birds
  }
  changeGame(game) {
    this.setState({
      browserData: game.about,
      about: game.about,
      howTo: game.howTo,
      itchId: game.itchId,
      name: game.name,
      gamePlayer: null
    })
  }
  loadPlayer() {
    this.setState({
      gamePlayer:
        <iframe frameBorder="0" src={`https://itch.io/embed-upload/${this.state.itchId}?color=333333`} 
        allowFullScreen={true} width="1000" height="660">
            <a href={`https://hackjobgames.itch.io/${this.state.name}`}>Play Plant The Potato on itch.io</a>
        </iframe>
    })

  }
  render() {
    return (
      <div>
        <div className="center">
          <a onClick={() => this.changeGame(birds)} className="button">Birds Away</a>
          <a onClick={() => this.changeGame(potato)} className="button">Plant The Potato</a>
          <div>
            <div className="center">
              <a onClick={() => this.setState({ browserData: this.state.about })} className="button">About The Game</a>
              <a onClick={() => this.setState({ browserData: this.state.howTo })} className="button">How To Play</a>
              <a onClick={() => this.loadPlayer()} className="button">Play</a>
            </div>
          </div>
        </div>
        <div className='center'>
          <div>{this.state.buttons}</div>
          <div>{this.state.gamePlayer}</div>
          <div>{this.state.browserData}</div>
        </div>
      </div>
    )
  }
} 
