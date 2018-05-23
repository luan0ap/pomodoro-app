import React, { Component } from 'react'

import AppContent from './components/AppContent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      timer: 0
    }
  }

  startTimer () {
    this.counterTimer = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000);
  }

  stopTimer () {
    clearInterval(this.counterTimer)
  }

  render() {
    return (
      <AppContent 
      startTimer={this.startTimer.bind(this)}
      stopTimer={this.stopTimer.bind(this)}
      timer={this.state.timer}
      />
    )
  }
}

export default App
