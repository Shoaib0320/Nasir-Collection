// import React, { useEffect, useState } from 'react'
// import Cards from '../../Components/Card/Card'

// export const Products = () => {

//   const [pro, setPro] = useState([])

//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     // fetch('https://dummyjson.com/products')
//     .then((data)=>{
//       return data.json()
//     })
//     .then((data)=>{
//       setPro(data)
//       console.log(data)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   },[])


//   return (
//     <div>
//        <div className="vip-card-container"> {/* Flexbox container for cards */}
//             {pro.map((item) => {
//                 return <Cards item={item} key={item.id} />; {/* Use the Cards component */}
//             })}
//         </div>
//     </div>
//   )
// }







import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Card/Card';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../../Config/firebaseConfig'; // Import your Firebase config

export const Products = () => {
  const [pro, setPro] = useState([]);

  // Fetch products from Firebase
  const fetchProductsFromFirebase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const firebaseProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPro(firebaseProducts);
      console.log(firebaseProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products from Firebase on component mount
  useEffect(() => {
    fetchProductsFromFirebase();
  }, []);

  return (
    <div>
      <div className="vip-card-container"> {/* Flexbox container for cards */}
        {pro.map((item) => (
          <Cards item={item} key={item.id} /> /* Use Cards component */
        ))}
      </div>
    </div>
  );
};

export default Products;
