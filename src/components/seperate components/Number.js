import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
const Number = ({id,label, type, options, validations}) => {
    const {handleChange} = useContext(FormContext)

    return (
        <div className="form-group ">
            <label>{label}:  </label>
            <input onChange={(event)=>handleChange(id,event)} type={type} name={id} id={id} ></input>
        </div>
    )
}
export default Number