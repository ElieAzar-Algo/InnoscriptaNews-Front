import React from 'react'
import { Pars } from '../pars.type'
import { TextInput } from './textfield.style'

const TextField = ({pars, value, onChange}: {pars: Pars, value:any, onChange:any}) => {
 
  const { id, type, name, placeholder} = pars
  return (
    <TextInput
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
    />
  )
}

export default TextField
