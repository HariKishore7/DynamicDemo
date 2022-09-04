import React from 'react'
import Input from './seperate components/Input';
import Select from './seperate components/Select';
import Radio from './seperate components/Radio'
import TextArea from './seperate components/TextArea';
import Number from './seperate components/Number';

const FormData = ({field: {id,label, type, options, validations}})=> {

  switch(type){
    case 'text':
      return(<Input
      id={id}
      label={label}
      type={type}
      validations={validations}
      />)
    case 'radio':
      return(<Radio
        id={id}
        label={label}
        type={type}
        options={options}
        validations={validations}
      />)
    case "select":
      return(<Select
        id={id}
        label={label}
        type={type}
        options={options}
        validations={validations}
      />)
    case "textArea":
      return(<TextArea
        id={id}
        label={label}
        type={type}
        validations={validations}
      />)
    case "number":
      return(<Number
        id={id}
        label={label}
        type={type}
        validations={validations}
      />)
    default:
      return null;
  }

}

export default FormData;
