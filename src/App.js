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
        timer: this.value --
      })
    }, 1000)
  }

  stopTimer () {
    clearInterval(this.counterTimer)
  }

  resetTimer() {
    this.value = 0
  }

  getValue(e) {
    this.value = e.target.value
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
