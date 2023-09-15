import React from 'react'
import { Button } from './button.style'

const TextField = ({btnType, label, onClick}: {btnType?:string, label:string, onClick?:any}) => {
 
  return (
    <>          
        {
            btnType == 'submit'?
            <Button type="submit">{label}</Button>
            :
            <Button onClick={onClick}>{label}</Button>
        }
    </>
  )
}

export default TextField
