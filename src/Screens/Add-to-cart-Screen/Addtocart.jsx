// // AddToCart.jsx
// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from '../SingleScreen/CartContext';
// import { AuthContext } from '../SingleScreen/AuthContext';
// import { FaTrash } from 'react-icons/fa';
// import './AddToCart.css';
// import { db } from '../../Config/firebaseConfig';
// import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AddToCart = () => {
//     const { cart, clearCart, removeFromCart, addToCart } = useContext(CartContext);
//     const { user } = useContext(AuthContext);
//     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         phone: '',
//     });

//     const totalAmount = cart.reduce(
//         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
//         0
//     );

//     const navigate = useNavigate(); // Initialize navigate for redirection

//     useEffect(() => {
//         if (user) {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 name: user.name, // Use the name from AuthContext.
//             }));
//         }
//     }, [user]);

//     const handleCheckoutClick = () => {
//         if (!user) {
//             alert('Please log in to proceed with checkout.');
//             return;
//         }
//         setShowCheckoutForm(true);
//     };

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleRemoveFromCart = (itemId) => {
//         removeFromCart(itemId);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();

//         if (!user) {
//             alert('Please log in to complete the checkout.');
//             return;
//         }

//         try {
//             const userName = user.name; // Get user name from AuthContext.
//             const checkoutRef = doc(db, 'Checkout', userName); // Use name as document ID.
//             const docSnapshot = await getDoc(checkoutRef);

//             const newCheckoutData = {
//                 name: formData.name,
//                 address: formData.address,
//                 phone: formData.phone,
//                 totalItems: cart.length,
//                 totalAmount: totalAmount,
//                 items: cart,
//                 timestamp: new Date().toISOString(),
//             };

//             if (docSnapshot.exists()) {
//                 await updateDoc(checkoutRef, {
//                     checkouts: arrayUnion(newCheckoutData),
//                 });
//             } else {
//                 await setDoc(checkoutRef, {
//                     checkouts: [newCheckoutData],
//                 });
//             }

//             alert('Checkout successful!');
//             clearCart();
//             setShowCheckoutForm(false);

//             // Navigate to the Orders page
//             navigate('/customersorder'); // Use navigate() instead of history.push()
//         } catch (error) {
//             console.error('Error saving checkout data:', error);
//             alert('Failed to save your checkout. Please try again.');
//         }
//     };

//     const handleAddToCart = (item) => {
//         const existingCartItem = cart.find((cartItem) => cartItem.item.id === item.id);

//         if (existingCartItem) {
//             addToCart(item.id, existingCartItem.quantity + 1);
//         } else {
//             addToCart(item.id, 1);
//         }
//     };

//     return (
//         <div className="add-to-cart">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 cart.map((cartItem) => (
//                     <div className="cart-item" key={cartItem.item.id}>
//                         <img
//                             src={cartItem.item.imageUrl}
//                             alt={cartItem.item.title}
//                             className="cart-item-image"
//                         />
//                         <div className="cart-item-info">
//                             <h2>{cartItem.item.title}</h2>
//                             <p>Price: PKR {cartItem.item.price}</p>
//                             <p>Quantity: {cartItem.quantity}</p>
//                         </div>
//                         <button
//                             className="delete-btn"
//                             onClick={() => handleRemoveFromCart(cartItem.item.id)}
//                         >
//                             <FaTrash />
//                         </button>
//                     </div>
//                 ))
//             )}

//             {cart.length > 0 && (
//                 <button className="checkout-btn" onClick={handleCheckoutClick}>
//                     Proceed to Checkout
//                 </button>
//             )}

//             {showCheckoutForm && (
//                 <div className="checkout-form">
//                     <h2>Checkout</h2>
//                     <p style={{color:'#fff'}}>Total Items: {cart.length}</p>
//                     <p style={{color:'#fff'}}>Total Amount: PKR {totalAmount.toFixed(2)}</p>
//                     <form onSubmit={handleFormSubmit}>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Name</label><br />
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Address</label><br />
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Phone</label><br />
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="submit-btn">
//                             Complete Checkout
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;












// AddToCart.jsx
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../SingleScreen/CartContext';
import { AuthContext } from '../SingleScreen/AuthContext';
import { FaTrash } from 'react-icons/fa';
import { Snackbar, Alert } from '@mui/material'; // Import Snackbar and Alert
import './Addtocart.css';
import { db } from '../../Config/firebaseConfig';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
    const { cart, clearCart, removeFromCart, addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' }); // Snackbar state

    const totalAmount = cart.reduce(
        (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
        0
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                name: user.name,
            }));
        }
    }, [user]);

    const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false }); // Close Snackbar

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    const handleCheckoutClick = () => {
        if (!user) {
            showSnackbar('Please log in to proceed with checkout.', 'warning');
            return;
        }
        setShowCheckoutForm(true);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
        showSnackbar('Item removed from cart.', 'info');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            showSnackbar('Please log in to complete the checkout.', 'warning');
            return;
        }

        try {
            const userName = user.name;
            const checkoutRef = doc(db, 'Checkout', userName);
            const docSnapshot = await getDoc(checkoutRef);

            const newCheckoutData = {
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                totalItems: cart.length,
                totalAmount: totalAmount,
                items: cart,
                timestamp: new Date().toISOString(),
            };

            if (docSnapshot.exists()) {
                await updateDoc(checkoutRef, {
                    checkouts: arrayUnion(newCheckoutData),
                });
            } else {
                await setDoc(checkoutRef, {
                    checkouts: [newCheckoutData],
                });
            }

            showSnackbar('Checkout successful!', 'success');
            clearCart();
            setShowCheckoutForm(false);
            navigate('/customersorder');
        } catch (error) {
            console.error('Error saving checkout data:', error);
            showSnackbar('Failed to save your checkout. Please try again.', 'error');
        }
    };

    const handleAddToCart = (item) => {
        const existingCartItem = cart.find((cartItem) => cartItem.item.id === item.id);

        if (existingCartItem) {
            addToCart(item.id, existingCartItem.quantity + 1);
        } else {
            addToCart(item.id, 1);
        }
        showSnackbar('Item added to cart!', 'success');
    };

    return (
        <div className="add-to-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((cartItem) => (
                    <div className="cart-item" key={cartItem.item.id}>
                        <img
                            src={cartItem.item.imageUrl}
                            alt={cartItem.item.title}
                            className="cart-item-image"
                        />
                        <div className="cart-item-info">
                            <h2>{cartItem.item.title}</h2>
                            <p>Price: PKR {cartItem.item.price}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                        </div>
                        <button
                            className="delete-btn"
                            onClick={() => handleRemoveFromCart(cartItem.item.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))
            )}

            {cart.length > 0 && (
                <button className="checkout-btn" onClick={handleCheckoutClick}>
                    Proceed to Checkout
                </button>
            )}

            {showCheckoutForm && (
                <div className="checkout-form">
                    <h2>Checkout</h2>
                    <p style={{ color: '#fff' }}>Total Items: {cart.length}</p>
                    <p style={{ color: '#fff' }}>Total Amount: PKR {totalAmount.toFixed(2)}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label style={{ color: '#fff' }}>Name</label><br />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#fff' }}>Address</label><br />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#fff' }}>Phone</label><br />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            Complete Checkout
                        </button>
                    </form>
                </div>
            )}

            {/* Snackbar for notifications */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AddToCart;
