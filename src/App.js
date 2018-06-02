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
    if(this.value === null) {
      console.log('oi')
    }
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

  timer(seconds) {
    const minutesPart = Math.floor(seconds / 60)
    const secondsPart = seconds - minutesPart * 60
    return `${minutesPart}:${secondsPart}`
  }

  getValue(e) {
    this.setState({
      value: this.timer(e.target.value)
    })
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
