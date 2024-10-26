import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'; // Import the updated Sidebar component
import { db } from '../../../Config/firebaseConfig'; // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions
import './MainComponent.css'; // Import your custom CSS

const MainComponent = ({ showMainContent = true }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [totals, setTotals] = useState({
        users: 0,
        products: 0,
        orders: 0,
        feedback: 0,
    });
    const [users, setUsers] = useState([]); // State to hold user data

    const toggleDrawer = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const fetchTotals = async () => {
            const usersSnapshot = await getDocs(collection(db, 'Users'));
            const productsSnapshot = await getDocs(collection(db, 'products'));
            const ordersSnapshot = await getDocs(collection(db, 'Checkout'));
            const feedbackSnapshot = await getDocs(collection(db, 'Feedback'));

            setTotals({
                users: usersSnapshot.size,
                products: productsSnapshot.size,
                orders: ordersSnapshot.size,
                feedback: feedbackSnapshot.size,
            });

            // Fetch users
            const usersData = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(usersData); // Set user data to state
        };

        fetchTotals();
    }, []);

    return (
        <div>
            <AppBar position="static" sx={{ background: '#6DA5C0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Playfair Display, serif', fontWeight: 'bold', letterSpacing: '0.1rem', color: '#fffff' }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />

            <br />
            <br />
            <br />

            {showMainContent && (
                <Grid container spacing={3} sx={{ padding: 3, backgroundColor: '#F1F1F1' }}>
                    {Object.entries(totals).map(([key, value]) => (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                background: '#6DA5C0',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                }
                            }}>
                                <CardContent sx={{ textAlign: 'center', padding: 2 }}>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                                        {value}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                    {/* User List Section */}
                    <Grid item xs={12}>
                        <Paper sx={{ padding: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>User List</Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Password</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell>{user.name}</TableCell> {/* Assuming 'name' is a field in your user document */}
                                                <TableCell>{user.email}</TableCell> {/* Assuming 'email' is a field in your user document */}
                                                <TableCell>{user.password}</TableCell> {/* Assuming 'password' is a field in your user document */}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default MainComponent;
