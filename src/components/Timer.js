import React from 'react'
import styled from 'styled-components'

const TimerFont = styled.p`
  font-size: 35px
  font-weight: bolder
`
const Timer = ({ children }) => (
  <div className='timer'>
    <TimerFont> Tempo: {children} </TimerFont>
  </div>
)

export default Timer
