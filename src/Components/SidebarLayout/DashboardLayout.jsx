// // // // DashboardLayout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaBars, FaSearch, FaBell } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Handle logout logic
    alert('Logged out');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen relative">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          {/* Toggle Button for Sidebar */}
          <button
            onClick={toggleSidebar}
            className="text-gray-600"
          >
            <FaBars />
          </button>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md bg-gray-100 rounded-lg p-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none w-full"
            />
          </div>

          {/* User Dropdown */}
          <div className="flex items-center space-x-4 relative">
            <FaBell className="text-gray-500" />
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Tom Cook</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <div className="px-4 py-2 text-gray-800 border-b">
                    tom.cook@example.com
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Dashboard</h1>

          {/* Content Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Card 1</h2>
              <p className="text-gray-600">This is the content for card 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Card 2</h2>
              <p className="text-gray-600">This is the content for card 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Card 3</h2>
              <p className="text-gray-600">This is the content for card 3.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;