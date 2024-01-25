import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Notifications from '../components/Notificationbar.jsx'
import './styles/dashboard.css'; // Import a CSS file for styling
import { useAuth } from '../../context/usercontext'

export default function dashboard() {
    return (
      
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
            <body class="h-full bg-gray-100">

            <div class="flex flex-col lg:flex-row h-screen">
            <Sidebar />
            <div class="flex-1 p-6">
            <div class="flex justify-between items-center mb-6">
            <div class="flex space-x-2 items-center">
                <i class="fas fa-bars text-gray-600"></i>
                <span class="font-semibold text-lg">Dashboard for!</span>
            </div>
            <div class="flex space-x-4 items-center">
                <i class="fas fa-search text-gray-600"></i>
                <i class="fas fa-bell text-gray-600"></i>
                <i class="fas fa-user-circle text-gray-600"></i>
                <i class="fas fa-th text-gray-600"></i>
                <i class="fas fa-envelope text-gray-600"></i>
            </div>
            </div>
        </div>
        <Notifications />
        </div>
        </body>
        </div>
        
    )
}