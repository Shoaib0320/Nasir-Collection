// // // // // // // // import React, { useState, useContext, useEffect } from 'react';
// // // // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // // // import { CartContext } from './CartContext';
// // // // // // // // import { AuthContext } from './AuthContext';
// // // // // // // // import './SingleProduct.css';

// // // // // // // // function SingleProduct() {
// // // // // // // //     const location = useLocation();
// // // // // // // //     const navigate = useNavigate();
// // // // // // // //     const { addToCart } = useContext(CartContext);
// // // // // // // //     const { user } = useContext(AuthContext);
// // // // // // // //     const { item } = location.state || {};

// // // // // // // //     const [quantity, setQuantity] = useState(1);
// // // // // // // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);

// // // // // // // //     useEffect(() => {
// // // // // // // //         if (item) {
// // // // // // // //             setTotalPrice(quantity * item.price);
// // // // // // // //         }
// // // // // // // //     }, [quantity, item]);

// // // // // // // //     const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // // // // // //     const handleDecrement = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

// // // // // // // //     const handleAddToCart = () => {
// // // // // // // //         if (item && user) {
// // // // // // // //             addToCart(item, quantity);
// // // // // // // //             navigate('/cart');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     if (!item) return <p>Loading...</p>;

// // // // // // // //     return (
// // // // // // // //         <div className="single-product">
// // // // // // // //             <div className="single-product-content">
// // // // // // // //                 <img src={item.imageUrl} alt={item.title} className="single-product-image" />
// // // // // // // //                 <div className="single-product-details">
// // // // // // // //                     <h1>{item.name}</h1>
// // // // // // // //                     <p>{item.description}</p>
// // // // // // // //                     <p>Category: {item.category}</p>
// // // // // // // //                     <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
// // // // // // // //                     <div className="quantity-controls">
// // // // // // // //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// // // // // // // //                         <p>{quantity}</p>
// // // // // // // //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// // // // // // // //                     </div>
// // // // // // // //                     <br />
// // // // // // // //                     <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // export default SingleProduct;



// // // // // // // import React, { useState, useContext, useEffect } from 'react';
// // // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // // import { CartContext } from './CartContext';
// // // // // // // import { AuthContext } from './AuthContext';
// // // // // // // import { db } from '../../Config/firebaseConfig'; // Adjust the path as necessary
// // // // // // // import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore';
// // // // // // // import './SingleProduct.css';

// // // // // // // function SingleProduct() {
// // // // // // //     const location = useLocation();
// // // // // // //     const navigate = useNavigate();
// // // // // // //     const { addToCart } = useContext(CartContext);
// // // // // // //     const { user } = useContext(AuthContext);
// // // // // // //     const { item } = location.state || {};

// // // // // // //     const [quantity, setQuantity] = useState(1);
// // // // // // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
// // // // // // //     const [feedbacks, setFeedbacks] = useState([]);
// // // // // // //     const [hasOrdered, setHasOrdered] = useState(false);
// // // // // // //     const [userFeedback, setUserFeedback] = useState('');
// // // // // // //     const [userImages, setUserImages] = useState([]);

// // // // // // //     useEffect(() => {
// // // // // // //         if (item) {
// // // // // // //             setTotalPrice(quantity * item.price);
// // // // // // //             checkOrderHistory(); // Check if the user has ordered this product
// // // // // // //             fetchFeedbacks(); // Fetch feedback for this product
// // // // // // //         }
// // // // // // //     }, [quantity, item, user]);

// // // // // // //     const checkOrderHistory = async () => {
// // // // // // //         // Replace with your order history logic
// // // // // // //         const ordersQuery = query(
// // // // // // //             collection(db, 'Checkout'),
// // // // // // //             where('userID', '==', user.name),
// // // // // // //             where('status', '==', 'Delivered'), // Assuming "Delivered" indicates the order has been delivered
// // // // // // //             where('items.itemID', '==', item.itemID)
// // // // // // //         );

// // // // // // //         onSnapshot(ordersQuery, (querySnapshot) => {
// // // // // // //             setHasOrdered(!querySnapshot.empty);
// // // // // // //         });
// // // // // // //     };

// // // // // // //     const fetchFeedbacks = async () => {
// // // // // // //         const feedbackQuery = query(
// // // // // // //             collection(db, 'Feedbacks'),
// // // // // // //             where('itemID', '==', item.itemID)
// // // // // // //         );

// // // // // // //         onSnapshot(feedbackQuery, (querySnapshot) => {
// // // // // // //             const feedbackData = [];
// // // // // // //             querySnapshot.forEach((doc) => {
// // // // // // //                 const data = doc.data();
// // // // // // //                 feedbackData.push({
// // // // // // //                     ...data,
// // // // // // //                     id: doc.id, // Store feedback ID if needed
// // // // // // //                 });
// // // // // // //             });
// // // // // // //             setFeedbacks(feedbackData);
// // // // // // //         });
// // // // // // //     };

// // // // // // //     const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // // // // //     const handleDecrement = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

// // // // // // //     const handleAddToCart = () => {
// // // // // // //         if (item && user) {
// // // // // // //             addToCart(item, quantity);
// // // // // // //             navigate('/cart');
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleSubmitFeedback = async (e) => {
// // // // // // //         e.preventDefault();
// // // // // // //         if (userFeedback.trim() === '' || userImages.length === 0) return;

// // // // // // //         // Prepare the feedback data
// // // // // // //         const feedbackData = {
// // // // // // //             itemID: item.itemID,
// // // // // // //             name: user.displayName || user.email, // Use user name or email
// // // // // // //             feedback: userFeedback,
// // // // // // //             images: userImages, // Array of image URLs
// // // // // // //             timestamp: new Date(),
// // // // // // //         };

// // // // // // //         // Add feedback to Firestore
// // // // // // //         await addDoc(collection(db, 'Feedback'), feedbackData);
// // // // // // //         setUserFeedback(''); // Clear the input
// // // // // // //         setUserImages([]); // Clear images
// // // // // // //     };

// // // // // // //     const handleImageUpload = (e) => {
// // // // // // //         const files = Array.from(e.target.files);
// // // // // // //         const imageUrls = files.map((file) => URL.createObjectURL(file));
// // // // // // //         setUserImages(imageUrls);
// // // // // // //     };

// // // // // // //     if (!item) return <p>Loading...</p>;

// // // // // // //     return (
// // // // // // //         <div className="single-product">
// // // // // // //             <div className="single-product-content">
// // // // // // //                 <img src={item.imageUrl} alt={item.title} className="single-product-image" />
// // // // // // //                 <div className="single-product-details">
// // // // // // //                     <h1>{item.name}</h1>
// // // // // // //                     <p>{item.description}</p>
// // // // // // //                     <p>Category: {item.category}</p>
// // // // // // //                     <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
// // // // // // //                     <div className="quantity-controls">
// // // // // // //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// // // // // // //                         <p>{quantity}</p>
// // // // // // //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// // // // // // //                     </div>
// // // // // // //                     <br />
// // // // // // //                     <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             {/* Feedback Section */}
// // // // // // //             {hasOrdered && (
// // // // // // //                 <div className="feedback-section">
// // // // // // //                     <h2>Product Feedbacks</h2>
// // // // // // //                     <form onSubmit={handleSubmitFeedback}>
// // // // // // //                         <textarea
// // // // // // //                             value={userFeedback}
// // // // // // //                             onChange={(e) => setUserFeedback(e.target.value)}
// // // // // // //                             placeholder="Write your feedback..."
// // // // // // //                             required
// // // // // // //                         />
// // // // // // //                         <input
// // // // // // //                             type="file"
// // // // // // //                             multiple
// // // // // // //                             accept="image/*,video/*"
// // // // // // //                             onChange={handleImageUpload}
// // // // // // //                             required
// // // // // // //                         />
// // // // // // //                         <button type="submit">Submit Feedback</button>
// // // // // // //                     </form>

// // // // // // //                     <div className="feedback-list">
// // // // // // //                         {feedbacks.map((feedback) => (
// // // // // // //                             <div key={feedback.id} className="feedback-item">
// // // // // // //                                 <h4>{feedback.name}</h4>
// // // // // // //                                 <p>{feedback.feedback}</p>
// // // // // // //                                 <div className="feedback-images">
// // // // // // //                                     {feedback.images && feedback.images.map((url, index) => (
// // // // // // //                                         <img key={index} src={url} alt={`Feedback ${index}`} />
// // // // // // //                                     ))}
// // // // // // //                                 </div>
// // // // // // //                                 <hr />
// // // // // // //                             </div>
// // // // // // //                         ))}
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //             )}
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }

// // // // // // // export default SingleProduct;









// // // // // // import React, { useState, useContext, useEffect } from 'react';
// // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // import { CartContext } from './CartContext';
// // // // // // import { AuthContext } from './AuthContext';
// // // // // // import { db } from '../../Config/firebaseConfig'; // Ensure you import your Firebase config
// // // // // // import { collection, getDocs, addDoc } from 'firebase/firestore';
// // // // // // import './SingleProduct.css';

// // // // // // function SingleProduct() {
// // // // // //     const location = useLocation();
// // // // // //     const navigate = useNavigate();
// // // // // //     const { addToCart } = useContext(CartContext);
// // // // // //     const { user } = useContext(AuthContext);
// // // // // //     const { item } = location.state || {};

// // // // // //     const [quantity, setQuantity] = useState(1);
// // // // // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
// // // // // //     const [feedback, setFeedback] = useState('');
// // // // // //     const [feedbackImages, setFeedbackImages] = useState([]);
// // // // // //     const [feedbackList, setFeedbackList] = useState([]);
// // // // // //     const [userFeedbackSubmitted, setUserFeedbackSubmitted] = useState(false);

// // // // // //     useEffect(() => {
// // // // // //         if (item) {
// // // // // //             setTotalPrice(quantity * item.price);
// // // // // //         }
// // // // // //     }, [quantity, item]);

// // // // // //     useEffect(() => {
// // // // // //         // Fetch feedbacks for the product
// // // // // //         const fetchFeedbacks = async () => {
// // // // // //             const feedbackCollection = collection(db, 'Feedback');
// // // // // //             const feedbackSnapshot = await getDocs(feedbackCollection);
// // // // // //             const feedbacks = feedbackSnapshot.docs
// // // // // //                 .map(doc => ({ id: doc.id, ...doc.data() }))
// // // // // //                 .filter(feedback => feedback.productId === item.id); // Adjust based on how you store the product ID

// // // // // //             setFeedbackList(feedbacks);
// // // // // //         };

// // // // // //         fetchFeedbacks();
// // // // // //     }, [item]);

// // // // // //     const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
// // // // // //     const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

// // // // // //     const handleAddToCart = () => {
// // // // // //         if (item && user) {
// // // // // //             addToCart(item, quantity);
// // // // // //             navigate('/cart');
// // // // // //         }
// // // // // //     };

// // // // // //     const handleFeedbackSubmit = async () => {
// // // // // //         if (!feedback || feedbackImages.length === 0) {
// // // // // //             alert('Please provide your feedback and upload at least one image or video.');
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             const newFeedback = {
// // // // // //                 userId: user.uid, // User ID or username
// // // // // //                 productId: item.id, // The product ID
// // // // // //                 feedback,
// // // // // //                 images: feedbackImages,
// // // // // //                 timestamp: new Date(),
// // // // // //                 orderStatus: 'Delivered' // You might want to check actual order status
// // // // // //             };

// // // // // //             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
// // // // // //             setUserFeedbackSubmitted(true);
// // // // // //             setFeedback('');
// // // // // //             setFeedbackImages([]);
// // // // // //             alert('Feedback submitted successfully!');
// // // // // //         } catch (error) {
// // // // // //             console.error('Error submitting feedback:', error);
// // // // // //             alert('Failed to submit feedback. Please try again.');
// // // // // //         }
// // // // // //     };

// // // // // //     const handleImageUpload = (event) => {
// // // // // //         const files = Array.from(event.target.files);
// // // // // //         const images = files.map(file => URL.createObjectURL(file)); // Convert files to URLs
// // // // // //         setFeedbackImages(prev => [...prev, ...images]);
// // // // // //     };

// // // // // //     if (!item) return <p>Loading...</p>;

// // // // // //     return (
// // // // // //         <div className="single-product">
// // // // // //             <div className="single-product-content">
// // // // // //                 <img src={item.imageUrl} alt={item.title} className="single-product-image" />
// // // // // //                 <div className="single-product-details">
// // // // // //                     <h1>{item.name}</h1>
// // // // // //                     <p>{item.description}</p>
// // // // // //                     <p>Category: {item.category}</p>
// // // // // //                     <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
// // // // // //                     <div className="quantity-controls">
// // // // // //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// // // // // //                         <p>{quantity}</p>
// // // // // //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// // // // // //                     </div>
// // // // // //                     <br />
// // // // // //                     <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {/* Feedback Section */}
// // // // // //             {user && (
// // // // // //                 <div className="feedback-section">
// // // // // //                     <h2>Product Feedbacks</h2>
// // // // // //                     {!userFeedbackSubmitted ? (
// // // // // //                         <div>
// // // // // //                             <textarea
// // // // // //                                 value={feedback}
// // // // // //                                 onChange={(e) => setFeedback(e.target.value)}
// // // // // //                                 placeholder="Leave your feedback here..."
// // // // // //                                 rows="4"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="file"
// // // // // //                                 multiple
// // // // // //                                 accept="image/*,video/*"
// // // // // //                                 onChange={handleImageUpload}
// // // // // //                                 style={{ marginBottom: '10px' }}
// // // // // //                             />
// // // // // //                             <button onClick={handleFeedbackSubmit} className="single-product-btn">Submit Feedback</button>
// // // // // //                         </div>
// // // // // //                     ) : (
// // // // // //                         <p>Thank you for your feedback!</p>
// // // // // //                     )}
// // // // // //                     <h3>All Feedbacks:</h3>
// // // // // //                     <div>
// // // // // //                         {feedbackList.map(feedbackItem => (
// // // // // //                             <div key={feedbackItem.id} className="feedback-item">
// // // // // //                                 <strong>{feedbackItem.userId}</strong>:
// // // // // //                                 <p>{feedbackItem.feedback}</p>
// // // // // //                                 {feedbackItem.images.map((img, index) => (
// // // // // //                                     <img key={index} src={img} alt="feedback" style={{ width: '100px', margin: '5px' }} />
// // // // // //                                 ))}
// // // // // //                             </div>
// // // // // //                         ))}
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default SingleProduct;




















// // // import React, { useState, useContext, useEffect } from 'react';
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import { CartContext } from './CartContext';
// // // import { AuthContext } from './AuthContext';
// // // import { db, storage } from '../../Config/firebaseConfig';
// // // import { collection, getDocs, addDoc } from 'firebase/firestore';
// // // import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // // import { Drawer, Button, Input, Upload } from 'antd';
// // // import { PlusOutlined } from '@ant-design/icons';
// // // import './SingleProduct.css';

// // // function SingleProduct() {
// // //     const location = useLocation();
// // //     const navigate = useNavigate();
// // //     const { addToCart } = useContext(CartContext);
// // //     const { user } = useContext(AuthContext);
// // //     const { item } = location.state || {};

// // //     const [quantity, setQuantity] = useState(1);
// // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
// // //     const [feedback, setFeedback] = useState('');
// // //     const [feedbackImages, setFeedbackImages] = useState([]);
// // //     const [feedbackList, setFeedbackList] = useState([]);
// // //     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// // //     const [userFeedbackSubmitted, setUserFeedbackSubmitted] = useState(false);

// // //     useEffect(() => {
// // //         if (item) {
// // //             setTotalPrice(quantity * item.price);
// // //         }
// // //     }, [quantity, item]);

// // //     useEffect(() => {
// // //         const fetchFeedbacks = async () => {
// // //             const feedbackCollection = collection(db, 'Customers Feedback');
// // //             const feedbackSnapshot = await getDocs(feedbackCollection);
// // //             const feedbacks = feedbackSnapshot.docs
// // //                 .map(doc => ({ id: doc.id, ...doc.data() }))
// // //                 .filter(feedback => feedback.productId === item.id);

// // //             setFeedbackList(feedbacks);
// // //         };

// // //         if (item) {
// // //             fetchFeedbacks();
// // //         }
// // //     }, [item]);

// // //     const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
// // //     const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

// // //     const handleAddToCart = () => {
// // //         if (item && user) {
// // //             addToCart(item, quantity);
// // //             navigate('/cart');
// // //         }
// // //     };

// // //     const handleFeedbackSubmit = async () => {
// // //         if (!feedback || feedbackImages.length === 0) {
// // //             alert('Please provide feedback and upload at least one image.');
// // //             return;
// // //         }

// // //         try {
// // //             const validImages = feedbackImages.filter(file => file && file.name);
// // //             const imageUrls = await Promise.all(validImages.map(async (file) => {
// // //                 const storageRef = ref(storage, `feedbackImages/${user.id}/${file.name}`);
// // //                 await uploadBytes(storageRef, file);
// // //                 return await getDownloadURL(storageRef);
// // //             }));

// // //             const newFeedback = {
// // //                 userId: user.name,
// // //                 productId: item.id,
// // //                 productName: item.name,
// // //                 feedback,
// // //                 images: imageUrls,
// // //                 timestamp: new Date(),
// // //             };

// // //             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
// // //             setUserFeedbackSubmitted(true);
// // //             setFeedback('');
// // //             setFeedbackImages([]);
// // //             alert('Feedback submitted successfully!');
// // //             setIsDrawerOpen(false); // Close drawer after submission
// // //         } catch (error) {
// // //             console.error('Error submitting feedback:', error);
// // //             alert('Failed to submit feedback.');
// // //         }
// // //     };

// // //     const handleImageUpload = ({ file }) => {
// // //         if (file && file.name) {
// // //             setFeedbackImages(prev => [...prev, file]);
// // //         }
// // //         return false; // Prevent direct upload
// // //     };

// // //     const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

// // //     if (!item) return <p>Loading...</p>;

// // //     return (
// // //         <>
// // //             <div className="single-product">
// // //                 {/* Product Details */}
// // //                 <div className="single-product-content">
// // //                     <img src={item.imageUrl} alt={item.title} className="single-product-image" />
// // //                     <div className="single-product-details">
// // //                         <h1>{item.name}</h1>
// // //                         <p>{item.description}</p>
// // //                         <p>Category: {item.category}</p>
// // //                         <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
// // //                         <div className="quantity-controls">
// // //                             <button onClick={handleDecrement} className="single-product-btn">-</button>
// // //                             <p>{quantity}</p>
// // //                             <button onClick={handleIncrement} className="single-product-btn">+</button>
// // //                         </div>
// // //                         <br />
// // //                         <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <div>
// // //                 {/* Feedback Section */}
// // //                 {user && (
// // //                     <div>
// // //                         <Button className="add-product-btn" onClick={toggleDrawer}>
// // //                             Add Feedback
// // //                         </Button>
// // //                     </div>
// // //                 )}

// // //                 {/* Feedback Drawer */}
// // //                 <Drawer
// // //                     title="Submit Your Feedback"
// // //                     placement="right"
// // //                     onClose={toggleDrawer}
// // //                     visible={isDrawerOpen}
// // //                 >
// // //                     <Input.TextArea
// // //                         value={feedback}
// // //                         onChange={(e) => setFeedback(e.target.value)}
// // //                         placeholder="Leave your feedback..."
// // //                         rows={4}
// // //                     />
// // //                     <Upload
// // //                         listType="picture-card"
// // //                         beforeUpload={handleImageUpload}
// // //                         multiple
// // //                         accept="image/*,video/*"
// // //                     >
// // //                         {feedbackImages.length >= 8 ? null : (
// // //                             <div>
// // //                                 <PlusOutlined />
// // //                                 <div style={{ marginTop: 8 }}>Upload</div>
// // //                             </div>
// // //                         )}
// // //                     </Upload>
// // //                     <Button
// // //                         style={{ backgroundColor: '#6DA5C0' }}
// // //                         type="primary" onClick={handleFeedbackSubmit}>
// // //                         Submit Feedback
// // //                     </Button>
// // //                 </Drawer>

// // //                 {/* Feedback Display */}
// // //                 <h2 className="feedback-header">Customer Feedbacks</h2>
// // //                 <div>
// // //                     {feedbackList.length > 0 ? (
// // //                         feedbackList.map(feedbackItem => (
// // //                             <div key={feedbackItem.id} className="feedback-item">
// // //                                 <strong>{feedbackItem.userId}</strong>:
// // //                                 <p>{feedbackItem.feedback}</p>
// // //                                 <div className="feedback-images">
// // //                                     {feedbackItem.images.map((img, index) => (
// // //                                         <img key={index} src={img} alt="feedback" />
// // //                                     ))}
// // //                                 </div>
// // //                             </div>
// // //                         ))
// // //                     ) : (
// // //                         <p>No feedbacks yet for this product.</p>
// // //                     )}
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // }

// // // export default SingleProduct;






// // import React, { useState, useContext, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { CartContext } from './CartContext';
// // import { AuthContext } from './AuthContext';
// // import { db, storage } from '../../Config/firebaseConfig'; // Ensure you have storage imported
// // import { collection, getDocs, addDoc } from 'firebase/firestore';
// // import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import necessary functions from Firebase Storage
// // import { Drawer, Button, Input, Upload } from 'antd'; // Ant Design components
// // import { PlusOutlined } from '@ant-design/icons'; // Ant Design icon for upload button
// // import './SingleProduct.css';

// // function SingleProduct() {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { addToCart } = useContext(CartContext);
// //     const { user } = useContext(AuthContext);
// //     const { item } = location.state || {};

// //     const [quantity, setQuantity] = useState(1);
// //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
// //     const [feedback, setFeedback] = useState('');
// //     const [feedbackImages, setFeedbackImages] = useState([]);
// //     const [feedbackList, setFeedbackList] = useState([]);
// //     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// //     const [userFeedbackSubmitted, setUserFeedbackSubmitted] = useState(false);

// //     useEffect(() => {
// //         if (item) {
// //             setTotalPrice(quantity * item.price);
// //         }
// //     }, [quantity, item]);

// //     useEffect(() => {
// //         const fetchFeedbacks = async () => {
// //             const feedbackCollection = collection(db, 'Customers Feedback');
// //             const feedbackSnapshot = await getDocs(feedbackCollection);
// //             const feedbacks = feedbackSnapshot.docs
// //                 .map(doc => ({ id: doc.id, ...doc.data() }))
// //                 .filter(feedback => feedback.productId === item.id);

// //             setFeedbackList(feedbacks);
// //         };

// //         if (item) {
// //             fetchFeedbacks();
// //         }
// //     }, [item]);

// //     const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
// //     const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

// //     const handleAddToCart = () => {
// //         if (item && user) {
// //             addToCart(item, quantity);
// //             navigate('/cart');
// //         }
// //     };

// //     const handleFeedbackSubmit = async () => {
// //         if (!feedback || feedbackImages.length === 0) {
// //             alert('Please provide feedback and upload at least one image.');
// //             return;
// //         }

// //         try {
// //             const imageUrls = [];

// //             // Upload images to Firebase Storage
// //             for (const image of feedbackImages) {
// //                 const storageRef = ref(storage, `feedback-images/${Date.now()}_${image.name}`); // Create a unique reference for each image
// //                 const uploadResult = await uploadBytes(storageRef, image);
// //                 const downloadUrl = await getDownloadURL(uploadResult.ref);
// //                 imageUrls.push(downloadUrl); // Collect the download URLs
// //             }

// //             const newFeedback = {
// //                 userId: user.name,
// //                 productId: item.id,
// //                 productName: item.name,
// //                 feedback,
// //                 images: imageUrls, // Save the uploaded image URLs
// //                 timestamp: new Date(),
// //             };

// //             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
// //             setUserFeedbackSubmitted(true);
// //             setFeedback('');
// //             setFeedbackImages([]);
// //             alert('Feedback submitted successfully!');
// //             setIsDrawerOpen(false); // Close drawer after submission
// //         } catch (error) {
// //             console.error('Error submitting feedback:', error);
// //             alert('Failed to submit feedback.');
// //         }
// //     };

// //     const handleImageUpload = (file) => {
// //         setFeedbackImages(prev => [...prev, file]); // Store the file object
// //         return false; // Prevent upload to server
// //     };

// //     const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

// //     if (!item) return <p>Loading...</p>;

// //     return (
// //         <>
// //             <div className="single-product">
// //                 {/* Product Details */}
// //                 <div className="single-product-content">
// //                     <img src={item.imageUrl} alt={item.title} className="single-product-image" />
// //                     <div className="single-product-details">
// //                         <h1>{item.name}</h1>
// //                         <p>{item.description}</p>
// //                         <p>Category: {item.category}</p>
// //                         <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
// //                         <div className="quantity-controls">
// //                             <button onClick={handleDecrement} className="single-product-btn">-</button>
// //                             <p>{quantity}</p>
// //                             <button onClick={handleIncrement} className="single-product-btn">+</button>
// //                         </div>
// //                         <br />
// //                         <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div>
// //                 {/* Feedback Section */}
// //                 {user && (
// //                     <div>
// //                         <Button className="add-product-btn" onClick={toggleDrawer}>
// //                             Add Feedback
// //                         </Button>
// //                     </div>
// //                 )}

// //                 {/* Feedback Drawer */}
// //                 <Drawer
// //                     title="Submit Your Feedback"
// //                     placement="right"
// //                     onClose={toggleDrawer}
// //                     visible={isDrawerOpen}
// //                 >
// //                     <Input.TextArea
// //                         value={feedback}
// //                         onChange={(e) => setFeedback(e.target.value)}
// //                         placeholder="Leave your feedback..."
// //                         rows={4}
// //                     />
// //                     <Upload
// //                         listType="picture-card"
// //                         beforeUpload={handleImageUpload}
// //                         multiple
// //                         accept="image/*,video/*"
// //                     >
// //                         {feedbackImages.length >= 8 ? null : (
// //                             <div>
// //                                 <PlusOutlined />
// //                                 <div style={{ marginTop: 8 }}>Upload</div>
// //                             </div>
// //                         )}
// //                     </Upload>
// //                     <Button
// //                         style={{ backgroundColor: '#6DA5C0' }}
// //                         type="primary" onClick={handleFeedbackSubmit}>
// //                         Submit Feedback
// //                     </Button>
// //                 </Drawer>

// //                 {/* Feedback Display */}
// //                 <h2 className="feedback-header">Customer Feedbacks</h2>
// //                 <div>  
// //                     {feedbackList.length > 0 ? (
// //                         feedbackList.map(feedbackItem => (
// //                             <div key={feedbackItem.id} className="feedback-item">
// //                                 <strong>{feedbackItem.userId}</strong>:
// //                                 <p>{feedbackItem.feedback}</p>
// //                                 <div className="feedback-images">
// //                                     {feedbackItem.images.map((img, index) => (
// //                                         <img key={index} src={img} alt="feedback" />
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         ))
// //                     ) : (
// //                         <p>No feedbacks yet for this product.</p>
// //                     )}
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default SingleProduct;





// import React, { useState, useContext, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';
// import { AuthContext } from './AuthContext';
// import { db, storage } from '../../Config/firebaseConfig'; // Ensure you have storage imported
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import necessary functions from Firebase Storage
// import { Drawer, Button, Input, Upload, message } from 'antd'; // Import Ant Design components
// import { PlusOutlined } from '@ant-design/icons'; // Ant Design icon for upload button
// import './SingleProduct.css';

// function SingleProduct() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { addToCart } = useContext(CartContext);
//     const { user } = useContext(AuthContext);
//     const { item } = location.state || {};

//     const [quantity, setQuantity] = useState(1);
//     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
//     const [feedback, setFeedback] = useState('');
//     const [feedbackImages, setFeedbackImages] = useState([]);
//     const [feedbackList, setFeedbackList] = useState([]);
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const [userFeedbackSubmitted, setUserFeedbackSubmitted] = useState(false);

//     useEffect(() => {
//         if (item) {
//             setTotalPrice(quantity * item.price);
//         }
//     }, [quantity, item]);

//     useEffect(() => {
//         const fetchFeedbacks = async () => {
//             const feedbackCollection = collection(db, 'Customers Feedback');
//             const feedbackSnapshot = await getDocs(feedbackCollection);
//             const feedbacks = feedbackSnapshot.docs
//                 .map(doc => ({ id: doc.id, ...doc.data() }))
//                 .filter(feedback => feedback.productId === item.id);

//             setFeedbackList(feedbacks);
//         };

//         if (item) {
//             fetchFeedbacks();
//         }
//     }, [item]);

//     const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
//     const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

//     const handleAddToCart = () => {
//         if (item && user) {
//             addToCart(item, quantity);
//             navigate('/cart');
//         }

//         else{!user}{
//             message.error('Please Login '); // Replace alert with message
//             navigate('/login');
//         }
//     };

//     const handleFeedbackSubmit = async () => {
//         if (!feedback || feedbackImages.length === 0) {
//             message.error('Please provide feedback and upload at least one image.'); // Replace alert with message
//             return;
//         }

//         try {
//             const imageUrls = [];

//             // Upload images to Firebase Storage
//             for (const image of feedbackImages) {
//                 const storageRef = ref(storage, `feedback-images/${Date.now()}_${image.name}`); // Create a unique reference for each image
//                 const uploadResult = await uploadBytes(storageRef, image);
//                 const downloadUrl = await getDownloadURL(uploadResult.ref);
//                 imageUrls.push(downloadUrl); // Collect the download URLs
//             }

//             const newFeedback = {
//                 userId: user.name,
//                 productId: item.id,
//                 productName: item.name,
//                 feedback,
//                 images: imageUrls, // Save the uploaded image URLs
//                 timestamp: new Date(),
//             };

//             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
//             setUserFeedbackSubmitted(true);
//             setFeedback('');
//             setFeedbackImages([]);
//             message.success('Feedback submitted successfully!'); // Replace alert with message
//             setIsDrawerOpen(false); // Close drawer after submission
//         } catch (error) {
//             console.error('Error submitting feedback:', error);
//             message.error('Failed to submit feedback.'); // Replace alert with message
//         }
//     };

//     const handleImageUpload = (file) => {
//         setFeedbackImages(prev => [...prev, file]); // Store the file object
//         return false; // Prevent upload to server
//     };

//     const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

//     if (!item) return <p>Loading...</p>;

//     return (
//         <>
//             <div className="single-product">
//                 {/* Product Details */}
//                 <div className="single-product-content">
//                     <img src={item.imageUrl} alt={item.title} className="single-product-image" />
//                     <div className="single-product-details">
//                         <h1>{item.name}</h1>
//                         <p>{item.description}</p>
//                         <p>Category: {item.category}</p>
//                         <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
//                         <div className="quantity-controls">
//                             <button onClick={handleDecrement} className="single-product-btn">-</button>
//                             <p>{quantity}</p>
//                             <button onClick={handleIncrement} className="single-product-btn">+</button>
//                         </div>
//                         <br />
//                         <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 {/* Feedback Section */}
//                 {user && (
//                     <div>
//                         <Button className="add-product-btn" onClick={toggleDrawer}>
//                             Add Feedback
//                         </Button>
//                     </div>
//                 )}

//                 {/* Feedback Drawer */}
//                 <Drawer
//                     title="Submit Your Feedback"
//                     placement="right"
//                     onClose={toggleDrawer}
//                     visible={isDrawerOpen}
//                 >
//                     <Input.TextArea
//                         value={feedback}
//                         onChange={(e) => setFeedback(e.target.value)}
//                         placeholder="Leave your feedback..."
//                         rows={4}
//                     />
//                     <Upload
//                         listType="picture-card"
//                         beforeUpload={handleImageUpload}
//                         multiple
//                         accept="image/*,video/*"
//                     >
//                         {feedbackImages.length >= 8 ? null : (
//                             <div>
//                                 <PlusOutlined />
//                                 <div style={{ marginTop: 8 }}>Upload</div>
//                             </div>
//                         )}
//                     </Upload>
//                     <Button
//                         style={{ backgroundColor: '#6DA5C0' }}
//                         type="primary" onClick={handleFeedbackSubmit}>
//                         Submit Feedback
//                     </Button>
//                 </Drawer>

//                 {/* Feedback Display */}
//                 <h2 className="feedback-header">Customer Feedbacks</h2>
//                 <div>
//                     {feedbackList.length > 0 ? (
//                         feedbackList.map(feedbackItem => (
//                             <div key={feedbackItem.id} className="feedback-item">
//                                 <strong>{feedbackItem.userId}</strong>:
//                                 <p>{feedbackItem.feedback}</p>
//                                 <div className="feedback-images">
//                                     {feedbackItem.images.map((img, index) => (
//                                         <img key={index} src={img} alt="feedback" />
//                                     ))}
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No feedbacks yet for this product.</p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SingleProduct;










import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { AuthContext } from './AuthContext';
import { db, storage } from '../../Config/firebaseConfig'; // Ensure you have storage imported
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import necessary functions from Firebase Storage
import { Drawer, Button, Input, Upload, message , Image} from 'antd'; // Import Ant Design components
import { PlusOutlined } from '@ant-design/icons'; // Ant Design icon for upload button
import './SingleProduct.css';

function SingleProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const { item } = location.state || {};

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
    const [feedback, setFeedback] = useState('');
    const [feedbackImages, setFeedbackImages] = useState([]);
    const [feedbackList, setFeedbackList] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [userFeedbackSubmitted, setUserFeedbackSubmitted] = useState(false);

    useEffect(() => {
        if (item) {
            setTotalPrice(quantity * item.price);
        }
    }, [quantity, item]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const feedbackCollection = collection(db, 'Customers Feedback');
            const feedbackSnapshot = await getDocs(feedbackCollection);
            const feedbacks = feedbackSnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(feedback => feedback.productId === item.id);

            setFeedbackList(feedbacks);
        };

        if (item) {
            fetchFeedbacks();
        }
    }, [item]);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    const handleAddToCart = () => {
        if (item && user) {
            addToCart(item, quantity);
            navigate('/cart');
        } else {
            message.error('Please Login'); // Replace alert with message
            navigate('/login');
        }
    };

    const handleFeedbackSubmit = async () => {
        if (!feedback || feedbackImages.length === 0) {
            message.error('Please provide feedback and upload at least one image.'); // Replace alert with message
            return;
        }

        try {
            const imageUrls = [];

            // Upload images to Firebase Storage
            for (const image of feedbackImages) {
                const storageRef = ref(storage, `feedback-images/${Date.now()}_${image.name}`); // Create a unique reference for each image
                const uploadResult = await uploadBytes(storageRef, image);
                const downloadUrl = await getDownloadURL(uploadResult.ref);
                imageUrls.push(downloadUrl); // Collect the download URLs
            }

            const newFeedback = {
                userId: user.name,
                productId: item.id,
                productName: item.name,
                feedback,
                images: imageUrls, // Save the uploaded image URLs
                timestamp: new Date(),
            };

            await addDoc(collection(db, 'Customers Feedback'), newFeedback);
            setUserFeedbackSubmitted(true);
            setFeedback('');
            setFeedbackImages([]);
            message.success('Feedback submitted successfully!'); // Replace alert with message
            setIsDrawerOpen(false); // Close drawer after submission
        } catch (error) {
            console.error('Error submitting feedback:', error);
            message.error('Failed to submit feedback.'); // Replace alert with message
        }
    };

    const handleImageUpload = (file) => {
        setFeedbackImages(prev => [...prev, file]); // Store the file object
        return false; // Prevent upload to server
    };

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const calculateDaysSince = (timestamp) => {
        const feedbackDate = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JS date
        const currentDate = new Date();
        const timeDiff = currentDate - feedbackDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert time difference to days
        return daysDiff;
    };

    if (!item) return <p>Loading...</p>;

    return (
        <>
            <div className="single-product">
                {/* Product Details */}
                <div className="single-product-content">
                    <img src={item.imageUrl} alt={item.title} className="single-product-image" />
                    <div className="single-product-details">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>Category: {item.category}</p>
                        <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
                        <div className="quantity-controls">
                            <button onClick={handleDecrement} className="single-product-btn">-</button>
                            <p>{quantity}</p>
                            <button onClick={handleIncrement} className="single-product-btn">+</button>
                        </div>
                        <br />
                        <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div>
                {/* Feedback Section */}
                {user && (
                    <div>
                        <Button 
                             style={{
                                backgroundColor: '#6DA5C0',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                border: 'none'
                            }}
                        className="add-product-btn" onClick={toggleDrawer}>
                            Add Feedback
                        </Button>
                    </div>
                )}

                {/* Feedback Drawer */}
                <Drawer
                    title="Submit Your Feedback"
                    placement="right"
                    onClose={toggleDrawer}
                    visible={isDrawerOpen}
                >
                    <Input.TextArea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Leave your feedback..."
                        rows={4}
                    />
                    <Upload
                        listType="picture-card"
                        beforeUpload={handleImageUpload}
                        multiple
                        accept="image/*,video/*"
                    >
                        {feedbackImages.length >= 8 ? null : (
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        )}
                    </Upload>
                    <Button
                            style={{
                                backgroundColor: '#6DA5C0',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                border: 'none'
                            }}
                        type="primary" onClick={handleFeedbackSubmit}>
                        Submit Feedback
                    </Button>
                </Drawer>

                {/* Feedback Display
                <h2 className="feedback-header">Customer Feedbacks</h2>
                <div>
                    {feedbackList.length > 0 ? (
                        feedbackList.map(feedbackItem => (
                            <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between'}} key={feedbackItem.id} className="feedback-item">
                                <strong>{feedbackItem.userId} :</strong>
                                <p>{feedbackItem.feedback}</p>
                                
                                <div className="feedback-images">
                                    {feedbackItem.images.map((img, index) => (
                                        <img key={index} src={img} alt="feedback" />
                                    ))}
                                </div>

                                <p>
                                    Date {new Date(feedbackItem.timestamp.seconds * 1000).toLocaleDateString()}<br />
                                    ({calculateDaysSince(feedbackItem.timestamp)} days ago)
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No feedbacks yet for this product.</p>
                    )}
                </div> */}

            <div>
                    {/* Feedback Display */}
                    <h2 className="feedback-header">Customer Feedbacks</h2>
                    <div>
                        {feedbackList.length > 0 ? (
                            feedbackList.map(feedbackItem => (
                                <div key={feedbackItem.id} className="feedback-item">
                                    <div>
                                        <strong>{feedbackItem.userId} :</strong>
                                        <div className="feedback-images">
                                            {feedbackItem.images.map((imageUrl, index) => (
                                                <Image
                                                    key={index}
                                                    src={imageUrl}
                                                    alt={`Feedback ${index}`}
                                                    width={100} // Adjust thumbnail size if needed
                                                    preview // Enable preview (opens on click)
                                                />
                                            ))}
                                        </div>
                                        <div className="feedback-content">{feedbackItem.feedback}</div>
                                        <div className="feedback-meta">
                                            Posted {calculateDaysSince(feedbackItem.timestamp)} days ago
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No feedback available yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;
