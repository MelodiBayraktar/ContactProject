import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function  Contact() {
  const [contacts,setContacts]=useState([{fullname:"Melodi",phoneNumber:"0000"}])
  useEffect(()=>{
    console.log(contacts)
  }, [contacts]);
  return (
    <div id='container'>
        <List  contacts={contacts}/>
        <Form addContact= {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contact;