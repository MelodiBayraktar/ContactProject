import {useState,useEffect} from 'react'
const initialFormValues = {fullname:"",phoneNumber: ""};

function Form({addContact,contacts}) {

  const [form,setForm]=useState({fullname:"",phoneNumber: ""});

  useEffect(()=>{
    setForm(initialFormValues);
  },[contacts]);

  const onChangeInput= (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.fullname ==="" || form.phoneNumber===""){
        return false;
    }
    
    addContact([...contacts,form]);
    // setForm({fullname:"",phoneNumber: ""});
    
   
  }
  return (
    <form onClick={onSubmit}>
      <div><input name='fullname' placeholder='Full Name' onChange={onChangeInput} value={form.fullname}/></div>
      <div><input name='phoneNumber' placeholder='Phone' onChange={onChangeInput} value={form.phoneNumber}/></div>
      <button className='btn'>Add</button>
    </form>
  )
}

export default Form