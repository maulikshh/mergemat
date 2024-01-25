import React from 'react'
import mmlogo from '../imgs/mmlogo.jpg'
import placeimg from '../imgs/randimage.jpg'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../appcontext/Authcontext'

export default function Login() {

  const emailref = useRef()
  const passwordref = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
 
  // const [data,setData] = useState({
  //   email:'',
  //   password:'',
  // })

  async function loginuser(e){
    e.preventDefault()
    
  
  try {
    setError('')
    setLoading(true)
    await login(emailref.current.value, passwordref.current.value)

    nav('/dashboard')

  } catch (error) {

    console.error("Failed to create an account", error )
    setError("Failed to create an account")
    
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
      <h2 className="font-bold font-sans text-xl mt-4">Welcome Back!</h2>
      <h2 className="font-bold font-sans text-2xl mt-4">Login</h2>
      <p className =" font-semibold text-sm mt-2"> Login to mergemat</p>

      <form onSubmit={loginuser} className="flex flex-col gap-4">
        <label className="mt-8"htmlFor="email">Email Address</label>
        <input className="p-2 rounded-xl border-solid" type="text" name="email" placeholder="Email" ref={emailref} required ></input>
        <div className="relative">
        <label htmlFor="Password">Password</label>
        <input className="mt-2 p-2  rounded-xl w-full border-solid" type="password" name="password" ref={passwordref}  placeholder="Password" ></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1-3" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
        </svg>
        </div>
        <button type="submit" className="bg-black rounded-xl text-white py-2">Log in </button>
      <div className="flex justify-between">
        <div className="flex items-center ">
              <input  type="checkbox" name="remember-me" ></input>
              <label className ="text-xs" htmlFor="remember-me">Remember me</label>
             
        </div>
        <div>
        <a className ="text-xs"> <Link to="/forgotpassword">Forgot Password</Link></a>
        </div>
      </div>

      <div>
        <p className="text-xs flex items-center justify-center mt-3">Don't have an Account?  <a className="font-bold font-sans" href="/register"> Sign Up</a></p>
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
