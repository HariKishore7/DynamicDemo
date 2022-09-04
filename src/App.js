import React,{useState, useEffect} from 'react';
import FormData from './components/FormData';
import formjsondata from './formData.json';
import { FormContext } from './FormContext';

// console.log(formjsondata);
export default function App(){
  const [elements, setElements] = useState(null);
  const [doSubmit, setDoSubmit] = useState(false);
  useEffect(()=>{
    setElements(formjsondata[0])
  },[])

  const {fields, formHeading} = elements ?? {}

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(!doSubmit){
      alert("Please fill all fields before submitting");
      return;
    }
    console.log(elements);
    let result = "";
    // alert("Name: "+firstName+lastName);
    elements.fields.forEach(field => {
      
       result = result.concat(field.id +" : "+field.value+"\n")
        // field['value'] = event.target.value;
      // setElements(newElements)
    // console.log(event.target);
  });
  console.log(elements.fields);
  alert(result);
  }

  const handleChange = (id, event) => {
    setDoSubmit(true);
    console.log("id"+id+"event"+event);
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const val = event.target.value; 
      if (field.id === id) {
        if(val!==""){
          field['value'] = val;
          field['error'] = '';
        }
        else{
          field["error"] = "Field is required."
        }
      }
      setElements(newElements);

    // console.log(event.target);
  });
  isValid();
}

const isValid = ()=>{
    elements.fields.forEach((field)=>{
      if(field.error!==''){
        setDoSubmit(false);
      }
    })
}

// const handleChange = (id, event) => {
//   const newElements = { ...elements }
//   newElements.fields.forEach(field => {
//     const { field_type, field_id } = field;
//     if (id === field_id){
//       switch (field_type) {
//         case 'checkbox':
//           field['field_value'] = event.target.checked;
//           break;
//         default:
//           field['field_value'] = event.target.value;
//           break;
//       }
//     }
//     setElements(newElements)
//   });
//   console.log(elements)
// }


  return (
    <FormContext.Provider value={{handleChange}}>
      <div >
        <h3>{formHeading}</h3>
        <form>
          {fields ? fields.map((field,i)=><FormData key={i} field={field}/>) : null}
          <button type='submit' onClick={(e)=>handleSubmit(e)} >Submit</button>
        </form>
        
      </div>
      </FormContext.Provider>
      )
}