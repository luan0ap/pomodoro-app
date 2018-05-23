import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.start ? '#05c46b' : '#ff3f34'}
  height: 50px
  width: 100px
`

const Actions = ({startTimer, resetTimer}) => (
  <div className='actions'>
    <Button onClick={startTimer} start> Start </Button>
    <Button onClick={resetTimer}> Reset </Button>
  </div>
)

export default Actions
