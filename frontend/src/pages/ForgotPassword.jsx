import React from 'react'
import mmlogo from '../imgs/mmlogo.jpg'
import placeimg from '../imgs/randimage.jpg'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../appcontext/Authcontext'
import {Alert} from 'react-bootstrap'

export default function ForgotPassword() {

  const emailref = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message,setMessage] = useState("")
  const nav = useNavigate()
 
  // const [data,setData] = useState({
  //   email:'',
  //   password:'',
  // })

  async function loginuser(e){
    e.preventDefault()
    
  
  try {
    setMessage("")
    setLoading(true)
    await resetPassword(emailref.current.value)
   setMessage("Check your inbox for further instructions")

  } catch (error) {

    console.error("Failed to reset password", error )
    setError("Failed to reset password")
    
  }

  setLoading(false)
  }
  return (
    <div className = "bg-gray-50 relative ">
  <div className="sm:w-1/2 absolute top-5 left-48 ">
  <img alt="" src={mmlogo}/>
  </div>
<section className="bg-gray-50 min-h-screen flex items-center justify-center">

  <div className = "flex rounded-2xl p-5 ">
 
    <div className=" sm:w-1/2 px-16 bg-white rounded-2xl border shadow-lg">

      <h2 className="font-bold font-sans text-2xl mt-4">Password Reset</h2>
  

      <form onSubmit={loginuser} className="flex flex-col gap-4">
        <label className="mt-8"htmlFor="email">Email Address</label>
        <input className="p-2 rounded-xl border-solid" type="text" name="email" placeholder="Email" ref={emailref} required ></input>
        
        <button type="submit" className="bg-black rounded-xl text-white py-2">Reset Password </button>
        <div>
        <p className="text-xs flex items-center justify-center mt-3"><Link to="/login">Back to Login </Link> </p>
      </div>
    
      </form>

    </div>
 
    <div className="w-1/2 p-5 sm:block hidden ">
      <img className = "rounded-2xl" alt="" src={placeimg}/> 
    </div>





  </div>
</section>

</div>  

  )
}