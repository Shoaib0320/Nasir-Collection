// // // // // // // // // // // CartContext.js
// // // // // // // // // // import React, { createContext, useState } from 'react';

// // // // // // // // // // export const CartContext = createContext();

// // // // // // // // // // export const CartProvider = ({ children }) => {
// // // // // // // // // //     const [cart, setCart] = useState([]); // Initialize cart as an empty array

// // // // // // // // // //     const addToCart = (item, quantity) => {
// // // // // // // // // //       console.log("Adding to cart:", item, quantity); // Debugging line
// // // // // // // // // //       // Check if the item is already in the cart
// // // // // // // // // //       const existingItem = cart.find(cartItem => cartItem.item.id === item.id);
  
// // // // // // // // // //       if (existingItem) {
// // // // // // // // // //           // Update quantity
// // // // // // // // // //           setCart(prevCart =>
// // // // // // // // // //               prevCart.map(cartItem =>
// // // // // // // // // //                   cartItem.item.id === item.id
// // // // // // // // // //                       ? { ...cartItem, quantity: cartItem.quantity + quantity }
// // // // // // // // // //                       : cartItem
// // // // // // // // // //               )
// // // // // // // // // //           );
// // // // // // // // // //       } else {
// // // // // // // // // //           // Add new item
// // // // // // // // // //           setCart(prevCart => [...prevCart, { item, quantity }]);
// // // // // // // // // //       }
// // // // // // // // // //   };
  
// // // // // // // // // //     return (
// // // // // // // // // //         <CartContext.Provider value={{ cart, setCart, addToCart }}>
// // // // // // // // // //             {children}
// // // // // // // // // //         </CartContext.Provider>
// // // // // // // // // //     );
// // // // // // // // // // };






// // // // // // // // // CartContext.js
// // // // // // // // import React, { createContext, useState, useEffect } from 'react';

// // // // // // // // export const CartContext = createContext();

// // // // // // // // export const CartProvider = ({ children }) => {
// // // // // // // //     const [cart, setCart] = useState(() => {
// // // // // // // //         const savedCart = localStorage.getItem('cart');
// // // // // // // //         return savedCart ? JSON.parse(savedCart) : [];
// // // // // // // //     });

// // // // // // // //     const addToCart = (item, quantity) => {
// // // // // // // //         const updatedCart = [...cart, { item, quantity }];
// // // // // // // //         setCart(updatedCart);
// // // // // // // //         localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist to localStorage
// // // // // // // //     };

// // // // // // // //     const clearCart = () => {
// // // // // // // //         setCart([]);
// // // // // // // //         localStorage.removeItem('cart');
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <CartContext.Provider value={{ cart, addToCart, clearCart }}>
// // // // // // // //             {children}
// // // // // // // //         </CartContext.Provider>
// // // // // // // //     );
// // // // // // // // };


// // // // // // // // CartContext.js
// // // // // // // import React, { createContext, useState, useEffect } from 'react';
// // // // // // // import { db } from '../../Config/firebaseConfig'; // Import your Firebase config
// // // // // // // import { doc, getDoc, setDoc } from 'firebase/firestore';

// // // // // // // export const CartContext = createContext();

// // // // // // // export const CartProvider = ({ children }) => {
// // // // // // //     const [cart, setCart] = useState([]);
    
// // // // // // //     // Function to fetch user's cart items from Firestore
// // // // // // //     const fetchCartItems = async (userId) => {
// // // // // // //         const cartRef = doc(db, 'carts', userId); // Adjust Firestore collection name as needed
// // // // // // //         const cartDoc = await getDoc(cartRef);
// // // // // // //         if (cartDoc.exists()) {
// // // // // // //             const cartData = cartDoc.data();
// // // // // // //             setCart(cartData.items || []);
// // // // // // //         } else {
// // // // // // //             setCart([]); // No cart items found
// // // // // // //         }
// // // // // // //     };

// // // // // // //     // Function to add items to the user's cart in Firestore
// // // // // // //     const addToCart = async (userId, item, quantity) => {
// // // // // // //         const updatedCart = [...cart, { item, quantity }];
// // // // // // //         setCart(updatedCart);
        
// // // // // // //         // Update Firestore
// // // // // // //         const cartRef = doc(db, 'carts', userId);
// // // // // // //         await setDoc(cartRef, { items: updatedCart }, { merge: true });
// // // // // // //     };

// // // // // // //     // Function to clear the user's cart in Firestore
// // // // // // //     const clearCart = async (userId) => {
// // // // // // //         setCart([]);
// // // // // // //         const cartRef = doc(db, 'carts', userId);
// // // // // // //         await setDoc(cartRef, { items: [] }); // Clear Firestore cart
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <CartContext.Provider value={{ cart, addToCart, clearCart, fetchCartItems }}>
// // // // // // //             {children}
// // // // // // //         </CartContext.Provider>
// // // // // // //     );
// // // // // // // };





// // // // // // // CartContext.js
// // // // // // import React, { createContext, useState, useEffect } from 'react';
// // // // // // import { db } from '../../Config/firebaseConfig'; // Adjust path to your Firebase config
// // // // // // import { doc, getDoc, setDoc } from 'firebase/firestore';

// // // // // // export const CartContext = createContext();

// // // // // // export const CartProvider = ({ children }) => {
// // // // // //     const [cart, setCart] = useState([]);

// // // // // //     // Function to fetch user's cart items from Firestore
// // // // // //     const fetchCartItems = async (userId) => {
// // // // // //         const cartRef = doc(db, 'carts', userId); // Assuming 'carts' is the collection name
// // // // // //         const cartDoc = await getDoc(cartRef);
// // // // // //         if (cartDoc.exists()) {
// // // // // //             const cartData = cartDoc.data();
// // // // // //             setCart(cartData.items || []); // Set cart items or empty if none
// // // // // //         } else {
// // // // // //             setCart([]); // No cart items found
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to add items to the user's cart in Firestore
// // // // // //     const addToCart = async (userId, item, quantity) => {
// // // // // //         const updatedCart = [...cart, { item, quantity }];
// // // // // //         setCart(updatedCart); // Update local cart state
        
// // // // // //         // Update Firestore
// // // // // //         const cartRef = doc(db, 'carts', userId);
// // // // // //         await setDoc(cartRef, { items: updatedCart }, { merge: true }); // Merge to avoid overwriting other fields
// // // // // //     };

// // // // // //     return (
// // // // // //         <CartContext.Provider value={{ cart, addToCart, fetchCartItems }}>
// // // // // //             {children}
// // // // // //         </CartContext.Provider>
// // // // // //     );
// // // // // // };


// // // // // // CartContext.js
// // // // // import React, { createContext, useState, useEffect } from 'react';
// // // // // import { db } from '../../Config/firebaseConfig'; // Adjust path to your Firebase config
// // // // // import { doc, getDoc, setDoc } from 'firebase/firestore';

// // // // // export const CartContext = createContext();

// // // // // export const CartProvider = ({ children }) => {
// // // // //     const [cart, setCart] = useState([]);

// // // // //     // Function to fetch user's cart items from Firestore
// // // // //     const fetchCartItems = async (userId) => {
// // // // //         const cartRef = doc(db, 'carts', userId); // Assuming 'carts' is the collection name
// // // // //         const cartDoc = await getDoc(cartRef);
// // // // //         if (cartDoc.exists()) {
// // // // //             const cartData = cartDoc.data();
// // // // //             setCart(cartData.items || []); // Set cart items or empty if none
// // // // //         } else {
// // // // //             setCart([]); // No cart items found
// // // // //         }
// // // // //     };

// // // // //     // Function to add or update items in the user's cart in Firestore
// // // // //     const addToCart = async (userId, newItem, quantity) => {
// // // // //         const updatedCart = [...cart];
// // // // //         const existingItemIndex = updatedCart.findIndex(item => item.item.id === newItem.id);

// // // // //         if (existingItemIndex > -1) {
// // // // //             // Update quantity if item already exists in cart
// // // // //             updatedCart[existingItemIndex].quantity += quantity;
// // // // //         } else {
// // // // //             // Add new item to cart
// // // // //             updatedCart.push({ item: newItem, quantity });
// // // // //         }

// // // // //         setCart(updatedCart); // Update local cart state
        
// // // // //         // Update Firestore
// // // // //         const cartRef = doc(db, 'carts', userId);
// // // // //         await setDoc(cartRef, { items: updatedCart }, { merge: true }); // Merge to avoid overwriting other fields
// // // // //     };

// // // // //     return (
// // // // //         <CartContext.Provider value={{ cart, addToCart, fetchCartItems }}>
// // // // //             {children}
// // // // //         </CartContext.Provider>
// // // // //     );
// // // // // };


// // // // import React, { createContext, useState, useEffect } from 'react';
// // // // import { db } from '../../Config/firebaseConfig'; // Adjust path to your Firebase config
// // // // import { doc, getDoc, setDoc } from 'firebase/firestore';

// // // // export const CartContext = createContext();

// // // // export const CartProvider = ({ children }) => {
// // // //     const [cart, setCart] = useState([]);

// // // //     // Function to fetch user's cart items from Firestore
// // // //     const fetchCartItems = async (userId) => {
// // // //         const cartRef = doc(db, 'carts', userId); // Assuming 'carts' is the collection name
// // // //         const cartDoc = await getDoc(cartRef);
// // // //         if (cartDoc.exists()) {
// // // //             const cartData = cartDoc.data();
// // // //             setCart(cartData.items || []); // Set cart items or empty if none
// // // //         } else {
// // // //             setCart([]); // No cart items found
// // // //         }
// // // //     };

// // // //     // Function to add or update items in the user's cart in Firestore
// // // //     const addToCart = async (userId, newItem, quantity) => {
// // // //         const updatedCart = [...cart];
// // // //         const existingItemIndex = updatedCart.findIndex(item => item.item.id === newItem.id);

// // // //         if (existingItemIndex > -1) {
// // // //             // Update quantity if item already exists in cart
// // // //             updatedCart[existingItemIndex].quantity += quantity;
// // // //         } else {
// // // //             // Add new item to cart
// // // //             updatedCart.push({ item: newItem, quantity });
// // // //         }

// // // //         setCart(updatedCart); // Update local cart state
        
// // // //         // Update Firestore
// // // //         const cartRef = doc(db, 'carts', userId);
// // // //         await setDoc(cartRef, { items: updatedCart }, { merge: true }); // Merge to avoid overwriting other fields
// // // //     };

// // // //     const removeFromCart = async (userId, itemId) => {
// // // //         try {
// // // //             // Logic to remove item from Firestore
// // // //             const cartRef = doc(db, 'carts', userId); // Reference to user's cart
// // // //             const cartDoc = await getDoc(cartRef); // Fetch current cart data
    
// // // //             if (cartDoc.exists()) {
// // // //                 const cartData = cartDoc.data();
// // // //                 const updatedItems = cartData.items.filter(item => item.item.id !== itemId); // Filter out the item to remove
                
// // // //                 // Update Firestore with the new items array
// // // //                 await setDoc(cartRef, { items: updatedItems }, { merge: true });
// // // //                 setCart(updatedItems); // Update local state
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Error removing item from cart:", error);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <CartContext.Provider value={{ cart, addToCart, fetchCartItems, removeFromCart }}> {/* Include removeFromCart */}
// // // //             {children}
// // // //         </CartContext.Provider>
// // // //     );
// // // // };




// // // // CartContext.js
// // import React, { createContext, useState, useEffect, useContext } from 'react';
// // import { db } from '../../Config/firebaseConfig';
// // import { doc, getDoc, setDoc } from 'firebase/firestore';
// // import { AuthContext } from './AuthContext';

// // export const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //     const { user } = useContext(AuthContext);
// //     const [cart, setCart] = useState([]);

// //     useEffect(() => {
// //         if (user) {
// //             loadUserCart(); // Load cart items when user logs in
// //         }
// //     }, [user]);

// //     const loadUserCart = async () => {
// //         if (user) {
// //             const userCartRef = doc(db, 'AddToCart', user.uid);
// //             const userCartDoc = await getDoc(userCartRef);
// //             if (userCartDoc.exists()) {
// //                 setCart(userCartDoc.data().items || []);
// //             } else {
// //                 setCart([]);
// //             }
// //         }
// //     };

// //     const addToCart = async (item, quantity) => {
// //         const updatedCart = [...cart, { item, quantity }];
// //         setCart(updatedCart);

// //         if (user) {
// //             const userCartRef = doc(db, 'AddToCart', user.uid);
// //             await setDoc(userCartRef, { items: updatedCart }, { merge: true });
// //         }
// //     };

// //     const clearCart = async () => {
// //         setCart([]);
// //         if (user) {
// //             const userCartRef = doc(db, 'AddToCart', user.uid);
// //             await setDoc(userCartRef, { items: [] });
// //         }
// //     };

// //     const removeFromCart = (itemId) => {
// //         const updatedCart = cart.filter((item) => item.item.id !== itemId);
// //         setCart(updatedCart);

// //         if (user) {
// //             const userCartRef = doc(db, 'AddToCart', user.uid);
// //             setDoc(userCartRef, { items: updatedCart }, { merge: true });
// //         }
// //     };

// //     return (
// //         <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
// //             {children}
// //         </CartContext.Provider>
// //     );
// // };






// // CartContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { db } from '../../Config/firebaseConfig'; // Firebase config import
// import { doc, getDoc, setDoc } from 'firebase/firestore'; // Firestore functions
// import { AuthContext } from './AuthContext'; // Importing AuthContext

// export const CartContext = createContext(); // Create CartContext

// export const CartProvider = ({ children }) => {
//     const { user } = useContext(AuthContext); // Get user from AuthContext
//     const [cart, setCart] = useState([]); // Cart state

//     useEffect(() => {
//         if (user) {
//             loadUserCart(); // Load cart when user logs in
//         }
//     }, [user]);

//     // Determine document ID based on login method
//     const getUserDocId = () => {
//         if (user?.providerData?.[0]?.providerId === 'google.com') {
//             return user.displayName; // Use Google profile name
//         }
//         return user?.name || user.displayName; // Use signup name or fallback to displayName
//     };

//     // Load user's cart from Firestore
//     const loadUserCart = async () => {
//         const userDocId = getUserDocId();
//         if (userDocId) {
//             const userCartRef = doc(db, 'AddToCart', userDocId);
//             const userCartDoc = await getDoc(userCartRef);
//             if (userCartDoc.exists()) {
//                 setCart(userCartDoc.data().items || []);
//             } else {
//                 setCart([]); // Initialize empty cart if no document exists
//             }
//         }
//     };

//     // Add item to the user's cart and update Firestore
//     const addToCart = async (item, quantity) => {
//         const updatedCart = [...cart, { item, quantity }];
//         setCart(updatedCart);

//         const userDocId = getUserDocId();
//         if (userDocId) {
//             const userCartRef = doc(db, 'AddToCart', userDocId);
//             await setDoc(userCartRef, { items: updatedCart }, { merge: true });
//         }
//     };

//     // Clear the user's cart
//     const clearCart = async () => {
//         setCart([]);
//         const userDocId = getUserDocId();
//         if (userDocId) {
//             const userCartRef = doc(db, 'AddToCart', userDocId);
//             await setDoc(userCartRef, { items: [] });
//         }
//     };

//     // Remove an item from the cart
//     const removeFromCart = async (itemId) => {
//         const updatedCart = cart.filter((item) => item.item.id !== itemId);
//         setCart(updatedCart);

//         const userDocId = getUserDocId();
//         if (userDocId) {
//             const userCartRef = doc(db, 'AddToCart', userDocId);
//             await setDoc(userCartRef, { items: updatedCart }, { merge: true });
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };










// CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { db } from '../../Config/firebaseConfig'; // Import Firebase config
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Firestore functions
import { AuthContext } from './AuthContext'; // Import AuthContext

export const CartContext = createContext(); // Create CartContext

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext); // Get user data from AuthContext
    const [cart, setCart] = useState([]); // Cart state


    // Load cart when the user logs in
    useEffect(() => {
        if (user) {
            loadUserCart();
        }
    }, [user]);

    // Get the document ID for Firestore (either Google displayName or signup name)
    const getUserDocId = () => {
        return user?.providerData?.[0]?.providerId === 'google.com'
            ? user.displayName // Use Google display name
            : user.name || user.displayName; // Use signup name or display name
    };

    // Load the user's cart from Firestore
    const loadUserCart = async () => {
        const userDocId = getUserDocId();
        if (userDocId) {
            const userCartRef = doc(db, 'AddToCart', userDocId);
            const userCartDoc = await getDoc(userCartRef);
            if (userCartDoc.exists()) {
                setCart(userCartDoc.data().cart || []); // Load existing cart data
            } else {
                setCart([]); // Initialize with an empty cart if no document exists
            }
        }
    };


    // const addToCart = (itemId, quantity) => {
    //     setCart((prevCart) => {
    //         const existingItem = prevCart.find(item => item.item.id === itemId);
    //         if (existingItem) {
    //             // Update quantity if item exists
    //             return prevCart.map(item => 
    //                 item.item.id === itemId 
    //                 ? { ...item, quantity: quantity }
    //                 : item
    //             );
    //         } else {
    //             // Add new item to the cart
    //             const newItem = { item: { id: itemId, title: 'Item Title', price: 20, imageUrl: 'path/to/image' }, quantity };
    //             return [...prevCart, newItem];
    //         }
    //     });
    // };

    // Add item to cart and sync with Firestore
    const addToCart = async (item, quantity) => {
        const updatedCart = [...cart, { item, quantity }];
        setCart(updatedCart); // Update local cart state

        const userDocId = getUserDocId();
        if (userDocId) {
            const userCartRef = doc(db, 'AddToCart', userDocId);
            await setDoc(userCartRef, { cart: updatedCart }, { merge: true }); // Sync with Firestore
        }
    };

    // Clear the cart and remove data from Firestore
    const clearCart = async () => {
        setCart([]); // Clear local cart state

        const userDocId = getUserDocId();
        if (userDocId) {
            const userCartRef = doc(db, 'AddToCart', userDocId);
            await setDoc(userCartRef, { cart: [] }); // Clear Firestore cart
        }
    };

    // Remove a specific item from the cart and update Firestore
    const removeFromCart = async (itemId) => {
        const updatedCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
        setCart(updatedCart); // Update local cart state

        const userDocId = getUserDocId();
        if (userDocId) {
            const userCartRef = doc(db, 'AddToCart', userDocId);
            await setDoc(userCartRef, { cart: updatedCart }, { merge: true }); // Sync with Firestore
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
