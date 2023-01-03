import React,{ useState } from 'react'
import { validate } from '../utils/validators'

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID',
}

const Input = ({ label, id, type, validators, errorText }) => {
const [val,setValue]=useState('')
const [inputval,setInputval]=useState(INPUT_STATES.UNTOUCHED)
const blur=(e)=>{
  setValue(e.target.value)
 if (!validate(val,validators)) {
  setInputval(INPUT_STATES.VALID)
}
}


   if(inputval===INPUT_STATES.UNTOUCHED){
    return (
      <div className={ "form-input" } data-testid="form-input">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} validators={validators} label={label} onBlur={blur} />
        {validate(val,validators) && (
        <p>{errorText}</p>
        )}
      </div>
    )
   }

   else{
    return (
      <div className={validate(val,validators) ? "form-input" : "form-input form-input--invalid"} data-testid="form-input">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} validators={validators} label={label} onChange={(e)=>setValue(e.target.value)} />
        {!validate(val,validators) && (<p>{errorText}</p>)}
      </div>
    )
   }
}

export default Input
