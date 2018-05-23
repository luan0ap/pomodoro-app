import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: #FFF
  cursor: pointer
  border-radius: 2px
  border: none
  font-size: 20px
  margin: 5px
  height: 50px
  width: 100px
  opacity: 0.9

  &:active {
    opacity: 1
  }
`

const StartButton = Button.extend`
  background: #2BB760
`

const StopButton = Button.extend`
  background: #A92F41
`

const Actions = ({startTimer, stopTimer}) => (
  <div className='actions'>
    <StartButton onClick={startTimer}> Start </StartButton>
    <StopButton onClick={stopTimer}> Stop </StopButton>
  </div>
)

export default Actions
