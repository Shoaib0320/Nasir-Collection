// // // import React, { useState, useContext, useEffect } from 'react';
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import { CartContext } from './CartContext';
// // // import { AuthContext } from './AuthContext';
// // // import { db, storage } from '../../Config/firebaseConfig'; // Ensure you have storage imported
// // // import { collection, getDocs, addDoc } from 'firebase/firestore';
// // // import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import necessary functions from Firebase Storage
// // // import { Drawer, Button, Input, Upload, message , Image} from 'antd'; // Import Ant Design components
// // // import { PlusOutlined } from '@ant-design/icons'; // Ant Design icon for upload button
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
// // //         } else {
// // //             message.error('Please Login'); // Replace alert with message
// // //             navigate('/login');
// // //         }
// // //     };

// // //     const handleFeedbackSubmit = async () => {
// // //         if (!feedback || feedbackImages.length === 0) {
// // //             message.error('Please provide feedback and upload at least one image.'); // Replace alert with message
// // //             return;
// // //         }

// // //         try {
// // //             const imageUrls = [];

// // //             // Upload images to Firebase Storage
// // //             for (const image of feedbackImages) {
// // //                 const storageRef = ref(storage, `feedback-images/${Date.now()}_${image.name}`); // Create a unique reference for each image
// // //                 const uploadResult = await uploadBytes(storageRef, image);
// // //                 const downloadUrl = await getDownloadURL(uploadResult.ref);
// // //                 imageUrls.push(downloadUrl); // Collect the download URLs
// // //             }

// // //             const newFeedback = {
// // //                 userId: user.name,
// // //                 productId: item.id,
// // //                 productName: item.name,
// // //                 feedback,
// // //                 images: imageUrls, // Save the uploaded image URLs
// // //                 timestamp: new Date(),
// // //             };

// // //             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
// // //             setUserFeedbackSubmitted(true);
// // //             setFeedback('');
// // //             setFeedbackImages([]);
// // //             message.success('Feedback submitted successfully!'); // Replace alert with message
// // //             setIsDrawerOpen(false); // Close drawer after submission
// // //         } catch (error) {
// // //             console.error('Error submitting feedback:', error);
// // //             message.error('Failed to submit feedback.'); // Replace alert with message
// // //         }
// // //     };

// // //     const handleImageUpload = (file) => {
// // //         setFeedbackImages(prev => [...prev, file]); // Store the file object
// // //         return false; // Prevent upload to server
// // //     };

// // //     const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

// // //     const calculateDaysSince = (timestamp) => {
// // //         const feedbackDate = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JS date
// // //         const currentDate = new Date();
// // //         const timeDiff = currentDate - feedbackDate;
// // //         const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert time difference to days
// // //         return daysDiff;
// // //     };

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
// // //                         <Button 
// // //                              style={{
// // //                                 backgroundColor: '#6DA5C0',
// // //                                 color: '#fff',
// // //                                 fontWeight: 'bold',
// // //                                 borderRadius: '8px',
// // //                                 border: 'none'
// // //                             }}
// // //                         className="add-product-btn" onClick={toggleDrawer}>
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
// // //                             style={{
// // //                                 backgroundColor: '#6DA5C0',
// // //                                 color: '#fff',
// // //                                 fontWeight: 'bold',
// // //                                 borderRadius: '8px',
// // //                                 border: 'none'
// // //                             }}
// // //                         type="primary" onClick={handleFeedbackSubmit}>
// // //                         Submit Feedback
// // //                     </Button>
// // //                 </Drawer>

// // //                 {/* Feedback Display
// // //                 <h2 className="feedback-header">Customer Feedbacks</h2>
// // //                 <div>
// // //                     {feedbackList.length > 0 ? (
// // //                         feedbackList.map(feedbackItem => (
// // //                             <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between'}} key={feedbackItem.id} className="feedback-item">
// // //                                 <strong>{feedbackItem.userId} :</strong>
// // //                                 <p>{feedbackItem.feedback}</p>
                                
// // //                                 <div className="feedback-images">
// // //                                     {feedbackItem.images.map((img, index) => (
// // //                                         <img key={index} src={img} alt="feedback" />
// // //                                     ))}
// // //                                 </div>

// // //                                 <p>
// // //                                     Date {new Date(feedbackItem.timestamp.seconds * 1000).toLocaleDateString()}<br />
// // //                                     ({calculateDaysSince(feedbackItem.timestamp)} days ago)
// // //                                 </p>
// // //                             </div>
// // //                         ))
// // //                     ) : (
// // //                         <p>No feedbacks yet for this product.</p>
// // //                     )}
// // //                 </div> */}

// // //             <div>
// // //                     {/* Feedback Display */}
// // //                     <h2 className="feedback-header">Customer Feedbacks</h2>
// // //                     <div>
// // //                         {feedbackList.length > 0 ? (
// // //                             feedbackList.map(feedbackItem => (
// // //                                 <div key={feedbackItem.id} className="feedback-item">
// // //                                     <div>
// // //                                         <strong>{feedbackItem.userId} :</strong>
// // //                                         <div className="feedback-images">
// // //                                             {feedbackItem.images.map((imageUrl, index) => (
// // //                                                 <Image
// // //                                                     key={index}
// // //                                                     src={imageUrl}
// // //                                                     alt={`Feedback ${index}`}
// // //                                                     width={100} // Adjust thumbnail size if needed
// // //                                                     preview // Enable preview (opens on click)
// // //                                                 />
// // //                                             ))}
// // //                                         </div>
// // //                                         <div className="feedback-content">{feedbackItem.feedback}</div>
// // //                                         <div className="feedback-meta">
// // //                                             Posted {calculateDaysSince(feedbackItem.timestamp)} days ago
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             ))
// // //                         ) : (
// // //                             <p>No feedback available yet.</p>
// // //                         )}
// // //                     </div>
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
// // import { Drawer, Button, Input, Upload, message, Image, Spin } from 'antd'; // Import Ant Design components
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
// //     const [loading, setLoading] = useState(false);

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
// //         } else {
// //             message.error('Please Login');
// //             navigate('/login');
// //         }
// //     };

// //     const handleFeedbackSubmit = async () => {
// //         if (!feedback || feedbackImages.length === 0) {
// //             message.error('Please provide feedback and upload at least one image.');
// //             return;
// //         }

// //         try {
// //             setLoading(true); // Start loader

// //             const imageUrls = [];

// //             // Upload images to Firebase Storage
// //             for (const image of feedbackImages) {
// //                 const storageRef = ref(storage, `feedback-images/${Date.now()}_${image.name}`);
// //                 const uploadResult = await uploadBytes(storageRef, image);
// //                 const downloadUrl = await getDownloadURL(uploadResult.ref);
// //                 imageUrls.push(downloadUrl);
// //             }

// //             const newFeedback = {
// //                 userId: user.name,
// //                 productId: item.id,
// //                 productName: item.name,
// //                 feedback,
// //                 images: imageUrls,
// //                 timestamp: new Date(),
// //             };

// //             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
// //             setUserFeedbackSubmitted(true);
// //             setFeedback('');
// //             setFeedbackImages([]);
// //             message.success('Feedback submitted successfully!');
// //             setIsDrawerOpen(false); // Close drawer after submission

// //             // Re-fetch feedback to show the latest one
// //             const feedbackCollection = collection(db, 'Customers Feedback');
// //             const feedbackSnapshot = await getDocs(feedbackCollection);
// //             const feedbacks = feedbackSnapshot.docs
// //                 .map(doc => ({ id: doc.id, ...doc.data() }))
// //                 .filter(feedback => feedback.productId === item.id);

// //             setFeedbackList(feedbacks);
// //         } catch (error) {
// //             console.error('Error submitting feedback:', error);
// //             message.error('Failed to submit feedback.');
// //         } finally {
// //             setLoading(false); // Stop loader
// //         }
// //     };

// //     const handleImageUpload = (file) => {
// //         setFeedbackImages(prev => [...prev, file]);
// //         return false;
// //     };

// //     const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

// //     const calculateDaysSince = (timestamp) => {
// //         if (timestamp && timestamp.seconds) {
// //             const feedbackDate = new Date(timestamp.seconds * 1000);
// //             const currentDate = new Date();
// //             const timeDiff = currentDate - feedbackDate;
// //             const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// //             return daysDiff;
// //         }
// //         return 'N/A'; // Return 'N/A' if timestamp is unavailable
// //     };

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
// //                         <Button 
// //                              style={{
// //                                 backgroundColor: '#6DA5C0',
// //                                 color: '#fff',
// //                                 fontWeight: 'bold',
// //                                 borderRadius: '8px',
// //                                 border: 'none'
// //                             }}
// //                         className="add-product-btn" onClick={toggleDrawer}>
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
// //                     <Spin spinning={loading} tip="Submitting Feedback...">
// //                         <Input.TextArea
// //                             value={feedback}
// //                             onChange={(e) => setFeedback(e.target.value)}
// //                             placeholder="Leave your feedback..."
// //                             rows={4}
// //                         />
// //                         <Upload
// //                             listType="picture-card"
// //                             beforeUpload={handleImageUpload}
// //                             multiple
// //                             accept="image/*,video/*"
// //                         >
// //                             {feedbackImages.length >= 8 ? null : (
// //                                 <div>
// //                                     <PlusOutlined />
// //                                     <div style={{ marginTop: 8 }}>Upload</div>
// //                                 </div>
// //                             )}
// //                         </Upload>
// //                         <Button
// //                                 style={{
// //                                     backgroundColor: '#6DA5C0',
// //                                     color: '#fff',
// //                                     fontWeight: 'bold',
// //                                     borderRadius: '8px',
// //                                     border: 'none'
// //                                 }}
// //                             type="primary" onClick={handleFeedbackSubmit}>
// //                             Submit Feedback
// //                         </Button>
// //                     </Spin>
// //                 </Drawer>

// //                 {/* Feedback Display */}
// //                 <h2 className="feedback-header">Customer Feedbacks</h2>
// //                 <div>
// //                     {feedbackList.length > 0 ? (
// //                         feedbackList.map(feedbackItem => (
// //                             <div key={feedbackItem.id} className="feedback-item">
// //                                 <div>
// //                                     <strong>{feedbackItem.userId} :</strong>
// //                                     <div className="feedback-images">
// //                                         {feedbackItem.images.map((imageUrl, index) => (
// //                                             <Image
// //                                                 key={index}
// //                                                 src={imageUrl}
// //                                                 alt={`Feedback ${index}`}
// //                                                 width={100}
// //                                                 preview
// //                                             />
// //                                         ))}
// //                                     </div>
// //                                     <div className="feedback-content">{feedbackItem.feedback}</div>
// //                                     <div className="feedback-meta">
// //                                         Posted {calculateDaysSince(feedbackItem.timestamp)} days ago
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))
// //                     ) : (
// //                         <p>No feedback available yet.</p>
// //                     )}
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default SingleProduct;










// import React, { useState, useEffect, useContext } from 'react';
// import { message, Image, Button, Drawer, Spin, Upload, Input } from 'antd';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { collection, addDoc, getDocs } from 'firebase/firestore';
// import { storage, db } from '../../Config/firebaseConfig';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';
// import { AuthContext } from './AuthContext';
// import './SingleProduct.css'
// import { PlusOutlined } from '@ant-design/icons'; // Ant Design icon for upload button


// const SingleProduct = () => {
//     const location = useLocation();
//     const { item } = location.state || {};
//     const navigate = useNavigate();

//     const { user } = useContext(AuthContext);
//     const { addToCart } = useContext(CartContext);
//     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
//     const [quantity, setQuantity] = useState(1);
//     const [feedback, setFeedback] = useState('');
//     const [feedbackImages, setFeedbackImages] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [feedbackList, setFeedbackList] = useState([]);
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);


//     // Fetch feedback when the component mounts
//     useEffect(() => {
//         fetchFeedback();
//     }, [item]);

//     useEffect(() => {
//         if (item) {
//             setTotalPrice(quantity * item.price);
//         }
//     }, [quantity, item]);

    
//     const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
//     const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

//     const handleAddToCart = () => {
//         if (item && user) {
//             addToCart(item, quantity);
//             navigate('/cart');
//         } else {
//             message.error('Please Login');
//             navigate('/login');
//         }
//     };

//     const handleFeedbackSubmit = async () => {
//         if (!feedback || feedbackImages.length === 0) {
//             message.error('Please provide feedback and upload at least one image or video.');
//             return;
//         }

//         try {
//             setLoading(true);
//             const mediaUrls = [];

//             for (const media of feedbackImages) {
//                 const mediaRef = ref(storage, `feedback-media/${Date.now()}_${media.name}`);
//                 const uploadResult = await uploadBytes(mediaRef, media);
//                 const downloadUrl = await getDownloadURL(uploadResult.ref);
//                 mediaUrls.push({
//                     url: downloadUrl,
//                     type: media.type.includes('video') ? 'video' : 'image'
//                 });
//             }

//             const newFeedback = {
//                 userId: user ? user.displayName : 'Anonymous',
//                 productId: item.id,
//                 feedback,
//                 media: mediaUrls,
//                 timestamp: new Date(),
//             };

//             await addDoc(collection(db, 'Customers Feedback'), newFeedback);
//             message.success('Feedback submitted successfully!');
//             setFeedback(''); // Reset feedback
//             setFeedbackImages([]); // Reset media input
//             fetchFeedback(); // Refresh feedback list
//             setIsDrawerOpen(false); // Close drawer after submission

//         } catch (error) {
//             console.error('Error submitting feedback:', error);
//             message.error('Failed to submit feedback.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchFeedback = async () => {
//         const feedbackCollection = collection(db, 'Customers Feedback');
//         const feedbackSnapshot = await getDocs(feedbackCollection);
//         const feedbacks = feedbackSnapshot.docs
//             .map(doc => ({ id: doc.id, ...doc.data() }))
//             .filter(feedback => feedback.productId === item.id);
//         setFeedbackList(feedbacks);
//     };

//     // const handleMediaChange = (e) => {
//     //     const selectedFiles = Array.from(e.target.files);
//     //     setFeedbackImages(selectedFiles);
//     // };


//     const handleMediaChange = ({ fileList }) => {
//         const selectedFiles = fileList.map(file => file.originFileObj);
//         setFeedbackImages(selectedFiles);
//     };

//     const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);


//     return (
//         <div>
//              <div className="single-product">
//                  {/* Product Details */}
//                  <div className="single-product-content">
//                      <img src={item.imageUrl} alt={item.title} className="single-product-image" />
//                      <div className="single-product-details">
//                          <h1>{item.name}</h1>
//                          <p>{item.description}</p>
//                          <p>Category: {item.category}</p>
//                          <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
//                          <div className="quantity-controls">
//                              <button onClick={handleDecrement} className="single-product-btn">-</button>
//                              <p>{quantity}</p>
//                              <button onClick={handleIncrement} className="single-product-btn">+</button>
//                          </div>
//                          <br />
//                          <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
//                      </div>
//                  </div>
//              </div>

//               <div>
//                  {/* Feedback Section */}
//                      {user && (
//                         <div>
//                             <Button 
//                                 style={{
//                                     backgroundColor: '#6DA5C0',
//                                     color: '#fff',
//                                     fontWeight: 'bold',
//                                     borderRadius: '8px',
//                                     border: 'none'
//                                 }}
//                             className="add-product-btn" onClick={toggleDrawer}>
//                                 Add Feedback
//                             </Button>
//                         </div>
//                     )}

//                     {/* Feedback Drawer */}
//                     <Drawer
//                         title="Submit Your Feedback"
//                         placement="right"
//                         onClose={toggleDrawer}
//                         visible={isDrawerOpen}
//                     >
//                         <Spin spinning={loading} tip="Submitting Feedback...">
//                             <Input.TextArea
//                                 value={feedback}
//                                 onChange={(e) => setFeedback(e.target.value)}
//                                 placeholder="Leave your feedback..."
//                                 rows={4}
//                             />
//                             <Upload
//                                 listType="picture-card"
//                                 multiple
//                                 accept="image/*,video/*"
//                                 beforeUpload={() => false} // Prevent automatic upload
//                                 onChange={handleMediaChange}
//                             >
//                                 {feedbackImages.length >= 8 ? null : (
//                                     <div>
//                                         <PlusOutlined />
//                                         <div style={{ marginTop: 8 }}>Upload</div>
//                                     </div>
//                                 )}
//                             </Upload>
//                             <Button
//                                 style={{
//                                     backgroundColor: '#6DA5C0',
//                                     color: '#fff',
//                                     fontWeight: 'bold',
//                                     borderRadius: '8px',
//                                     border: 'none',
//                                     marginTop: '15px'
//                                 }}
//                                 type="primary"
//                                 onClick={handleFeedbackSubmit}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Submit Feedback'}
//                             </Button>
//                         </Spin>
//                     </Drawer>
//             </div>


//             <div className="feedback-section">
//                 {/* <h3>Leave Feedback</h3>
//                 <textarea
//                     value={feedback}
//                     onChange={(e) => setFeedback(e.target.value)}
//                     placeholder="Write your feedback..."
//                 />
//                 <input
//                     type="file"
//                     multiple
//                     accept="image/*,video/*"
//                     onChange={handleMediaChange}
//                 />
//                 <button onClick={handleFeedbackSubmit} disabled={loading}>
//                     {loading ? 'Submitting...' : 'Submit Feedback'}
//                 </button> */}

//                 <div className="feedback-list">
//                     {feedbackList.length > 0 ? (
//                         feedbackList.map((feedbackItem) => (
//                             <div key={feedbackItem.id} className="feedback-item">
//                                 <strong>{feedbackItem.userId} :</strong>
//                                 <p>{feedbackItem.feedback}</p>
//                                 <div className="media-gallery">
//                                     {feedbackItem.media && feedbackItem.media.length > 0 ? (
//                                         feedbackItem.media.map((media, index) => (
//                                             media.type === 'video' ? (
//                                                 <video key={index} controls width="50%">
//                                                     <source src={media.url} type="video/mp4" />
//                                                     Your browser does not support the video tag.
//                                                 </video>
//                                             ) : (
//                                                 <Image
//                                                     key={index}
//                                                     src={media.url}
//                                                     alt="Feedback media"
//                                                     width={100}
//                                                     preview
//                                                 />
//                                             )
//                                         ))
//                                     ) : (
//                                         <p>No media available</p>
//                                     )}
//                                 </div>
//                                 <p>Posted on: {new Date(feedbackItem.timestamp.toDate()).toLocaleDateString()}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No feedback available yet.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;





import React, { useState, useEffect, useContext } from 'react';
import { message, Image, Button, Drawer, Spin, Upload, Input } from 'antd';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { storage, db } from '../../Config/firebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { AuthContext } from './AuthContext';
import './SingleProduct.css'
import { PlusOutlined } from '@ant-design/icons';

const SingleProduct = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { addToCart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);
    const [quantity, setQuantity] = useState(1);
    const [feedback, setFeedback] = useState('');
    const [feedbackImages, setFeedbackImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [feedbackList, setFeedbackList] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [viewDetailFeedback, setViewDetailFeedback] = useState(null);

    useEffect(() => {
        fetchFeedback();
    }, [item]);

    useEffect(() => {
        if (item) {
            setTotalPrice(quantity * item.price);
        }
    }, [quantity, item]);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    const handleAddToCart = () => {
        if (item && user) {
            addToCart(item, quantity);
            navigate('/cart');
        } else {
            message.error('Please Login');
            navigate('/login');
        }
    };

    const handleFeedbackSubmit = async () => {
        if (!feedback || feedbackImages.length === 0) {
            message.error('Please provide feedback and upload at least one image or video.');
            return;
        }

        try {
            setLoading(true);
            const mediaUrls = [];

            for (const media of feedbackImages) {
                const mediaRef = ref(storage, `feedback-media/${Date.now()}_${media.name}`);
                const uploadResult = await uploadBytes(mediaRef, media);
                const downloadUrl = await getDownloadURL(uploadResult.ref);
                mediaUrls.push({
                    url: downloadUrl,
                    type: media.type.includes('video') ? 'video' : 'image'
                });
            }

            const newFeedback = {
                userId: user ? user.displayName : 'Anonymous',
                productId: item.id,
                feedback,
                media: mediaUrls,
                timestamp: new Date(),
            };

            await addDoc(collection(db, 'Customers Feedback'), newFeedback);
            message.success('Feedback submitted successfully!');
            setFeedback('');
            setFeedbackImages([]);
            fetchFeedback();
            setIsDrawerOpen(false);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            message.error('Failed to submit feedback.');
        } finally {
            setLoading(false);
        }
    };

    const fetchFeedback = async () => {
        const feedbackCollection = collection(db, 'Customers Feedback');
        const feedbackSnapshot = await getDocs(feedbackCollection);
        const feedbacks = feedbackSnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(feedback => feedback.productId === item.id);
        setFeedbackList(feedbacks);
    };

    const handleMediaChange = ({ fileList }) => {
        const selectedFiles = fileList.map(file => file.originFileObj);
        setFeedbackImages(selectedFiles);
    };

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    // Function to view details of a specific feedback
    const viewDetails = (feedbackItem) => setViewDetailFeedback(feedbackItem);
    const closeDetailDrawer = () => setViewDetailFeedback(null);

    return (
        <div>
            <div className="single-product">
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
                {user && (
                    <Button
                        style={{
                            backgroundColor: '#6DA5C0',
                            color: '#fff',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            border: 'none'
                        }}
                        onClick={toggleDrawer}
                    >
                        Add Feedback
                    </Button>
                )}

                <Drawer
                    title="Submit Your Feedback"
                    placement="right"
                    onClose={toggleDrawer}
                    visible={isDrawerOpen}
                >
                    <Spin spinning={loading} tip="Submitting Feedback...">
                        <Input.TextArea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Leave your feedback..."
                            rows={4}
                        />
                        <Upload
                            listType="picture-card"
                            multiple
                            accept="image/*,video/*"
                            beforeUpload={() => false}
                            onChange={handleMediaChange}
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
                                border: 'none',
                                marginTop: '15px'
                            }}
                            onClick={handleFeedbackSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Feedback'}
                        </Button>
                    </Spin>
                </Drawer>
            </div>

            <div className="feedback-section">
                <div className="feedback-list">
                    {feedbackList.length > 0 ? (
                        feedbackList.map((feedbackItem) => (
                            <div key={feedbackItem.id} className="feedback-item">
                                <strong>{feedbackItem.userId} :</strong>
                                <p>{feedbackItem.feedback}</p>
                                <Button onClick={() => viewDetails(feedbackItem)}>View Details</Button>
                            </div>
                        ))
                    ) : (
                        <p>No feedback available yet.</p>
                    )}
                </div>
            </div>

            {/* Feedback Detail Drawer */}
            <Drawer
                title="Feedback Details"
                placement="right"
                onClose={closeDetailDrawer}
                visible={!!viewDetailFeedback}
                width={400}
            >
                {viewDetailFeedback && (
                    <div>
                        <p><strong>User:</strong> {viewDetailFeedback.userId}</p>
                        <p>{viewDetailFeedback.feedback}</p>
                        <div className="media-gallery">
                            {viewDetailFeedback.media.map((media, index) => (
                                media.type === 'video' ? (
                                    <video key={index} controls width="100%">
                                        <source src={media.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        key={index}
                                        src={media.url}
                                        alt="Feedback media"
                                        width={200}
                                        preview
                                    />
                                )
                            ))}
                        </div>
                        <p>Posted on: {new Date(viewDetailFeedback.timestamp.toDate()).toLocaleDateString()}</p>
                    </div>
                )}
            </Drawer>
        </div>
    );
};

export default SingleProduct;
