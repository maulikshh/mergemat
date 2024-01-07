import React from 'react'
import mmlogo from '../imgs/mmlogo.jpg'
import placeimg from '../imgs/randimage.jpg'
import { useState } from 'react'
import axios from 'axios'
import {toast, Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();
  const [data,setData] = useState({
    email:'',
    firstname:'',
    lastname:'',
    password:'',
  })

  const registeruser = async (e) =>{
    e.preventDefault()
    const {email,firstname,lastname,password}= data;
    try {
      const {data}= await axios.post('/register',{email,firstname,lastname,password})
      if (data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Registration is successful, please complete additonal data')
      }
    } 
    catch (error) {
      
    }
  }
  return (

  <div className="bg-gray-50 relative">
        <div className="sm:w-1/2 absolute top-5 left-48">
          <img alt="" src={mmlogo}/>
        </div>
     <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className=" flex rounded-2xl p-5">
 
                <div className="sm:w-1/2 px-16 bg-white rounded-2xl border">
                    <h2 className="font-bold font-sans text-xl mt-4">Welcome!</h2>
                    <p className="font-bold font-sans text-2xl  mt-4 mb-4">Signup to Mergemat</p>
                  
                    <form onSubmit={registeruser}>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="text" id="email" className="mt-1 p-3 block w-full rounded-xl border-solid border-black" placeholder="Enter your email" value={data.email} onChange={(e)=> setData({...data, email: e.target.value})} required />
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstname" className="mt-1 p-3 block w-full rounded-xl border-solid border-black" placeholder="Enter your first name" value={data.firstname} onChange={(e)=> setData({...data, firstname: e.target.value})} required />
                    <label className="block text-sm font-medium text-gray-700">last Name</label>
                    <input type="text" id="lastname" className="mt-1 p-3 block w-full rounded-xl border-solid border-black" placeholder="Enter your last name" value={data.lastname} onChange={(e)=> setData({...data, lastname: e.target.value})} required />
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" className="mt-1 p-3 block w-full rounded-xl border-solid border-black" placeholder="Set your password" value={data.password} onChange={(e)=> setData({...data, password: e.target.value})} required />
                    <label className="block text-sm font-medium text-gray-700">Confirm your password</label>
                    <input type="password" id="cpassword" className="mt-1 p-3 block w-full rounded-xl border-solid border-black" placeholder="Confirm your password" />
                    <button type="submit" className="bg-black rounded-xl mt-3 w-full text-white py-2">Sign Up</button>
                    <p className="text-xs flex items-center justify-center mt-3 mb-4">Have an Account Already? <a className="font-bold font-sans ml-2" href="/login">Login</a></p>
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
