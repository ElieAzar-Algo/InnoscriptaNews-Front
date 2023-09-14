// import { Pars } from './form.type'
import {FormContainer, FormContentWrapper, InputLabel, StyledLink} from './form.style'
import TextField from '../TextField/index'
import React, { useState } from 'react'
import httpRequest from '../../../http-request/httpRequest'
import { useAuth } from '../../../context/AuthContext'
import Button from '../Button'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface FormProps {
  fields: any[]
  endpoint: any
  method: string
  validation?: any
}
  
const Form = ({fields, endpoint, method}:FormProps) => {

  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
  const [errors, setErrors] = useState([]);
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const currentRoute = location.pathname;
  // console.log("007 current location route",currentRoute)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(`007 post register name: ${name} --- value ${value}`)
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    try {
      const response = await httpRequest({
        endpoint,
        method,
        body: {
          ...formValues,
        },
      })
      if(response.status == 'Success'){
        const { data } = response
        // console.log(`succeeded auth reponse for ${endpoint} ---> `, data)
        setToken(data.token)
        localStorage.setItem("innoscriptaToken",data.token )
        endpoint == "/login"? navigate('/home'):navigate('/preference') 
      }
      else if( response.status == 400)
      {
        // console.log(`failed auth reponse for ${endpoint} ---> `, response)
        setErrors(response.errors)
      }
    }catch(error){
      console.error('Error:', error);
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContentWrapper>

        {fields.map((field:any) =>
              <div key={field.id}>
                <InputLabel>{field.InputLabel}</InputLabel>
                <TextField 
                  pars={field}
                  value={formValues[field.name] || ''}
                  onChange={handleInputChange}
                />
              </div>
        )}
        <Button btnType="submit" label="Submit"/>
        {
          currentRoute=='/register'?
          <Link  to="/">Login</Link>:
          <Link  to="/register">Register</Link>
        }
      </FormContentWrapper>
      
      
    </FormContainer>
  )
}

export default Form
