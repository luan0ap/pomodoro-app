import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid black
  padding: 15px
  margin: 5px
`

const Values = ({handleValues}) => (
  <div className='values'>
      <Input type='text' placeholder='Pomodoro Time'/>
      <br />
      <Input type='text' placeholder='Break Time' />
  </div>
)

export default Values
