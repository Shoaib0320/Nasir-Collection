// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../SingleScreen/AuthContext';
// import { db } from '../../../Config/firebaseConfig';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { Table, Typography, Row, Col, Avatar, Spin, message } from 'antd';
// import './Feedback.css'; // Import custom CSS for additional styling
// import MainComponent from './DashboardLayout';

// const { Title, Text } = Typography;

// const Feedback = () => {
//     const { user } = useContext(AuthContext); // Get the logged-in user
//     const [feedbacks, setFeedbacks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch all feedbacks from Firestore
//     const fetchAllFeedbacks = async () => {
//         try {
//             const feedbackQuery = query(collection(db, 'Feedback')); // Query the entire Feedback collection
//             onSnapshot(feedbackQuery, (querySnapshot) => {
//                 const allFeedbacks = [];

//                 querySnapshot.forEach((doc) => {
//                     const feedbackData = doc.data().feedbacks || [];
//                     feedbackData.forEach((feedback) => {
//                         allFeedbacks.push({ ...feedback, user: doc.id }); // Add user ID to each feedback
//                     });
//                 });

//                 setFeedbacks(allFeedbacks);
//                 setLoading(false);
//             });
//         } catch (error) {
//             message.error('Failed to load feedback. Please try again.');
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchAllFeedbacks(); // Fetch feedback on component mount
//     }, []);

//     const columns = [
//         {
//             title: 'Customer Name',
//             dataIndex: 'name',
//             key: 'name',
//             render: (text) => <Text strong>{text}</Text>,
//         },
//         {
//             title: 'User ID',
//             dataIndex: 'user',
//             key: 'user',
//             render: (text) => <Text>{text}</Text>, // Show the user who gave the feedback
//         },
//         {
//             title: 'Feedback',
//             dataIndex: 'feedback',
//             key: 'feedback',
//         },
//         {
//             title: 'Order ID',
//             dataIndex: 'orderID',
//             key: 'orderID',
//             render: (orderID) => <Text code>{orderID}</Text>,
//         },
//         {
//             title: 'Date',
//             dataIndex: 'timestamp',
//             key: 'timestamp',
//             render: (timestamp) => (
//                 <Text>{timestamp.toDate().toLocaleDateString()}</Text>
//             ),
//         },
//         {
//             title: 'Feedback Products',
//             dataIndex: 'products',
//             key: 'products',
//             render: (products) => (
//                 <div className="product-list">
//                     {products.map((product) => (
//                         <div key={product.title} className="product-item">
//                             <Avatar
//                                 src={product.imageUrl}
//                                 style={{ width: 40, height: 40, marginRight: 8 }}
//                             />
//                             <Text>{product.title}</Text>
//                         </div>
//                     ))}
//                 </div>
//             ),
//         },
//     ];

//     return (

//         <div className="feedback-container">
//             <MainComponent showMainContent={false} title="Customers Feedback"/> {/* Show only sidebar */}
//             <Title level={1}>Feedback About this Store</Title>
    
//             {loading ? (
//                 <div className="loading-container">
//                     <Spin size="large" />
//                 </div>
//             ) : (
//                 <Row gutter={[16, 16]}>
//                     <Col span={24}>
//                         {/* Wrap the table in a div for horizontal scrolling */}
//                         <div style={{ overflowX: 'auto' }}>
//                             <Table
//                                 columns={columns}
//                                 dataSource={feedbacks}
//                                 rowKey={(record) => record.orderID}
//                                 pagination={{ pageSize: 5 }}
//                                 size="middle"
//                                 bordered
//                                 className="feedback-table"
//                             />
//                         </div>
//                     </Col>
//                 </Row>
//             )}
//         </div>
//     );
    
// };

// export default Feedback;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../SingleScreen/AuthContext';
import { db } from '../../../Config/firebaseConfig';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { Table, Typography, Row, Col, Avatar, Spin, message } from 'antd';
import MainComponent from './DashboardLayout';

const { Title, Text } = Typography;

const Feedback = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all feedbacks from Firestore
    const fetchAllFeedbacks = async () => {
        try {
            const feedbackQuery = query(collection(db, 'Feedback')); // Query the entire Feedback collection
            onSnapshot(feedbackQuery, (querySnapshot) => {
                const allFeedbacks = [];

                querySnapshot.forEach((doc) => {
                    const feedbackData = doc.data().feedbacks || [];
                    feedbackData.forEach((feedback) => {
                        allFeedbacks.push({ ...feedback, user: doc.id }); // Add user ID to each feedback
                    });
                });

                setFeedbacks(allFeedbacks);
                setLoading(false);
            });
        } catch (error) {
            message.error('Failed to load feedback. Please try again.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllFeedbacks(); // Fetch feedback on component mount
    }, []);

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Text strong>{text}</Text>,
        },
        {
            title: 'User ID',
            dataIndex: 'user',
            key: 'user',
            render: (text) => <Text>{text}</Text>, // Show the user who gave the feedback
        },
        {
            title: 'Feedback',
            dataIndex: 'feedback',
            key: 'feedback',
        },
        {
            title: 'Order ID',
            dataIndex: 'orderID',
            key: 'orderID',
            render: (orderID) => <Text code>{orderID}</Text>,
        },
        {
            title: 'Date',
            dataIndex: 'timestamp',
            key: 'timestamp',
            render: (timestamp) => (
                <Text>{timestamp.toDate().toLocaleDateString()}</Text>
            ),
        },
        {
            title: 'Feedback Products',
            dataIndex: 'products',
            key: 'products',
            render: (products) => (
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.title} className="product-item">
                            <Avatar
                                src={product.imageUrl}
                                style={{ width: 40, height: 40, marginRight: 8 }}
                            />
                            <Text>{product.title}</Text>
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    return (
        <div className="feedback-container">
            <MainComponent showMainContent={false} title="Customers Feedback"/> {/* Show only sidebar */}
            <Title level={1}>Feedback About this Store</Title>

            {loading ? (
                <div className="loading-container">
                    <Spin size="large" />
                </div>
            ) : (
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        {/* Wrap the table in a div for horizontal scrolling */}
                        <div style={{ overflowX: 'auto' }}>
                            <Table
                                columns={columns}
                                dataSource={feedbacks}
                                rowKey={(record) => record.orderID}
                                pagination={{ pageSize: 5 }}
                                size="middle"
                                bordered
                                className="feedback-table"
                                scroll={{ x: 'max-content' }} // Enable horizontal scrolling
                            />
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default Feedback;
