import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  display: block
  margin: 25px auto
  padding: 0.5em 0.25em
  border: none
  border-radius: 0.2em
  font-size: 1.5em
  text-align: center
  box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2)
`

const Values = ({handleValues, getValue}) => (
  <div className='values'>
      <Input type='text' placeholder='Pomodoro Time' onChange={getValue} />
      <br />
  </div>
)

export default Values
