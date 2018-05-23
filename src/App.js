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
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000);
  }

  resetTimer () {
    this.setState({
      timer: 0
    })
  }

  render() {
    return (
      <AppContent 
      startTimer={this.startTimer.bind(this)}
      resetTimer={this.resetTimer.bind(this)}
      timer={this.state.timer}
      />
    )
  }
}

export default App
