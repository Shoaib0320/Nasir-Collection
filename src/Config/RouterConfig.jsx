import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'; // Import necessary MUI components
import { Home } from '../Screens/Home/Home';
import { About } from '../Screens/About/About';
import { Products } from '../Screens/Products/Products';
import { Contact } from '../Screens/Contact/Contact';
import SingleProduct from '../Screens/SingleScreen/singleProduct';
import AddToCart from '../Screens/Add-to-cart-Screen/Addtocart';
import { LoginButton } from '../Components/Button/LoginButton';
import { Login } from '../Components/Form/Login';
import { SignUp } from '../Components/Form/SignUp';
import AdminDashboard from '../Screens/AdminDashboard/Pages/DashboardLayout';  // Import Admin Dashboard
import Orders from '../Screens/AdminDashboard/Pages/Orders';
import Feedback from '../Screens/AdminDashboard/Pages/Feedback';
import AddProducts from '../Screens/AdminDashboard/Pages/AddProducts';
import { CustomersOrders } from '../Screens/CustomerOrders/CustomersOrders';
import { Navbar } from '../Components/Navbar/Navbar';
import { CustomerFeedbacks } from '../Screens/AdminDashboard/Pages/CustomerFeedbacks';

// Create a theme for a VIP look
const theme = createTheme({
    palette: {
        primary: {
            main: '#4A148C', // Dark Purple
        },
        secondary: {
            main: '#FF4081', // Pink for accents
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff', // Card background
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.75rem',
        },
    },
});

export const RouterConfig = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Apply baseline styles */}
            <BrowserRouter>
            {/* <Navbar /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login-form' element={<LoginButton />} />
                    <Route path='/singleProduct/:id' element={<SingleProduct />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cart' element={<AddToCart />} />
                    
                    <Route path='/customersorder' element={
                        <>
                            <CustomersOrders />
                        </>
                    } />

                    {/* Admin Dashboard Routes */}
                    <Route path='/admin' element={<AdminDashboard />} />
                    <Route path='/admin/addproducts' element={<AddProducts />} />
                    <Route path='/admin/orders' element={<Orders />} />
                    <Route path='/admin/feedback' element={<Feedback />} />
                    <Route path='/admin/customerfeedbacks' element={<CustomerFeedbacks />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
