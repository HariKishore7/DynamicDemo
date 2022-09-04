import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
const TextArea = ({id,label, type, options, validations,error}) => {

const {handleChange} = useContext(FormContext)

    return (
        <div className="form-group ">
            <label>{label}:  </label>
            <textarea onChange={(event)=>handleChange(id,event,validations)} type={type} name={id} id={id} ></textarea>
            <span>{error&&error}</span>
        </div>
    )
}
export default TextArea