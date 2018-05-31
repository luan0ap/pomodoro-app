import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: #FFF
  cursor: pointer
  border-radius: 2px
  background: transparent;
  border: 1px solid #FFF
  font-size: 20px
  margin: 5px
  height: 50px
  width: 100px
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);
  }
`

const StartButton = Button.extend`

`

const StopButton = Button.extend`
`

const ResetButton = Button.extend`
`

const Actions = ({startTimer, stopTimer, resetTimer}) => (
  <div className='actions'>
    <StartButton onClick={startTimer}> Iniciar </StartButton>
    <StopButton onClick={stopTimer}> Parar </StopButton>
    <ResetButton onClick={resetTimer}> Resetar </ResetButton>
  </div>
)

export default Actions
