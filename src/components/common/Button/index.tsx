import React from 'react'
import { Button } from './button.style'

const TextField = ({btnType, label}: {btnType:string, label:string}) => {
 
  return (
    <>          
        {
            btnType == 'submit'?
            <Button type="submit">{label}</Button>
            :
            <Button >{label}</Button>
        }
    </>
  )
}

export default TextField
