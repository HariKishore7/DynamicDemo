import React,{useState, useEffect} from 'react';
import FormData from './components/FormData';
import formjsondata from './formData.json';
import { FormContext } from './FormContext';

// console.log(formjsondata);
export default function App(){
  const [elements, setElements] = useState(null);
  useEffect(()=>{
    setElements(formjsondata[0])
  },[])

  const {fields, formHeading} = elements ?? {}

  const handleSubmit=(event)=>{
    event.preventDefault();
    // alert(fields);
    console.log(elements);
    // alert(elements);
  
  }

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      // if (id === field_id) {
      //   field['field_value'] = event.target.value;
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        // }
      }
      setElements(newElements)
    });
    console.log(elements)
  }

  return (
    <FormContext.Provider value={{handleChange}}>
      <div >
        <h3>{formHeading}</h3>
        {fields ? fields.map((field,i)=><FormData key={i} field={field}/>) : null}
        <button type='submit' onClick={(e)=>handleSubmit(e)} >Submit</button>
      </div>
      </FormContext.Provider>
      )
}