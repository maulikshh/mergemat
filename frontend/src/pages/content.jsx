import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import './styles/content.css';
import CanvasDraw from "react-canvas-draw";

const Content = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Store Website Low-Fid</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body>
        <div className="flex flex-col md:flex-row h-screen">
          {/* Sidebar */}
            <Sidebar />

          {/* Main content */}
          <div className="flex-1 p-4 md:p-8 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <a href="#" className="text-gray-600 text-sm mr-4"><i className="fas fa-arrow-left"></i></a>
                <div>
                  <h1 className="text-2xl font-semibold">Store Website Low-Fid</h1>
                  <p className="text-gray-500 text-sm">Part of Software Development</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex space-x-2 mr-4">
                  <img src="https://placehold.co/24x24" alt="User profile picture" className="rounded-full" />
                  <img src="https://placehold.co/24x24" alt="User profile picture" className="rounded-full" />
                  <img src="https://placehold.co/24x24" alt="User profile picture" className="rounded-full" />
                </div>
                <div className="relative">
                  <input type="text" placeholder="Search" className="border border-gray-300 rounded-full py-2 px-4 text-sm" />
                  <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                </div>
                <button className="ml-4 bg-blue-600 text-white rounded-full py-2 px-4 text-sm">Share</button>
              </div>
            </div>

            {/* Toolbar */}
            <div class="bg-white shadow rounded-lg p-4 flex items-center justify-between mb-4">
                <div class="flex space-x-2">
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-bold text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-italic text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-underline text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-link text-gray-600"></i>
                    </button>

                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-arrow-up text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-arrow-down text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-arrow-left text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-arrow-right text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-font text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-paint-brush text-gray-600"></i>
                    </button>
                </div>
                <div class="flex items-center space-x-2">
                    <select class="border border-gray-300 rounded-full text-sm py-1 px-3">
                        <option>14</option>
                    </select>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-align-left text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-align-center text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-align-right text-gray-600"></i>
                    </button>
                    <button class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-align-justify text-gray-600"></i>
                    </button>
                </div>
            </div>

            {/* Whiteboard */}
            <div className="whiteboard p-4">
                <CanvasDraw
                    className="whiteboard"
                    brushColor="#000000"
                    brushRadius={2}
                    lazyRadius={0}
                    canvasWidth={1000}
                    canvasHeight={500}
                    hideGrid={true} // This prop might not exist; it's illustrative
                    style={{
                        background: 'radial-gradient(circle, #000 1px, rgba(255, 255, 255, 0) 1px)',
                        backgroundSize: '28px 28px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                    }}
                />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Content;
