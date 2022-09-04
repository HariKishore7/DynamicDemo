import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';
const Select = ({id,label, type, options, validations,value}) => {
    const {handleChange} = useContext(FormContext)
return (
    <div className='form-group'>
        <label>{label}: </label>
        <select onChange={(event)=>handleChange(id,event)} className='form-control'>
             {options.map((opt,i)=>{
                return(
                    <option id={id} key={i} value={opt.label}>{opt.label}</option>
                )
            })} 
        </select>
    </div>
    )
}
export default Select