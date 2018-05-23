import React from 'react'
import Actions from './Actions'

const AppContent = ({startTimer, timer, resetTimer}) => (
  <div className='app'>
    <h1> Pomodoro App </h1>

    <label>
      Pomodoro Time <br/>
      <input type='text' />
    </label>  <br/>  <br/>

    <label>
      Break Time  <br/>
      <input type='text' />
    </label>  <br/>
    
    <Actions startTimer={startTimer} resetTimer={resetTimer} />
    <div className='counter'>
      <p> Time: {timer} </p>
    </div>
  </div>
)

export default AppContent
