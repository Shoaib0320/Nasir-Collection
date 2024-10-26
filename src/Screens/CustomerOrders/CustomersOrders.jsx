// // // // // // import React, { useContext, useEffect, useState } from 'react';
// // // // // // import { AuthContext } from '../SingleScreen/AuthContext'; // Ensure this is the correct path
// // // // // // import { db } from '../../Config/firebaseConfig';
// // // // // // import { doc, getDoc } from 'firebase/firestore';
// // // // // // import { Drawer, Table, Button, Typography, List, Avatar, Row, Col } from 'antd'; // Importing Ant Design components
// // // // // // import './CustomersOrders.css'; // Importing the CSS file for additional styles

// // // // // // const { Title, Text } = Typography;

// // // // // // export const CustomersOrders = ({ setHasOrders }) => { // Accept setHasOrders as a prop
// // // // // //     const { user } = useContext(AuthContext);
// // // // // //     const [orders, setOrders] = useState([]);
// // // // // //     const [visible, setVisible] = useState(false);
// // // // // //     const [selectedOrder, setSelectedOrder] = useState(null);

// // // // // //     useEffect(() => {
// // // // // //         const fetchOrders = async () => {
// // // // // //             if (user) {
// // // // // //                 const checkoutRef = doc(db, 'Checkout', user.name); // Use user name as document ID
// // // // // //                 const docSnapshot = await getDoc(checkoutRef);
// // // // // //                 if (docSnapshot.exists()) {
// // // // // //                     const fetchedOrders = docSnapshot.data().checkouts || [];
// // // // // //                     setOrders(fetchedOrders);
// // // // // //                     setHasOrders(fetchedOrders.length > 0); // Update hasOrders state based on the fetched orders
// // // // // //                 } else {
// // // // // //                     setHasOrders(false); // No orders found
// // // // // //                 }
// // // // // //             }
// // // // // //         };

// // // // // //         fetchOrders();
// // // // // //     }, [user, setHasOrders]); // Add setHasOrders to the dependency array

// // // // // //     const showDrawer = (order) => {
// // // // // //         setSelectedOrder(order);
// // // // // //         setVisible(true);
// // // // // //     };

// // // // // //     const onClose = () => {
// // // // // //         setVisible(false);
// // // // // //         setSelectedOrder(null);
// // // // // //     };

// // // // // //     const columns = [
// // // // // //         {
// // // // // //             title: 'Name',
// // // // // //             dataIndex: 'name',
// // // // // //             key: 'name',
// // // // // //         },
// // // // // //         {
// // // // // //             title: 'Total Amount',
// // // // // //             dataIndex: 'totalAmount',
// // // // // //             key: 'totalAmount',
// // // // // //             render: (text) => `PKR ${text.toFixed(2)}`,
// // // // // //         },
// // // // // //         {
// // // // // //             title: 'Total Items',
// // // // // //             dataIndex: 'totalItems',
// // // // // //             key: 'totalItems',
// // // // // //         },
// // // // // //         {
// // // // // //             title: 'Status',
// // // // // //             dataIndex: 'status',
// // // // // //             key: 'status',
// // // // // //             render: (text) => text || 'Pending',
// // // // // //         },
// // // // // //         {
// // // // // //             title: 'Actions',
// // // // // //             key: 'actions',
// // // // // //             render: (_, order) => (
// // // // // //                 <Button type="primary" style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// // // // // //                     onClick={() => showDrawer(order)}>
// // // // // //                     View Detail
// // // // // //                 </Button>
// // // // // //             ),
// // // // // //         },
// // // // // //     ];

// // // // // //     return (
// // // // // //         <div className="customers-orders">
// // // // // //             <Title level={1}>Customers Orders</Title>
// // // // // //             <Row gutter={[16, 16]}>
// // // // // //                 <Col span={24}>
// // // // // //                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
// // // // // //                         <Table
// // // // // //                             columns={columns}
// // // // // //                             dataSource={orders}
// // // // // //                             pagination={false}
// // // // // //                             rowKey={(record) => record.name} // Ensure unique keys for each row
// // // // // //                             size="middle"
// // // // // //                             style={{ whiteSpace: 'nowrap' }} // Prevents wrapping
// // // // // //                         />
// // // // // //                     </div>
// // // // // //                 </Col>
// // // // // //             </Row>

// // // // // //             <Drawer
// // // // // //                 title="Order Details"
// // // // // //                 placement="right"
// // // // // //                 onClose={onClose}
// // // // // //                 visible={visible}
// // // // // //                 width="35%" // Changed to a percentage for better responsiveness
// // // // // //                 bodyStyle={{ padding: '20px' }} // Add padding inside the drawer
// // // // // //             >
// // // // // //                 {selectedOrder && (
// // // // // //                     <div className="order-details">
// // // // // //                         <Title level={3}>Items in your order:</Title>
// // // // // //                         <List
// // // // // //                             itemLayout="horizontal"
// // // // // //                             dataSource={selectedOrder.items}
// // // // // //                             renderItem={(item) => (
// // // // // //                                 <List.Item>
// // // // // //                                     <List.Item.Meta
// // // // // //                                         avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
// // // // // //                                         title={<Text strong>{item.item.title}</Text>}
// // // // // //                                         description={
// // // // // //                                             <div>
// // // // // //                                                 <Text>{item.item.category}</Text>
// // // // // //                                                 <Text style={{ margin: '0 10px' }}>
// // // // // //                                                     Quantity: {item.quantity}
// // // // // //                                                 </Text>
// // // // // //                                                 <Text>PKR {item.item.price.toFixed(2)}</Text>
// // // // // //                                             </div>
// // // // // //                                         }
// // // // // //                                     />
// // // // // //                                 </List.Item>
// // // // // //                             )}
// // // // // //                         />
// // // // // //                     </div>
// // // // // //                 )}
// // // // // //             </Drawer>
// // // // // //         </div>
// // // // // //     );
// // // // // // };
















// // // // // // CustomersOrders.jsx
// // // // // import React, { useContext, useEffect, useState } from 'react';
// // // // // import { AuthContext } from '../SingleScreen/AuthContext';
// // // // // import { db } from '../../Config/firebaseConfig';
// // // // // import { doc, getDoc, onSnapshot, updateDoc ,setDoc } from 'firebase/firestore';
// // // // // import { Drawer, Table, Button, Typography, List, Avatar, Row, Col, Form, Input ,message } from 'antd';
// // // // // import './CustomersOrders.css';

// // // // // const { Title, Text } = Typography;

// // // // // export const CustomersOrders = ({ setHasOrders }) => {
// // // // //     const { user } = useContext(AuthContext);
// // // // //     const [orders, setOrders] = useState([]);
// // // // //     const [visible, setVisible] = useState(false);
// // // // //     const [selectedOrder, setSelectedOrder] = useState(null);
// // // // //     const [feedback, setFeedback] = useState('');

// // // // //     useEffect(() => {
// // // // //         const fetchOrders = async () => {
// // // // //             if (user) {
// // // // //                 const checkoutRef = doc(db, 'Checkout', user.name);
// // // // //                 onSnapshot(checkoutRef, (docSnapshot) => {
// // // // //                     if (docSnapshot.exists()) {
// // // // //                         const fetchedOrders = docSnapshot.data().checkouts || [];
// // // // //                         setOrders(fetchedOrders);
// // // // //                         setHasOrders(fetchedOrders.length > 0);
// // // // //                     } else {
// // // // //                         setHasOrders(false);
// // // // //                     }
// // // // //                 });
// // // // //             }
// // // // //         };

// // // // //         fetchOrders();
// // // // //     }, [user, setHasOrders]);

// // // // //     const showDrawer = (order) => {
// // // // //         setSelectedOrder(order);
// // // // //         setVisible(true);
// // // // //     };

// // // // //     const onClose = () => {
// // // // //         setVisible(false);
// // // // //         setSelectedOrder(null);
// // // // //     };

// // // // //     // const handleFeedbackSubmit = async () => {
// // // // //     //     if (!feedback) return;

// // // // //     //     const feedbackRef = doc(db, 'Feedback', user.name); // Using user name as document ID
// // // // //     //     await updateDoc(feedbackRef, {
// // // // //     //         [selectedOrder.timestamp]: feedback, // Store feedback with order timestamp as key
// // // // //     //     });
// // // // //     //     setFeedback('');
// // // // //     //     onClose();
// // // // //     // };

// // // // //     const handleFeedbackSubmit = async () => {
// // // // //         if (!feedback) {
// // // // //             message.warning('Please provide feedback before submitting.');
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             const feedbackRef = doc(db, 'Feedback', user.name); // User ID as document ID
// // // // //             await setDoc(feedbackRef, {
// // // // //                 feedback: feedback,
// // // // //                 orderID: selectedOrder.timestamp, // Store order ID for reference
// // // // //                 timestamp: new Date(),
// // // // //             });

// // // // //             message.success('Feedback submitted successfully!');
// // // // //             setFeedback('');
// // // // //             onClose();
// // // // //         } catch (error) {
// // // // //             console.error('Error submitting feedback:', error);
// // // // //             message.error('Failed to submit feedback. Please try again.');
// // // // //         }
// // // // //     };

// // // // //     const columns = [
// // // // //         {
// // // // //             title: 'Name',
// // // // //             dataIndex: 'name',
// // // // //             key: 'name',
// // // // //         },
// // // // //         {
// // // // //             title: 'Total Amount',
// // // // //             dataIndex: 'totalAmount',
// // // // //             key: 'totalAmount',
// // // // //             render: (text) => `PKR ${text.toFixed(2)}`,
// // // // //         },
// // // // //         {
// // // // //             title: 'Total Items',
// // // // //             dataIndex: 'totalItems',
// // // // //             key: 'totalItems',
// // // // //         },
// // // // //         {
// // // // //             title: 'Status',
// // // // //             dataIndex: 'status',
// // // // //             key: 'status',
// // // // //             render: (text) => text || 'Pending',
// // // // //         },
// // // // //         {
// // // // //             title: 'Actions',
// // // // //             key: 'actions',
// // // // //             render: (_, order) => (
// // // // //                 <Button
// // // // //                     type="primary"
// // // // //                     style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// // // // //                     onClick={() => showDrawer(order)}>
// // // // //                     View Detail
// // // // //                 </Button>
// // // // //             ),
// // // // //         },
// // // // //     ];

// // // // //     return (
// // // // //         <div className="customers-orders">
// // // // //             <Title level={1}>Customers Orders</Title>
// // // // //             <Row gutter={[16, 16]}>
// // // // //                 <Col span={24}>
// // // // //                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
// // // // //                         <Table
// // // // //                             columns={columns}
// // // // //                             dataSource={orders}
// // // // //                             pagination={false}
// // // // //                             rowKey={(record) => record.name}
// // // // //                             size="middle"
// // // // //                             style={{ whiteSpace: 'nowrap' }}
// // // // //                         />
// // // // //                     </div>
// // // // //                 </Col>
// // // // //             </Row>

// // // // //             <Drawer
// // // // //                 title="Order Details"
// // // // //                 placement="right"
// // // // //                 onClose={onClose}
// // // // //                 visible={visible}
// // // // //                 width="35%"
// // // // //                 bodyStyle={{ padding: '20px' }}
// // // // //             >
// // // // //                 {selectedOrder && (
// // // // //                     <div className="order-details">
// // // // //                         <Title level={3}>Items in your order:</Title>
// // // // //                         <List
// // // // //                             itemLayout="horizontal"
// // // // //                             dataSource={selectedOrder.items}
// // // // //                             renderItem={(item) => (
// // // // //                                 <List.Item>
// // // // //                                     <List.Item.Meta
// // // // //                                         avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
// // // // //                                         title={<Text strong>{item.item.title}</Text>}
// // // // //                                         description={
// // // // //                                             <div>
// // // // //                                                 <Text>{item.item.category}</Text>
// // // // //                                                 <Text style={{ margin: '0 10px' }}>
// // // // //                                                     Quantity: {item.quantity}
// // // // //                                                 </Text>
// // // // //                                                 <Text>PKR {item.item.price.toFixed(2)}</Text>
// // // // //                                             </div>
// // // // //                                         }
// // // // //                                     />
// // // // //                                 </List.Item>
// // // // //                             )}
// // // // //                         />
// // // // //                         {selectedOrder.status === 'Delivered' && (
// // // // //                             <div style={{ marginTop: '20px' }}>
// // // // //                                 <Title level={4}>Leave your feedback:</Title>
// // // // //                                 <Form onFinish={handleFeedbackSubmit}>
// // // // //                                     <Form.Item>
// // // // //                                         <Input.TextArea
// // // // //                                             rows={4}
// // // // //                                             value={feedback}
// // // // //                                             onChange={(e) => setFeedback(e.target.value)}
// // // // //                                             placeholder="Write your feedback here"
// // // // //                                         />
// // // // //                                     </Form.Item>
// // // // //                                     <Form.Item>
// // // // //                                         <Button type="primary" htmlType="submit" style={{ backgroundColor: '#6DA5C0' }}>
// // // // //                                             Submit Feedback
// // // // //                                         </Button>
// // // // //                                     </Form.Item>
// // // // //                                 </Form>
// // // // //                             </div>
// // // // //                         )}
// // // // //                     </div>
// // // // //                 )}
// // // // //             </Drawer>
// // // // //         </div>
// // // // //     );
// // // // // };







// // // // // CustomersOrders.jsx
// // // import React, { useContext, useEffect, useState } from 'react';
// // // import { AuthContext } from '../SingleScreen/AuthContext';
// // // import { db } from '../../Config/firebaseConfig';
// // // import { doc, onSnapshot ,setDoc } from 'firebase/firestore';
// // // import { Drawer, Table, Button, Typography, List, Avatar, Row, Col, Form, Input, message } from 'antd';
// // // import './CustomersOrders.css';

// // // const { Title, Text } = Typography;

// // // export const CustomersOrders = ({ setHasOrders }) => {
// // //     const { user } = useContext(AuthContext);
// // //     const [orders, setOrders] = useState([]);
// // //     const [visible, setVisible] = useState(false);
// // //     const [selectedOrder, setSelectedOrder] = useState(null);
// // //     const [feedback, setFeedback] = useState('');

// // //     useEffect(() => {
// // //         const fetchOrders = async () => {
// // //             if (user) {
// // //                 // Listen to the user's orders collection
// // //                 const checkoutRef = doc(db, 'Checkout', user.name);
// // //                 onSnapshot(checkoutRef, (docSnapshot) => {
// // //                     if (docSnapshot.exists()) {
// // //                         const fetchedOrders = docSnapshot.data().checkouts || [];
// // //                         setOrders(fetchedOrders);
// // //                         setHasOrders(fetchedOrders.length > 0);
// // //                     } else {
// // //                         setOrders([]);
// // //                         setHasOrders(false);
// // //                     }
// // //                 });
// // //             }
// // //         };

// // //         fetchOrders();
// // //     }, [user, setHasOrders]);

// // //     const showDrawer = (order) => {
// // //         setSelectedOrder(order);
// // //         setVisible(true);
// // //     };

// // //     const onClose = () => {
// // //         setVisible(false);
// // //         setSelectedOrder(null);
// // //     };

// // //     const handleFeedbackSubmit = async () => {
// // //         if (!feedback) {
// // //             message.warning('Please provide feedback before submitting.');
// // //             return;
// // //         }

// // //         try {
// // //             const feedbackRef = doc(db, 'Feedback', user.name); // User ID as document ID
// // //             await setDoc(feedbackRef, {
// // //                 feedback: feedback,
// // //                 orderID: selectedOrder.timestamp, // Store order ID for reference
// // //                 timestamp: new Date(),
// // //             });

// // //             message.success('Feedback submitted successfully!');
// // //             setFeedback('');
// // //             onClose();
// // //         } catch (error) {
// // //             console.error('Error submitting feedback:', error);
// // //             message.error('Failed to submit feedback. Please try again.');
// // //         }
// // //     };

// // //     const columns = [
// // //         {
// // //             title: 'Name',
// // //             dataIndex: 'name',
// // //             key: 'name',
// // //         },
// // //         {
// // //             title: 'Total Amount',
// // //             dataIndex: 'totalAmount',
// // //             key: 'totalAmount',
// // //             render: (text) => `PKR ${text.toFixed(2)}`,
// // //         },
// // //         {
// // //             title: 'Total Items',
// // //             dataIndex: 'totalItems',
// // //             key: 'totalItems',
// // //         },
// // //         {
// // //             title: 'Status',
// // //             dataIndex: 'status',
// // //             key: 'status',
// // //             render: (text) => text || 'Pending',
// // //         },
// // //         {
// // //             title: 'Actions',
// // //             key: 'actions',
// // //             render: (_, order) => (
// // //                 <Button
// // //                     type="primary"
// // //                     style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// // //                     onClick={() => showDrawer(order)}>
// // //                     View Detail
// // //                 </Button>
// // //             ),
// // //         },
// // //     ];

// // //     return (
// // //         <div className="customers-orders">
// // //             <Title level={1}>Customers Orders</Title>
// // //             <Row gutter={[16, 16]}>
// // //                 <Col span={24}>
// // //                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
// // //                         <Table
// // //                             columns={columns}
// // //                             dataSource={orders}
// // //                             pagination={false}
// // //                             rowKey={(record) => record.name}
// // //                             size="middle"
// // //                             style={{ whiteSpace: 'nowrap' }}
// // //                         />
// // //                     </div>
// // //                 </Col>
// // //             </Row>

// // //             <Drawer
// // //                 title="Order Details"
// // //                 placement="right"
// // //                 onClose={onClose}
// // //                 visible={visible}
// // //                 width="35%"
// // //                 bodyStyle={{ padding: '20px' }}
// // //             >
// // //                 {selectedOrder && (
// // //                     <div className="order-details">
// // //                         <Title level={3}>Items in your order:</Title>
// // //                         <List
// // //                             itemLayout="horizontal"
// // //                             dataSource={selectedOrder.items}
// // //                             renderItem={(item) => (
// // //                                 <List.Item>
// // //                                     <List.Item.Meta
// // //                                         avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
// // //                                         title={<Text strong>{item.item.title}</Text>}
// // //                                         description={
// // //                                             <div>
// // //                                                 <Text>{item.item.category}</Text>
// // //                                                 <Text style={{ margin: '0 10px' }}>
// // //                                                     Quantity: {item.quantity}
// // //                                                 </Text>
// // //                                                 <Text>PKR {item.item.price.toFixed(2)}</Text>
// // //                                             </div>
// // //                                         }
// // //                                     />
// // //                                 </List.Item>
// // //                             )}
// // //                         />
// // //                         {selectedOrder.status === 'Delivered' && (
// // //                             <div style={{ marginTop: '20px' }}>
// // //                                 <Title level={4}>Leave your feedback:</Title>
// // //                                 <Form onFinish={handleFeedbackSubmit}>
// // //                                     <Form.Item>
// // //                                         <Input.TextArea
// // //                                             rows={4}
// // //                                             value={feedback}
// // //                                             onChange={(e) => setFeedback(e.target.value)}
// // //                                             placeholder="Write your feedback here"
// // //                                         />
// // //                                     </Form.Item>
// // //                                     <Form.Item>
// // //                                         <Button type="primary" htmlType="submit" style={{ backgroundColor: '#6DA5C0' }}>
// // //                                             Submit Feedback
// // //                                         </Button>
// // //                                     </Form.Item>
// // //                                 </Form>
// // //                             </div>
// // //                         )}
// // //                     </div>
// // //                 )}
// // //             </Drawer>
// // //         </div>
// // //     );
// // // };
















// // // CustomersOrders.jsx
// // import React, { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from '../SingleScreen/AuthContext';
// // import { db } from '../../Config/firebaseConfig';
// // import { doc, onSnapshot, setDoc } from 'firebase/firestore';
// // import { getDoc,   } from 'firebase/firestore'; // Import getDoc
// // import { Drawer, Table, Button, Typography, List, Avatar, Row, Col, Form, Input, message } from 'antd';
// // import './CustomersOrders.css';

// // const { Title, Text } = Typography;

// // export const CustomersOrders = ({ setHasOrders }) => {
// //     const { user } = useContext(AuthContext);
// //     const [orders, setOrders] = useState([]);
// //     const [visible, setVisible] = useState(false);
// //     const [selectedOrder, setSelectedOrder] = useState(null);
// //     const [feedback, setFeedback] = useState('');
// //     const [feedbackName, setFeedbackName] = useState(''); // New State for Feedback Name

// //     useEffect(() => {
// //         const fetchOrders = async () => {
// //             if (user) {
// //                 const checkoutRef = doc(db, 'Checkout', user.name);
// //                 onSnapshot(checkoutRef, (docSnapshot) => {
// //                     if (docSnapshot.exists()) {
// //                         const fetchedOrders = docSnapshot.data().checkouts || [];
// //                         setOrders(fetchedOrders);
// //                         setHasOrders(fetchedOrders.length > 0);
// //                     } else {
// //                         setOrders([]);
// //                         setHasOrders(false);
// //                     }
// //                 });
// //             }
// //         };

// //         fetchOrders();
// //     }, [user, setHasOrders]);

// //     const showDrawer = (order) => {
// //         setSelectedOrder(order);
// //         setVisible(true);
// //     };

// //     const onClose = () => {
// //         setVisible(false);
// //         setSelectedOrder(null);
// //         setFeedback(''); // Clear feedback on close
// //         setFeedbackName(''); // Clear feedback name on close
// //     };

// //     // const handleFeedbackSubmit = async () => {
// //     //     if (!feedback || !feedbackName) {
// //     //         message.warning('Please provide both your name and feedback before submitting.');
// //     //         return;
// //     //     }

// //     //     try {
// //     //         const feedbackRef = doc(db, 'Feedback', user.name); // Store feedback under the user's document

// //     //         // Collect the product titles and images for the feedback submission
// //     //         const productDetails = selectedOrder.items.map((item) => ({
// //     //             title: item.item.name,
// //     //             imageUrl: item.item.imageUrl,
// //     //         }));

// //     //         await setDoc(feedbackRef, {
// //     //             name: feedbackName,
// //     //             feedback: feedback,
// //     //             orderID: selectedOrder.timestamp,
// //     //             products: productDetails, // Store product names and images
// //     //             timestamp: new Date(),
// //     //         });

// //     //         message.success('Feedback submitted successfully!');
// //     //         setFeedback('');
// //     //         setFeedbackName('');
// //     //         onClose();
// //     //     } catch (error) {
// //     //         console.error('Error submitting feedback:', error);
// //     //         message.error('Failed to submit feedback. Please try again.');
// //     //     }
// //     // };

// //     // const handleFeedbackSubmit = async () => {
// //     //     if (!feedback || !feedbackName) {
// //     //         message.warning('Please provide both your name and feedback before submitting.');
// //     //         return;
// //     //     }
    
// //     //     try {
// //     //         const feedbackRef = doc(db, 'Feedback', user.name);
    
// //     //         // Get existing feedbacks (if any)
// //     //         const feedbackSnapshot = await onSnapshot(feedbackRef);
// //     //         let existingFeedback = feedbackSnapshot.exists() ? feedbackSnapshot.data().feedbacks || [] : [];
    
// //     //         // Append the new feedback
// //     //         const newFeedback = {
// //     //             name: feedbackName,
// //     //             feedback: feedback,
// //     //             orderNumber: selectedOrder.orderNumber, // Use order number instead of timestamp
// //     //             products: selectedOrder.items.map((item) => ({
// //     //                 title: item.item.name,
// //     //                 imageUrl: item.item.imageUrl,
// //     //             })),
// //     //             timestamp: new Date(),
// //     //         };
    
// //     //         existingFeedback.push(newFeedback);
    
// //     //         // Update the feedback document with the new feedback array
// //     //         await setDoc(feedbackRef, { feedbacks: existingFeedback });
    
// //     //         message.success('Feedback submitted successfully!');
// //     //         setFeedback('');
// //     //         setFeedbackName('');
// //     //         onClose();
// //     //     } catch (error) {
// //     //         console.error('Error submitting feedback:', error);
// //     //         message.error('Failed to submit feedback. Please try again.');
// //     //     }
// //     // };
    
// //     const handleFeedbackSubmit = async (feedbackId, feedbackData) => {
// //         try {
// //             const feedbackRef = firestore.collection('feedbacks').doc(feedbackId);
// //             const feedbackSnapshot = await feedbackRef.get();
    
// //             if (feedbackSnapshot && feedbackSnapshot.exists) {
// //                 // Update existing feedback
// //                 await feedbackRef.update(feedbackData);
// //                 console.log('Feedback updated successfully.');
// //             } else {
// //                 // Document does not exist; create it
// //                 await feedbackRef.set(feedbackData);
// //                 console.log('Feedback created successfully.');
// //             }
// //         } catch (error) {
// //             console.error('Error submitting feedback:', error);
// //             message.error('Failed to submit feedback. Please try again.');

// //         }
// //     };
    

// //     const columns = [
// //         {
// //             title: 'Name',
// //             dataIndex: 'name',
// //             key: 'name',
// //         },
// //         {
// //             title: 'Total Amount',
// //             dataIndex: 'totalAmount',
// //             key: 'totalAmount',
// //             render: (text) => `PKR ${text.toFixed(2)}`,
// //         },
// //         {
// //             title: 'Total Items',
// //             dataIndex: 'totalItems',
// //             key: 'totalItems',
// //         },
// //         {
// //             title: 'Status',
// //             dataIndex: 'status',
// //             key: 'status',
// //             render: (text) => text || 'Pending',
// //         },
// //         {
// //             title: 'Actions',
// //             key: 'actions',
// //             render: (_, order) => (
// //                 <Button
// //                     type="primary"
// //                     style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// //                     onClick={() => showDrawer(order)}
// //                 >
// //                     View Detail
// //                 </Button>
// //             ),
// //         },
// //     ];

// //     return (
// //         <div className="customers-orders">
// //             <Title level={1}>Customers Orders</Title>
// //             <Row gutter={[16, 16]}>
// //                 <Col span={24}>
// //                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
// //                         <Table
// //                             columns={columns}
// //                             dataSource={orders}
// //                             pagination={false}
// //                             rowKey={(record) => record.name}
// //                             size="middle"
// //                             style={{ whiteSpace: 'nowrap' }}
// //                         />
// //                     </div>
// //                 </Col>
// //             </Row>

// //             <Drawer
// //                 // title={`Order Details - Order #${selectedOrder.orderNumber}`}
// //                 title="Order Details"
// //                 placement="right"
// //                 onClose={onClose}
// //                 visible={visible}
// //                 width="35%"
// //                 bodyStyle={{ padding: '20px' }}
// //             >
// //                 {selectedOrder && (
// //                     <div className="order-details">
// //                         <Title level={3}>Items in your order:</Title>
// //                         <List
// //                             itemLayout="horizontal"
// //                             dataSource={selectedOrder.items}
// //                             renderItem={(item) => (
// //                                 <List.Item>
// //                                     <List.Item.Meta
// //                                         avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
// //                                         title={<Text strong>{item.item.name}</Text>}
// //                                         description={
// //                                             <div>
// //                                                 <Text>{item.item.category}</Text>
// //                                                 <Text style={{ margin: '0 10px' }}>
// //                                                     Quantity: {item.quantity}
// //                                                 </Text>
// //                                                 <Text>PKR {item.item.price.toFixed(2)}</Text>
// //                                             </div>
// //                                         }
// //                                     />
// //                                 </List.Item>
// //                             )}
// //                         />
// //                         {selectedOrder.status === 'Delivered' && (
// //                             <div style={{ marginTop: '20px' }}>
// //                                 <Title level={4}>Leave your feedback:</Title>
// //                                 <Form onFinish={handleFeedbackSubmit}>
// //                                     <Form.Item>
// //                                         <Input
// //                                             value={feedbackName}
// //                                             onChange={(e) => setFeedbackName(e.target.value)}
// //                                             placeholder="Enter your name"
// //                                             required
// //                                         />
// //                                     </Form.Item>
// //                                     <Form.Item>
// //                                         <Input.TextArea
// //                                             rows={4}
// //                                             value={feedback}
// //                                             onChange={(e) => setFeedback(e.target.value)}
// //                                             placeholder="Write your feedback here"
// //                                             required
// //                                         />
// //                                     </Form.Item>
// //                                     <Form.Item>
// //                                         <Button
// //                                             type="primary"
// //                                             htmlType="submit"
// //                                             style={{ backgroundColor: '#6DA5C0' }}
// //                                         >
// //                                             Submit Feedback
// //                                         </Button>
// //                                     </Form.Item>
// //                                 </Form>
// //                             </div>
// //                         )}
// //                     </div>
// //                 )}
// //             </Drawer>
// //         </div>
// //     );
// // };


























// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../SingleScreen/AuthContext';
// import { db } from '../../Config/firebaseConfig';
// import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore'; // Import necessary Firestore methods
// import { Drawer, Table, Button, Typography, List, Avatar, Row, Col, Form, Input, message } from 'antd';
// import './CustomersOrders.css';

// const { Title, Text } = Typography;

// export const CustomersOrders = ({ setHasOrders }) => {
//     const { user } = useContext(AuthContext);
//     const [orders, setOrders] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [feedback, setFeedback] = useState('');
//     const [feedbackName, setFeedbackName] = useState('');

//     useEffect(() => {
//         const fetchOrders = async () => {
//             if (user) {
//                 const checkoutRef = doc(db, 'Checkout', user.name);
//                 onSnapshot(checkoutRef, (docSnapshot) => {
//                     if (docSnapshot.exists()) {
//                         const fetchedOrders = docSnapshot.data().checkouts || [];
//                         setOrders(fetchedOrders);
//                         setHasOrders(fetchedOrders.length > 0);
//                     } else {
//                         setOrders([]);
//                         setHasOrders(false);
//                     }
//                 });
//             }
//         };

//         fetchOrders();
//     }, [user, setHasOrders]);

//     const showDrawer = (order) => {
//         setSelectedOrder(order);
//         setVisible(true);
//     };

//     const onClose = () => {
//         setVisible(false);
//         setSelectedOrder(null);
//         setFeedback('');
//         setFeedbackName('');
//     };

//     const handleFeedbackSubmit = async () => {
//         if (!feedback || !feedbackName) {
//             message.warning('Please provide both your name and feedback before submitting.');
//             return;
//         }

//         try {
//             const feedbackRef = doc(db, 'Feedback', user.name); // Reference to the feedback document
//             const feedbackSnapshot = await getDoc(feedbackRef); // Get the document snapshot

//             // Prepare the new feedback entry
//             const newFeedback = {
//                 name: feedbackName,
//                 feedback: feedback,
//                 orderID: selectedOrder.timestamp,
//                 products: selectedOrder.items.map((item) => ({
//                     title: item.item.name,
//                     imageUrl: item.item.imageUrl,
//                 })),
//                 timestamp: new Date(),
//             };

//             // Check if the feedback document exists
//             if (feedbackSnapshot.exists()) {
//                 // If it exists, update the existing feedbacks
//                 const existingFeedbacks = feedbackSnapshot.data().feedbacks || [];
//                 existingFeedbacks.push(newFeedback);
//                 await setDoc(feedbackRef, { feedbacks: existingFeedbacks });
//             } else {
//                 // If it doesn't exist, create a new document with the feedback
//                 await setDoc(feedbackRef, { feedbacks: [newFeedback] });
//             }

//             message.success('Feedback submitted successfully!');
//             setFeedback('');
//             setFeedbackName('');
//             onClose();
//         } catch (error) {
//             console.error('Error submitting feedback:', error);
//             message.error('Failed to submit feedback. Please try again.');
//         }
//     };

//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Total Amount',
//             dataIndex: 'totalAmount',
//             key: 'totalAmount',
//             render: (text) => `PKR ${text.toFixed(2)}`,
//         },
//         {
//             title: 'Total Items',
//             dataIndex: 'totalItems',
//             key: 'totalItems',
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//             render: (text) => text || 'Pending',
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_, order) => (
//                 <Button
//                     type="primary"
//                     style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
//                     onClick={() => showDrawer(order)}
//                 >
//                     View Detail
//                 </Button>
//             ),
//         },
//     ];

//     return (
//         <div className="customers-orders">
//             <Title level={1}>Customers Orders</Title>
//             <Row gutter={[16, 16]}>
//                 <Col span={24}>
//                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
//                         <Table
//                             columns={columns}
//                             dataSource={orders}
//                             pagination={false}
//                             rowKey={(record) => record.name}
//                             size="middle"
//                             style={{ whiteSpace: 'nowrap' }}
//                         />
//                     </div>
//                 </Col>
//             </Row>

//             <Drawer
//                 title="Order Details"
//                 placement="right"
//                 onClose={onClose}
//                 visible={visible}
//                 width="35%"
//                 bodyStyle={{ padding: '20px' }}
//             >
//                 {selectedOrder && (
//                     <div className="order-details">
//                         <Title level={3}>Items in your order:</Title>
//                         <List
//                             itemLayout="horizontal"
//                             dataSource={selectedOrder.items}
//                             renderItem={(item) => (
//                                 <List.Item>
//                                     <List.Item.Meta
//                                         avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
//                                         title={<Text strong>{item.item.name}</Text>}
//                                         description={
//                                             <div>
//                                                 <Text>{item.item.category}</Text>
//                                                 <Text style={{ margin: '0 10px' }}>
//                                                     Quantity: {item.quantity}
//                                                 </Text>
//                                                 <Text>PKR {item.item.price.toFixed(2)}</Text>
//                                             </div>
//                                         }
//                                     />
//                                 </List.Item>
//                             )}
//                         />
//                         {selectedOrder.status === 'Delivered' && (
//                             <div style={{ marginTop: '20px' }}>
//                                 <Title level={4}>Leave your feedback:</Title>
//                                 <Form onFinish={handleFeedbackSubmit}>
//                                     <Form.Item>
//                                         <Input
//                                             value={feedbackName}
//                                             onChange={(e) => setFeedbackName(e.target.value)}
//                                             placeholder="Enter your name"
//                                             required
//                                         />
//                                     </Form.Item>
//                                     <Form.Item>
//                                         <Input.TextArea
//                                             rows={4}
//                                             value={feedback}
//                                             onChange={(e) => setFeedback(e.target.value)}
//                                             placeholder="Write your feedback here"
//                                             required
//                                         />
//                                     </Form.Item>
//                                     <Form.Item>
//                                         <Button
//                                             type="primary"
//                                             htmlType="submit"
//                                             style={{ backgroundColor: '#6DA5C0' }}
//                                         >
//                                             Submit Feedback
//                                         </Button>
//                                     </Form.Item>
//                                 </Form>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </Drawer>
//         </div>
//     );
// };































import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../SingleScreen/AuthContext';
import { db } from '../../Config/firebaseConfig';
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { Drawer, Table, Button, Typography, List, Avatar, Row, Col, Form, Input, message } from 'antd';
import './CustomersOrders.css';

const { Title, Text } = Typography;

export const CustomersOrders = ({ setHasOrders }) => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [feedbackName, setFeedbackName] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                const checkoutRef = doc(db, 'Checkout', user.name);
                onSnapshot(checkoutRef, (docSnapshot) => {
                    if (docSnapshot.exists()) {
                        const fetchedOrders = docSnapshot.data().checkouts || [];
                        setOrders(fetchedOrders);
                        setHasOrders(fetchedOrders.length > 0);
                    } else {
                        setOrders([]);
                        setHasOrders(false);
                    }
                });
            }
        };

        fetchOrders();
    }, [user, setHasOrders]);

    const showDrawer = (order) => {
        setSelectedOrder(order);
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        setSelectedOrder(null);
        setFeedback('');
        setFeedbackName('');
    };

    // Function to generate a random order ID
    const generateOrderId = () => {
        const randomNum = Math.floor(Math.random() * 1000); // Random number up to 1,000,000
        return `ORD-${randomNum}-Today Date ${Date.now()}`; // Unique order ID format
    };

    const handleFeedbackSubmit = async () => {
        // Validate input
        if (!feedback || !feedbackName) {
            message.warning('Please provide both your name and feedback before submitting.');
            return;
        }

        try {
            const feedbackRef = doc(db, 'Feedback', user.name); // Reference to the feedback document
            const feedbackSnapshot = await getDoc(feedbackRef); // Get the document snapshot

            // Generate a new random order ID
            const orderId = generateOrderId();

            // Prepare the new feedback entry
            const newFeedback = {
                name: feedbackName || '', // Ensure it is an empty string if undefined
                feedback: feedback || '', // Ensure it is an empty string if undefined
                orderID: orderId, // Set the new random order ID
                products: selectedOrder.items.map((item) => ({
                    title: item.item.name,
                    imageUrl: item.item.imageUrl,
                })),
                timestamp: new Date(),
            };

            // Log the feedback data for debugging
            console.log('Submitting feedback:', newFeedback);

            // Check if the feedback document exists
            if (feedbackSnapshot.exists()) {
                // If it exists, update the existing feedbacks
                const existingFeedbacks = feedbackSnapshot.data().feedbacks || [];
                existingFeedbacks.push(newFeedback);
                await setDoc(feedbackRef, { feedbacks: existingFeedbacks });
            } else {
                // If it doesn't exist, create a new document with the feedback
                await setDoc(feedbackRef, { feedbacks: [newFeedback] });
            }

            message.success('Feedback submitted successfully!');
            setFeedback('');
            setFeedbackName('');
            onClose();
        } catch (error) {
            console.error('Error submitting feedback:', error);
            message.error('Failed to submit feedback. Please try again.');
        }
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (text) => `PKR ${text.toFixed(2)}`,
        },
        {
            title: 'Total Items',
            dataIndex: 'totalItems',
            key: 'totalItems',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => text || 'Pending',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, order) => (
                <Button
                    type="primary"
                    style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
                    onClick={() => showDrawer(order)}
                >
                    View Detail
                </Button>
            ),
        },
    ];

    return (
        <div className="customers-orders">
            <Title level={1}>Customers Orders</Title>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                        <Table
                            columns={columns}
                            dataSource={orders}
                            pagination={false}
                            rowKey={(record) => record.name}
                            size="middle"
                            style={{ whiteSpace: 'nowrap' }}
                        />
                    </div>
                </Col>
            </Row>

            <Drawer
                title="Order Details"
                placement="right"
                onClose={onClose}
                visible={visible}
                width="35%"
                bodyStyle={{ padding: '20px' }}
            >
                {selectedOrder && (
                    <div className="order-details">
                        <Title level={3}>Items in your order:</Title>
                        <List
                            itemLayout="horizontal"
                            dataSource={selectedOrder.items}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
                                        title={<Text strong>{item.item.name}</Text>}
                                        description={
                                            <div>
                                                <Text>{item.item.category}</Text>
                                                <Text style={{ margin: '0 10px' }}>
                                                    Quantity: {item.quantity}
                                                </Text>
                                                <Text>PKR {item.item.price.toFixed(2)}</Text>
                                            </div>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                        {selectedOrder.status === 'Delivered' && (
                            <div style={{ marginTop: '20px' }}>
                                <Title level={4}>Leave your feedback:</Title>
                                <Form onFinish={handleFeedbackSubmit}>
                                    <Form.Item>
                                        <Input
                                            value={feedbackName}
                                            onChange={(e) => setFeedbackName(e.target.value)}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Input.TextArea
                                            rows={4}
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            placeholder="Write your feedback here"
                                            required
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            style={{ backgroundColor: '#6DA5C0' }}
                                        >
                                            Submit Feedback
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        )}
                    </div>
                )}
            </Drawer>
        </div>
    );
};
