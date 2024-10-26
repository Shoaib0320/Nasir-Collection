// // // src/Screens/AdminDashboard/AdminDashboard.js
// // import React from 'react';
// // import DashboardLayout from './DashboardLayout';
// // import { Outlet } from 'react-router-dom';

// // const AdminDashboard = () => {
// //   return (
// //     <DashboardLayout>
// //       <Outlet /> {/* This will render the child routes */}
// //     </DashboardLayout>
// //   );
// // };

// // export default AdminDashboard;






// // AdminLayout.js
// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Sidebar from './Sidebar'; // Make sure the path is correct

// const AdminDashboard = ({ children }) => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleDrawer = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <AppBar position="static" sx={{ backgroundColor: '#4A148C' }}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                         Admin Dashboard
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
//             <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f5f5', padding: 3 }}>
//                 {children} {/* This will render the page content */}
//             </Box>
//         </Box>
//     );
// };

// export default AdminDashboard;
