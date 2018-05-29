import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid black
  padding: 15px
  margin: 5px
`

const Values = ({handleValues, getValue}) => (
  <div className='values'>
      <Input type='text' placeholder='Pomodoro Time' onChange={getValue} />
      <br />
  </div>
)

export default Values
