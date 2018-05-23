import React from 'react'
import Actions from './Actions'
import Values from './Values'
import Timer from './Timer'

const AppContent = ({startTimer, stopTimer, timer}) => (
  <div className='app'>
    <h1> Pomodoro App </h1>
    <Values />
    <Actions startTimer={startTimer} stopTimer={stopTimer} />
    <Timer children={timer} />
  </div>
)

export default AppContent
