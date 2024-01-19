import React from 'react';

export default function NotificationBar() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div
        class="bg-white p-6 space-y-6 w-full lg:w-64 lg:h-screen lg:fixed lg:inset-y-0 lg:right-0 overflow-y-auto"
      >
        <div class="font-semibold text-lg mb-4">Notifications</div>
        <div class="space-y-4">
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-check-circle text-green-500"></i>
            <div>
              <div>You fixed a bug.</div>
              <div class="text-xs text-gray-500">Just now</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-user-plus text-blue-500"></i>
            <div>
              <div>New user registered.</div>
              <div class="text-xs text-gray-500">59 minutes ago</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-check-circle text-green-500"></i>
            <div>
              <div>You fixed a bug.</div>
              <div class="text-xs text-gray-500">12 hours ago</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-user-friends text-purple-500"></i>
            <div>
              <div>Andi Lane subscribed to you.</div>
              <div class="text-xs text-gray-500">Today, 11:59 AM</div>
            </div>
          </div>
          <div class="font-semibold text-lg mb-4">Activities</div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-paint-brush text-red-500"></i>
            <div>
              <div>Changed the style.</div>
              <div class="text-xs text-gray-500">Just now</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-upload text-blue-500"></i>
            <div>
              <div>Released a new version.</div>
              <div class="text-xs text-gray-500">59 minutes ago</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-bug text-orange-500"></i>
            <div>
              <div>Submitted a bug.</div>
              <div class="text-xs text-gray-500">12 hours ago</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-edit text-purple-500"></i>
            <div>
              <div>Modified a data in Page X.</div>
              <div class="text-xs text-gray-500">Today, 11:59 AM</div>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <i class="fas fa-trash-alt text-red-500"></i>
            <div>
              <div>Deleted a page in Project X.</div>
              <div class="text-xs text-gray-500">Feb 2, 2023</div>
            </div>
          </div>

          <div class="font-semibold text-lg mb-4">Recent Chats</div>
          <div class="flex items-center space-x-2 text-sm">
            <img
              alt="Natali Craig profile image placeholder"
              class="h-8 w-8 rounded-full"
              src="https://placehold.co/32x32"
            />
            <span>Natali Craig</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <img
              alt="Drew Cano profile image placeholder"
              class="h-8 w-8 rounded-full"
              src="https://placehold.co/32x32"
            />
            <span>Drew Cano</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <img
              alt="Andi Lane profile image placeholder"
              class="h-8 w-8 rounded-full"
              src="https://placehold.co/32x32"
            />
            <span>Andi Lane</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <img
              alt="Koray Okumus profile image placeholder"
              class="h-8 w-8 rounded-full"
              src="https://placehold.co/32x32"
            />
            <span>Koray Okumus</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <img
              alt="Kate Morrison profile image placeholder"
              class="h-8 w-8 rounded-full"
              src="https://placehold.co/32x32"
            />
            <span>Kate Morrison</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <img
              alt="Melody Macy profile image placeholder"
              class="h-8 w-8 rounded-full"
              src="https://placehold.co/32x32"
            />
            <span>Melody Macy</span>
          </div>
        </div>
      </div>
      </div>

    )
}

