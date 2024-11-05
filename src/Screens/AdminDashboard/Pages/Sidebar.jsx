import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ListAlt, CheckCircle, HourglassEmpty, Feedback } from '@mui/icons-material'; // Import icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Sidebar = ({ open, toggleDrawer }) => {
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
        { text: 'Add Products', icon: <ProductionQuantityLimitsIcon />, path: '/admin/addproducts' },
        { text: 'Orders', icon: <ListAlt />, path: '/admin/orders' },
        { text: 'Feedback', icon: <Feedback />, path: '/admin/feedback' }, // Feedback icon
        { text: 'Customer Feedbacks', icon: <Feedback />, path: '/admin/customerfeedbacks' }, // Feedback icon
    ];

    return (
        <Drawer anchor='left' open={open} onClose={toggleDrawer} sx={{ width: 250 }}>
            <Box sx={{ width: 250, backgroundColor: '#f5f5f5', height: '100%' }}>
                <Typography variant="h6" sx={{ padding: 2, fontWeight: 'bold', color: '#4A148C' }}>
                    Admin Dashboard
                </Typography>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button component={Link} to={item.path} key={index}>
                            <ListItemIcon sx={{ color: '#4A148C' }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;

