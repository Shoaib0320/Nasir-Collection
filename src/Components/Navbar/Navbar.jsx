import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/logo.jpg';
import { LoginButton } from '../Button/LoginButton';
import { SignupButton } from '../Button/SignupButton';
import { auth } from '../../Config/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { styled } from '@mui/system';
import { IconButton, Menu, MenuItem, Typography, Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { db } from '../../Config/firebaseConfig'; // Ensure this is imported
import { doc, getDoc } from 'firebase/firestore';

// Custom styles for the Material-UI Menu with a gradient background
const StyledMenu = styled(Menu)(/* your styles */);

export const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [hasOrders, setHasOrders] = useState(false); // New state for orders
  const [anchorEl, setAnchorEl] = useState(null);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Check for orders
        const checkoutRef = doc(db, 'Checkout', currentUser.displayName); // Use user name or another unique identifier
        const docSnapshot = await getDoc(checkoutRef);
        setHasOrders(docSnapshot.exists() && docSnapshot.data().checkouts.length > 0); // Set orders status
      } else {
        setHasOrders(false); // Reset if no user is logged in
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsOpen(false);
      setUser(null);
      setHasOrders(false); // Reset orders status on logout
      navigate('/')
    } catch (error) {
      console.error('Logout Error:', error.message);
    }

  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleScroll = () => {
    if (navbarRef.current) {
      const navbar = navbarRef.current;
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar" ref={navbarRef}>
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`menu-container ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/cart" onClick={() => setIsOpen(false)}>{<ShoppingCartIcon />}</Link></li>
            {/* Conditionally render Orders link */}
            {/* {hasOrders && <li><Link to="/customersorder" onClick={() => setIsOpen(false)}>Orders</Link></li>} */}
          </ul>

          {/* User Button and Links */}
          <div className="button-container">
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handleMenuOpen} style={{ color: '#fff' }}>
                  {user.photoURL ? (
                    <Avatar src={user.photoURL} alt={user.displayName || 'User'} />
                  ) : (
                    <AccountCircleIcon style={{ fontSize: '32px' }} />
                  )}
                </IconButton>

                {/* User Info Menu */}
                <StyledMenu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem disabled>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {user.displayName || 'User'}
                    </Typography>
                  </MenuItem>
                  <MenuItem disabled>
                    <Typography variant="body2" sx={{ color: '#555', fontStyle: 'italic' }}>
                      {user.email}
                    </Typography>
                  </MenuItem>
                    <Typography variant="body2" sx={{ color: '#555', fontStyle: 'italic' }}>
                        {hasOrders &&<Link to="/customersorder">Orders</Link>}
                    </Typography>
                  <MenuItem>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout} sx={{ '&:hover': { color: '#1976d2' }, fontWeight: 'bold', color: '#444' }}>
                    Logout
                  </MenuItem>
                </StyledMenu>
              </div>
            ) : (
              <>
                <Link to="/signup" className="navbar-button">
                  <SignupButton />
                </Link>
                <Link to="/login" className="navbar-button">
                  <LoginButton />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
