import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
const TextArea = ({id,label, type, options, validations}) => {

const {handleChange} = useContext(FormContext)

    return (
        <div className="form-group ">
            <label>{label}:  </label>
            <textarea onChange={(event)=>handleChange(id,event)} type={type} name={id} id={id} ></textarea>
        </div>
    )
}
export default TextArea