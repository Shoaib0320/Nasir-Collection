// Loader.jsx
import React from 'react';
import './Loader.css'; // You can style your loader here

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
