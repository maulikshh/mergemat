import React from 'react';
import Sidebar from './sidebar.jsx';
import notifications from './notifications.jsx';

function content() {
    return (
        <div>
            <Sidebar />
            <div class="flex-1 p-6">
            <div class="flex justify-between items-center mb-6">
            <div class="flex space-x-2 items-center">
                <i class="fas fa-bars text-gray-600"></i>
                <span class="font-semibold text-lg">Dashboard</span>
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
            <notifications />
            <div className="content">
                <h1>Content</h1>
            </div>
        </div>
    )
    
}