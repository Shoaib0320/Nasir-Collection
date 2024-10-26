import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from Material-UI's system

// Styled button using Material-UI's styled function
const StyledLogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff4757', // A vibrant red color for the button
  color: '#ffffff', // White text color
  padding: '10px 20px', // More padding for a larger button
  fontSize: '1rem', // Font size
  fontWeight: 'bold', // Bold text
  borderRadius: '5px', // Slightly rounded corners
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
  transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth transitions for hover effect
  '&:hover': {
    backgroundColor: '#e84118', // Darker red on hover
    transform: 'scale(1.05)', // Slightly enlarge on hover
  },
  margin: '0 10px', // Margin for spacing
}));

export const LogoutButton = ({ onClick }) => {
  return (
    <StyledLogoutButton 
      variant="contained" 
      onClick={onClick}
    >
      Logout
    </StyledLogoutButton>
  );
};
