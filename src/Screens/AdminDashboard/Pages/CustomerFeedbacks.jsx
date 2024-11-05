// import React, { useEffect, useState } from 'react';
// import { Table, Button, Popconfirm, message } from 'antd'; // Import Ant Design components
// import { db } from '../../../Config/firebaseConfig'; // Import your Firebase configuration
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Import deleteDoc and doc from Firestore
// import MainComponent from './DashboardLayout';

// export const CustomerFeedbacks = () => {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         // Reference to the 'Customers Feedback' collection in Firestore
//         const feedbackCollection = collection(db, 'Customers Feedback'); 
//         const feedbackSnapshot = await getDocs(feedbackCollection);

//         // Map through the fetched documents and create an array of feedback objects
//         const feedbacksData = feedbackSnapshot.docs.map(doc => ({
//           id: doc.id, // Unique identifier for each feedback
//           ...doc.data(), // Spread the data from each document
//         }));

//         // Update the state with the fetched feedbacks
//         setFeedbacks(feedbacksData);
//       } catch (error) {
//         console.error('Error fetching feedbacks:', error); // Log any errors
//       }
//     };

//     fetchFeedbacks(); // Call the function to fetch feedbacks
//   }, []);

//   // Function to handle feedback deletion
//   const handleDelete = async (id) => {
//     try {
//       // Delete the feedback document from Firestore
//       await deleteDoc(doc(db, 'Customers Feedback', id));
//       // Filter out the deleted feedback from the state
//       setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
//       message.success('Feedback deleted successfully!'); // Display success message
//     } catch (error) {
//       console.error('Error deleting feedback:', error);
//       message.error('Failed to delete feedback.'); // Display error message
//     }
//   };

//   // Define columns for the Ant Design table
//   const columns = [
//     {
//       title: 'Customer Name',
//       dataIndex: 'userId', // Field name for customer name
//       key: 'userId', // Unique key for the column
//     },
//     {
//       title: 'Customer ID',
//       dataIndex: 'id', // Field name for customer ID (document ID)
//       key: 'id', // Unique key for the column
//     },
//     {
//       title: 'Feedback',
//       dataIndex: 'feedback', // Field name for feedback content
//       key: 'feedback', // Unique key for the column
//     },
//     {
//       title: 'Product',
//       dataIndex: 'productName', // Field name for the product name
//       key: 'productName', // Unique key for the column
//     },
//     {
//       title: 'Timestamp',
//       dataIndex: 'timestamp', // Field name for the timestamp
//       key: 'timestamp', // Unique key for the column
//       render: timestamp => timestamp?.toDate().toLocaleDateString() || 'Invalid Date', // Convert Firestore timestamp to JS date
//     },
//     {
//       title: 'Action', // Column for delete action
//       key: 'action',
//       render: (text, record) => (
//         <Popconfirm
//           title="Are you sure to delete this feedback?"
//           onConfirm={() => handleDelete(record.id)} // Call delete function
//           okText="Yes"
//           cancelText="No"
//         >
//           <Button type="link" style={{ color: 'red' }}>Delete</Button> {/* Delete button */}
//         </Popconfirm>
//       ),
//     },
//   ];

//   return (
//     <div>
//     <MainComponent showMainContent={false} />
//       <h2>Customer Feedbacks</h2>
//       <br />
//       <Table 
//         dataSource={feedbacks} // Pass the fetched feedbacks to the table
//         columns={columns} // Define the table structure
//         rowKey="id" // Use unique id for row keys
//         pagination={{ pageSize: 10 }} // Optional pagination
//         scroll={{ x: true }} // Enable horizontal scrolling for smaller screens
//         bordered // Add borders to the table for better visibility
//       />
//     </div>
//   );
// };




import React, { useEffect, useState } from 'react';
import { Table, Button, Popconfirm, message, Col, Card, Row } from 'antd'; // Import Ant Design components
import { db } from '../../../Config/firebaseConfig'; // Import your Firebase configuration
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Import deleteDoc and doc from Firestore
import MainComponent from './DashboardLayout';

export const CustomerFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  const [mostFeedbackProduct, setMostFeedbackProduct] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        // Reference to the 'Customers Feedback' collection in Firestore
        const feedbackCollection = collection(db, 'Customers Feedback'); 
        const feedbackSnapshot = await getDocs(feedbackCollection);

        // Map through the fetched documents and create an array of feedback objects
        const feedbacksData = feedbackSnapshot.docs.map(doc => ({
          id: doc.id, // Unique identifier for each feedback
          ...doc.data(), // Spread the data from each document
        }));

        // Update the state with the fetched feedbacks
        setFeedbacks(feedbacksData);
        
        // Calculate total feedbacks and most feedback product
        const totalCount = feedbacksData.length;
        setTotalFeedbacks(totalCount);

        const productCount = feedbacksData.reduce((acc, feedback) => {
          acc[feedback.productName] = (acc[feedback.productName] || 0) + 1;
          return acc;
        }, {});

        const mostFeedbackProduct = Object.entries(productCount).reduce((prev, current) => {
          return (current[1] > prev[1]) ? current : prev;
        }, ['', 0]);

        setMostFeedbackProduct(mostFeedbackProduct[0]); // Get the product name with the most feedback
      } catch (error) {
        console.error('Error fetching feedbacks:', error); // Log any errors
      }
    };

    fetchFeedbacks(); // Call the function to fetch feedbacks
  }, []);

  // Function to handle feedback deletion
  const handleDelete = async (id) => {
    try {
      // Delete the feedback document from Firestore
      await deleteDoc(doc(db, 'Customers Feedback', id));
      // Filter out the deleted feedback from the state
      setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
      message.success('Feedback deleted successfully!'); // Display success message
    } catch (error) {
      console.error('Error deleting feedback:', error);
      message.error('Failed to delete feedback.'); // Display error message
    }
  };

  // Define columns for the Ant Design table
  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'userId', // Field name for customer name
      key: 'userId', // Unique key for the column
    },
    {
      title: 'Customer ID',
      dataIndex: 'id', // Field name for customer ID (document ID)
      key: 'id', // Unique key for the column
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback', // Field name for feedback content
      key: 'feedback', // Unique key for the column
    },
    {
      title: 'Product',
      dataIndex: 'productName', // Field name for the product name
      key: 'productName', // Unique key for the column
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp', // Field name for the timestamp
      key: 'timestamp', // Unique key for the column
      render: timestamp => timestamp?.toDate().toLocaleDateString() || 'Invalid Date', // Convert Firestore timestamp to JS date
    },
    {
      title: 'Action', // Column for delete action
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this feedback?"
          onConfirm={() => handleDelete(record.id)} // Call delete function
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" style={{ color: 'red' }}>Delete</Button> {/* Delete button */}
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <MainComponent showMainContent={false} />
      <h2>Customer Feedbacks</h2>
      <br />
      <div>
      <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
          <Col xs={24} sm={8}>
              <Card title="Total Feedbacks" bordered={false}>
                  <h3>Total Feedbacks: {totalFeedbacks}</h3>
              </Card>
          </Col>

          <Col xs={24} sm={8}>
              <Card title="Most Populer Products" bordered={false}>
                  <h3>Most Feedback Product: {mostFeedbackProduct || 'N/A'}</h3>
              </Card>
          </Col>
        </Row>
      </div>
      <Table 
        dataSource={feedbacks} // Pass the fetched feedbacks to the table
        columns={columns} // Define the table structure
        rowKey="id" // Use unique id for row keys
        pagination={{ pageSize: 10 }} // Optional pagination
        scroll={{ x: true }} // Enable horizontal scrolling for smaller screens
        bordered // Add borders to the table for better visibility
      />
    </div>
  );
};
