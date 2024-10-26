import React from 'react';

// CSS for VIP styling
const buttonStyle = {
  backgroundColor: '#6DA5C0',
  color: 'white',
  padding: '15px 17px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '28px',
  cursor: 'pointer',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
};

export const LoginButton = () => {
  return (
    <button style={buttonStyle}>
      Login
    </button>
  );
};
