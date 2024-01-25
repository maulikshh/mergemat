import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useState} from 'react';

export const Auth = () =>{

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error("error") 
    }
    
  }
  return(
    <div>
      <input placeholder="Email" onChange={(e)=> setemail(e.target.value)}></input>
      <input placeholder="Firstname"></input>
      <input placeholder="Lastname"></input>
      <input placeholder="Password" onChange={(e)=> setpassword(e.target.value)}></input>
      <button onClick={signup}> sign up </button>
    </div>
    
  )
}