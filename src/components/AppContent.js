import React from 'react'
import Actions from './Actions'
import Values from './Values'
import Timer from './Timer'

const AppContent = ({startTimer, stopTimer, resetTimer, timer, getValue}) => (
  <div className='app'>
    <h1> Pomodoro App </h1>
    <p><a href='https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro'> O que é a Tecnica Pomodoro? </a></p>
    <Values getValue={getValue} />
    <Actions startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
    <Timer children={timer} />
  </div>
)

export default AppContent
