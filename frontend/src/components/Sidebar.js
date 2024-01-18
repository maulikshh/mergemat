import React from 'react';


function Sidebar() {
  return (
    <div class="bg-white p-6 space-y-6 w-full lg:w-64">
            <div class="flex items-center space-x-2">
            <img
                alt="MergeMat logo placeholder"
                class="h-8 w-8"
                src="https://placehold.co/32x32"
            />
            <span class="font-bold text-lg">MergeMat</span>
            </div>
            <div>
            <div class="text-sm font-semibold text-gray-600">Aditya Lolip</div>
            <div class="flex space-x-1 text-xs text-gray-500">
                <span>Favorites</span>
                <span>Recently</span>
            </div>
            </div>
            <div class="space-y-2">
            <div class="font-medium text-gray-800">Dashboards</div>
            <div class="space-y-1">
                <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
                </div>
                <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-users"></i>
                <span>My Groups</span>
                </div>
                <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-file-alt"></i>
                <span>Personal Files</span>
                </div>
            </div>
            </div>
            <div class="space-y-2">
            <div class="font-medium text-gray-800">Pages</div>
            <div class="space-y-1">
                <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-user"></i>
                <span>User Profile</span>
                </div>
                <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-calendar-alt"></i>
                <span>Calender</span>
                </div>
            </div>
            </div>
            <div class="space-y-2">
            <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-compass"></i>
                <span>Explore</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-align-left"></i>
                <span>Content</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-envelope"></i>
                <span>Messages</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
                <i class="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </div>
            </div>
        </div>
  );
}