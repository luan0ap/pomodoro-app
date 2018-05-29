import React, { Component } from 'react'

import AppContent from './components/AppContent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      timer: 0,
      value: null
    }
  }

  startTimer () {
    this.counterTimer = setInterval(() => {
      this.setState({
        timer: this.value --
      })
    }, 1000)
  }

  stopTimer () {
    clearInterval(this.counterTimer)
  }

  resetTimer() {
    this.setState({
      timer: 0
    })
    clearInterval(this.counterTimer)
  }

  getValue(e) {
    this.value = e.target.value * 60
  }

  render() {
    return (
      <AppContent 
      startTimer={this.startTimer.bind(this)}
      stopTimer={this.stopTimer.bind(this)}
      resetTimer={this.resetTimer.bind(this)}
      getValue={this.getValue.bind(this)}
      timer={this.state.timer}
      />
    )
  }
}

export default App
