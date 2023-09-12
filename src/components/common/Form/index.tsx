// import { Pars } from './form.type'
import {FormContainer, Button, FormContentWrapper } from './form.style'
import TextField from '../TextField/index'
import React, { useState } from 'react'
import httpRequest from '../../../http-request/httpRequest'

interface FormProps {
  fields: any[]
  endpoint: any
  method: string
  validation?: any
}
  
const Form = ({fields, endpoint, method}:FormProps) => {

  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(`007 post register name: ${name} --- value ${value}`)
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    try {
      const result = await httpRequest({
        endpoint,
        method,
        body: {
          ...formValues,
        },
      })
    }catch(error){
      console.error('Error:', error);
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContentWrapper>

        {fields.map((field:any) =>
              <div key={field.id}>
                <label>{field.label}</label>
                <TextField 
                  pars={field}
                  value={formValues[field.name] || ''}
                  onChange={handleInputChange}
                />
              </div>
        )}
      </FormContentWrapper>
      <Button type="submit">Submit</Button>
    </FormContainer>
  )
}

export default Form
