// import React, { useState } from 'react';
// import { FaHome, FaUsers, FaFolder, FaCalendar, FaFileAlt, FaChartBar } from 'react-icons/fa';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Sidebar is closed by default

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-30 transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out`}
//       >
//         {/* Sidebar Content */}
//         <div className="p-4 flex items-center justify-between">
//           <span className="text-2xl font-bold">Logo</span>
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-white focus:outline-none"
//           >
//             ✕
//           </button>
//         </div>
//         <div className="mt-8">
//           <ul>
//             <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
//               <FaHome className="mr-4" />
//               Dashboard
//             </li>
//             <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
//               <FaUsers className="mr-4" />
//               Team
//             </li>
//             <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
//               <FaFolder className="mr-4" />
//               Projects
//             </li>
//             <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
//               <FaCalendar className="mr-4" />
//               Calendar
//             </li>
//             <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
//               <FaFileAlt className="mr-4" />
//               Documents
//             </li>
//             <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
//               <FaChartBar className="mr-4" />
//               Reports
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
//         {/* Navbar with Toggle Button */}
//         <div className="flex items-center justify-between p-4 shadow bg-white">
//           {/* Hamburger Icon */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-600 focus:outline-none"
//           >
//             ☰
//           </button>
//           {/* Search and Profile Section */}
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 border rounded-md focus:outline-none"
//             />
//             <div className="flex items-center">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="ml-2">
//                 <p className="text-gray-700">Tom Cook</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="p-6">Your main content goes here...</div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;






import React, { useEffect, useState } from 'react';
import { FaHome, FaUsers, FaFolder, FaCalendar, FaFileAlt, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Config/firebaseConfig';
import { LoginButton } from '../Button/LoginButton';
import { SignupButton } from '../Button/SignupButton';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is closed by default

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Content */}
        <div className="p-4 flex items-center justify-between">
          <span className="text-2xl font-bold">Logo</span>
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 bg-gray-300 hover:bg-gray-700 hover:text-gray-300 border-none focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div className="mt-8">
          <ul>
            <Link to="/">
              <li className="flex items-center p-4 text-white hover:bg-gray-700 cursor-pointer">
                <FaHome className="mr-4" />
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="flex items-center p-4 text-white hover:bg-gray-700 cursor-pointer">
                <FaUsers className="mr-4" />
                About
              </li>
            </Link>
            <Link to="/products">
              <li className="flex items-center p-4 text-white hover:bg-gray-700 cursor-pointer">
                <FaFolder className="mr-4" />
                Products
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex items-center p-4 text-white hover:bg-gray-700 cursor-pointer">
                <FaCalendar className="mr-4" />
                Contact
              </li>
            </Link>
            <Link to="/cart">
              <li className="flex items-center p-4 text-white hover:bg-gray-700 cursor-pointer">
                <FaFileAlt className="mr-4" />
                <ShoppingCartIcon />
              </li>
            </Link>
            <li className="flex items-center p-4 text-white hover:bg-gray-700 cursor-pointer">
              <FaChartBar className="mr-4" />
              Reports
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        {/* Navbar with Toggle Button */}
        <div className="flex items-center justify-between p-4 shadow bg-white">
          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 bg-gray-300 hover:bg-gray-700 hover:text-gray-300 border-none focus:outline-none"
          >
            ☰
          </button>
          {/* Search and Profile Section */}
          {/* <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-md focus:outline-none"
            />
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-700">Tom Cook</p>
              </div>
            </div>
          </div> */}
          {/* Profile Section */}
          {user ? (
            <div className="flex items-center">
              {/* Show user profile picture if available, otherwise show default */}
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-700">{user.displayName || 'User'}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/signup" >
                <SignupButton />
              </Link>
              <Link to="/login">
                <LoginButton />
              </Link>
            </div>
          )}
        </div>

        {/* Main Content Area */}
      </div>
    </div>
  );
};

export default Sidebar;



