import { useState } from 'react'
import './App.css'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/landing'
import Login from '../src/pages/login'
import Register from './pages/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { Auth } from './components/Auth'
import ForgotPassword from './pages/ForgotPassword'
import { AuthProvider } from './appcontext/Authcontext';
import Dashboard from './pages/Dashboard'
import Content from './pages/content'
import Group from './pages/Group'
import Video from './pages/video'

// axios.defaults.baseURL= 'http://localhost:3000';
// axios.defaults.withCredentials= true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Toaster position='bottom-right' toastOptions={{duration:2000}} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/content' element={<Content />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/video' element={<Video/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
