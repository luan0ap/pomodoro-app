import React, { Component } from "react";

import Home from "./containers/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  timer = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        value: ++prevState.value
      }));
    }, 1000);
  };

  getSeconds = value => {
    return `0${value % 60}`.slice(-2);
  };

  getMinutes = value => {
    return Math.floor(value / 60);
  };

  startTimer = () => {
    this.timer();
  };

  pauseTimer = () => {
    clearInterval(this.interval);
  };

  resetTimer = () => {
    this.setState({
      value: 0
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Home
        value={value}
        getMinutes={this.getMinutes}
        getSeconds={this.getSeconds}
        startTimer={this.startTimer}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
      />
    );
  }
}

export default App;
