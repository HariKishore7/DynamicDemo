import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';
const Radio = ({id,label, type, options, validations,value}) => {

    const {handleChange} = useContext(FormContext)

return (
    <div className='form-group'>
        <label>{label}: </label>
        {options.map(opt=>{
            return(
                <>
                    <label>{opt.label}: </label>
                    <input onChange={(event)=>handleChange(id,event)} type={type} name={id} id={id}></input>
                </>
            )
        })}
    </div>
    )
}
export default Radio