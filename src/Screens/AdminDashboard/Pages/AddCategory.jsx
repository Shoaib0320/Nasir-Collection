// // import React, { useState, useEffect } from 'react';
// // import { Table, Button, Modal, Input, Switch } from 'antd';
// // import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// // import { db } from '../../../Config/firebaseConfig';

// // const AddCategory = ({ onCategoryChange }) => {
// //   const [categories, setCategories] = useState([]);
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [editMode, setEditMode] = useState(false);
// //   const [currentCategory, setCurrentCategory] = useState({ id: '', name: '', active: true });
// //   const [categoryName, setCategoryName] = useState('');

// //   useEffect(() => {
// //     fetchCategories();
// //   }, []);

// //   const fetchCategories = async () => {
// //     const querySnapshot = await getDocs(collection(db, 'categories'));
// //     const categoriesArray = querySnapshot.docs.map(doc => ({
// //       id: doc.id,
// //       ...doc.data(),
// //     }));
// //     setCategories(categoriesArray);
// //     onCategoryChange(categoriesArray); // Update dropdown in AddProducts
// //   };

// //   const handleAddCategory = async () => {
// //     if (editMode) {
// //       await updateDoc(doc(db, 'categories', currentCategory.id), {
// //         name: categoryName,
// //         active: currentCategory.active,
// //       });
// //     } else {
// //       await addDoc(collection(db, 'categories'), { name: categoryName, active: true });
// //     }
// //     setCategoryName('');
// //     setModalVisible(false);
// //     setEditMode(false);
// //     fetchCategories();
// //   };

// //   const handleEditCategory = (category) => {
// //     setCurrentCategory(category);
// //     setCategoryName(category.name);
// //     setEditMode(true);
// //     setModalVisible(true);
// //   };

// //   const handleDeleteCategory = async (id) => {
// //     await deleteDoc(doc(db, 'categories', id));
// //     fetchCategories();
// //   };

// //   const toggleActiveStatus = async (category) => {
// //     await updateDoc(doc(db, 'categories', category.id), {
// //       active: !category.active,
// //     });
// //     fetchCategories();
// //   };

// //   return (
// //     <div>
// //       <Button type="primary" style={{backgroundColor:'#6DA5C0',border: 'none'}} onClick={() => setModalVisible(true)}>Add Category</Button>
// //       <Table dataSource={categories} rowKey="id" style={{ marginTop: 16 }}>
// //         <Table.Column title="Category Name" dataIndex="name" />
// //         <Table.Column
// //           title="Active"
// //           dataIndex="active"
// //           render={(text, category) => (
// //             <Switch checked={category.active} onChange={() => toggleActiveStatus(category)} />
// //           )}
// //         />
// //         <Table.Column
// //           title="Action"
// //           render={(text, category) => (
// //             <>
// //               <Button onClick={() => handleEditCategory(category)}>Edit</Button>
// //               <Button danger onClick={() => handleDeleteCategory(category.id)}>Delete</Button>
// //             </>
// //           )}
// //         />
// //       </Table>
// //       <Modal
// //         title={editMode ? 'Edit Category' : 'Add Category'}
// //         visible={modalVisible}
// //         onOk={handleAddCategory}
// //         onCancel={() => setModalVisible(false)}
// //       >
// //         <Input
// //           placeholder="Category Name"
// //           value={categoryName}
// //           onChange={(e) => setCategoryName(e.target.value)}
// //         />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default AddCategory;

// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Input, Switch } from 'antd';
// import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../../Config/firebaseConfig';

// const AddCategory = ({ onCategoryChange }) => {
//   const [categories, setCategories] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [currentCategory, setCurrentCategory] = useState({ id: '', name: '', active: true });
//   const [categoryName, setCategoryName] = useState('');

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     const querySnapshot = await getDocs(collection(db, 'categories'));
//     const categoriesArray = querySnapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setCategories(categoriesArray);
//     onCategoryChange(categoriesArray.filter(category => category.active)); // Update dropdown with only active categories
//   };

//   const handleAddCategory = async () => {
//     if (editMode) {
//       await updateDoc(doc(db, 'categories', currentCategory.id), {
//         name: categoryName,
//         active: currentCategory.active,
//       });
//     } else {
//       await addDoc(collection(db, 'categories'), { name: categoryName, active: true });
//     }
//     setCategoryName('');
//     setModalVisible(false);
//     setEditMode(false);
//     fetchCategories();
//   };

//   const handleEditCategory = (category) => {
//     setCurrentCategory(category);
//     setCategoryName(category.name);
//     setEditMode(true);
//     setModalVisible(true);
//   };

//   const handleDeleteCategory = async (id) => {
//     await deleteDoc(doc(db, 'categories', id));
//     fetchCategories();
//   };

//   const toggleActiveStatus = async (category) => {
//     const updatedActiveStatus = !category.active; // Toggle active status
//     await updateDoc(doc(db, 'categories', category.id), {
//       active: updatedActiveStatus,
//     });
//     fetchCategories();
//   };

//   return (
//     <div>
//       <Button type="primary" style={{ backgroundColor: '#6DA5C0', border: 'none' }} onClick={() => setModalVisible(true)}>Add Category</Button>
//       <Table dataSource={categories} rowKey="id" style={{ marginTop: 16 }}>
//         <Table.Column title="Category Name" dataIndex="name" />
//         <Table.Column
//           title="Active"
//           dataIndex="active"
//           render={(text, category) => (
//             <Switch 
//               style={{backgroundColor: '#6DA5C0',}}
//               checked={category.active}
//               onChange={() => toggleActiveStatus(category)}
//               checkedChildren="Active"
//               unCheckedChildren="Inactive"
//             />
//           )}
//         />
//         <Table.Column
//           title="Action"
//           render={(text, category) => (
//             <>
//               <Button style={{margin:'0px 10px'}} onClick={() => handleEditCategory(category)}>Edit</Button>
//               <Button danger onClick={() => handleDeleteCategory(category.id)}>Delete</Button>
//             </>
//           )}
//         />
//       </Table>
//       <Modal
//         title={editMode ? 'Edit Category' : 'Add Category'}
//         visible={modalVisible}
//         onOk={handleAddCategory}
//         onCancel={() => {
//           setModalVisible(false);
//           setEditMode(false);
//           setCategoryName(''); // Reset category name
//         }}
//       >
//         <Input
//           placeholder="Category Name"
//           value={categoryName}
//           onChange={(e) => setCategoryName(e.target.value)}
//         />
//       </Modal>
//     </div>
//   );
// };

// export default AddCategory;










import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Input, Switch, message } from 'antd';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../Config/firebaseConfig';

const AddCategory = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({ id: '', name: '', active: true });
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'categories'));
      const categoriesArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesArray);
      onCategoryChange(categoriesArray.filter(category => category.active));
    } catch (error) {
      message.error('Failed to fetch categories');
    }
  };

  const handleAddCategory = async () => {
    try {
      if (editMode) {
        await updateDoc(doc(db, 'categories', currentCategory.id), {
          name: categoryName,
          active: currentCategory.active,
        });
      } else {
        await addDoc(collection(db, 'categories'), { name: categoryName, active: true });
      }
      resetForm();
      fetchCategories();
    } catch (error) {
      message.error('Failed to save category');
    }
  };

  const handleEditCategory = (category) => {
    setCurrentCategory(category);
    setCategoryName(category.name);
    setEditMode(true);
    setModalVisible(true);
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteDoc(doc(db, 'categories', id));
      fetchCategories();
    } catch (error) {
      message.error('Failed to delete category');
    }
  };

  const toggleActiveStatus = async (category) => {
    try {
      const updatedActiveStatus = !category.active;
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === category.id ? { ...cat, active: updatedActiveStatus } : cat
        )
      ); // Optimistically update UI
      await updateDoc(doc(db, 'categories', category.id), {
        active: updatedActiveStatus,
      });
      fetchCategories(); // Refresh data to ensure consistency
    } catch (error) {
      message.error('Failed to update status');
    }
  };

  const resetForm = () => {
    setCategoryName('');
    setEditMode(false);
    setModalVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ backgroundColor: '#6DA5C0', border: 'none' }}
        onClick={() => setModalVisible(true)}
      >
        Add Category
      </Button>
      <Table dataSource={categories} rowKey="id" style={{ marginTop: 16 }}>
        <Table.Column title="Category Name" dataIndex="name" />
        <Table.Column
          title="Active"
          dataIndex="active"
          render={(text, category) => (
            <Switch
              style={{ backgroundColor: '#6DA5C0' }}
              checked={category.active}
              onChange={() => toggleActiveStatus(category)}
              checkedChildren="Active"
              unCheckedChildren="Inactive"
            />
          )}
        />
        <Table.Column
          title="Action"
          render={(text, category) => (
            <>
              <Button style={{ margin: '0px 10px' }} onClick={() => handleEditCategory(category)}>
                Edit
              </Button>
              <Button danger onClick={() => handleDeleteCategory(category.id)}>
                Delete
              </Button>
            </>
          )}
        />
      </Table>
      <Modal
        title={editMode ? 'Edit Category' : 'Add Category'}
        visible={modalVisible}
        onOk={handleAddCategory}
        onCancel={resetForm}
      >
        <Input
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default AddCategory;
