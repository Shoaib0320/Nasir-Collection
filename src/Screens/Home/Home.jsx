// // import React, { useEffect, useState } from 'react';
// // import { Container, Typography, Button, Box, IconButton } from '@mui/material';
// // import Slider from 'react-slick';
// // import { Link } from 'react-router-dom';
// // import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods
// // import { db } from '../../Config/firebaseConfig'; // Import Firestore instance
// // import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from '@mui/icons-material';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import './sliderStyles.css';

// // export const Home = () => {
// //   const [products, setProducts] = useState([]);

// //   // Fetch product data from Firestore
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const querySnapshot = await getDocs(collection(db, 'products'));
// //         const productList = querySnapshot.docs.map(doc => ({
// //           id: doc.id,
// //           ...doc.data()
// //         }));
// //         setProducts(productList);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);

// //   const PrevArrow = (props) => {
// //     const { onClick } = props;
// //     return (
// //       <IconButton
// //         onClick={onClick}
// //         sx={{
// //           position: 'absolute',
// //           left: '-30px',
// //           top: '40%',
// //           color: 'white',
// //           backgroundColor: '#6DA5C0',
// //           '&:hover': { backgroundColor: '#5b92a8' },
// //         }}
// //       >
// //         <ChevronLeft />
// //       </IconButton>
// //     );
// //   };

// //   const NextArrow = (props) => {
// //     const { onClick } = props;
// //     return (
// //       <IconButton
// //         onClick={onClick}
// //         sx={{
// //           position: 'absolute',
// //           right: '-30px',
// //           top: '40%',
// //           color: 'white',
// //           backgroundColor: '#6DA5C0',
// //           '&:hover': { backgroundColor: '#5b92a8' },
// //         }}
// //       >
// //         <ChevronRight />
// //       </IconButton>
// //     );
// //   };

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     prevArrow: <PrevArrow />,
// //     nextArrow: <NextArrow />,
// //     responsive: [
// //       { breakpoint: 600, settings: { slidesToShow: 1 } },
// //       { breakpoint: 900, settings: { slidesToShow: 2 } },
// //     ],
// //   };

// //   return (
// // <Container 
// //   maxWidth="lg" 
// //   sx={{ mt: { xs: 1, md: 3 } }} // Adjust margin based on screen size
// // >
// //   {/* Hero Section */}
// //   <Box
// //     sx={{
// //       textAlign: 'center',
// //       backgroundImage: 'linear-gradient(135deg, #1f1c2c, #928dab)',
// //       color: 'white',
// //       py: { xs: 3, md: 7 }, // Responsive padding
// //       borderRadius: 3,
// //       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
// //       mx: { xs: 1, md: 0 }, // Margin for small screens to reduce gaps
// //     }}
// //   >
// //     <Typography
// //       variant="h2"
// //       gutterBottom
// //       sx={{
// //         fontWeight: 700,
// //         fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font sizes
// //       }}
// //     >
// //       Welcome to Click Shop Store
// //     </Typography>

// //     <Typography
// //       variant="h5"
// //       gutterBottom
// //       sx={{
// //         fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font sizes
// //       }}
// //     >
// //       Unlock exclusive content and premium features.
// //     </Typography>

// //     <Button
// //       variant="contained"
// //       size="large"
// //       sx={{
// //         mt: 2,
// //         backgroundColor: '#fff',
// //         color: '#6DA5C0',
// //         borderRadius: '30px',
// //         fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive button text
// //         fontWeight: 'bolder',
// //         px: { xs: 2, md: 5 }, // Responsive padding for button
// //         '&:hover': { backgroundColor: '#6DA5C0', color: 'white' },
// //       }}
// //     >
// //       Get Started
// //     </Button>
// //   </Box>

// //   {/* Product Slider */}
// //   <Box sx={{ mt: { xs: 2, md: 5 }, position: 'relative' }}>
// //     <Slider {...settings}>
// //       {products.map((product) => (
// //         <div key={product.id} style={{ padding: '0 15px' }}>
// //           <Box
// //             sx={{
// //               backgroundColor: '#1f1c2c',
// //               color: 'white',
// //               padding: { xs: 2, md: 3 }, // Responsive padding
// //               borderRadius: 2,
// //               marginLeft: { xs: 0, md: 5 }, // Center-align on small screens
// //               textAlign: 'center',
// //               boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
// //               transition: 'transform 0.4s, box-shadow 0.3s',
// //               '&:hover': {
// //                 transform: 'scale(1.05)',
// //                 boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
// //               },
// //             }}
// //           >
// //             <img
// //               src={product.imageUrl}
// //               alt={product.title}
// //               style={{
// //                 width: '100%',
// //                 height: '200px',
// //                 borderRadius: '8px',
// //                 objectFit: 'cover', // Maintain image aspect ratio
// //               }}
// //             />
// //             <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
// //               {product.title}
// //             </Typography>
// //             <Typography variant="h6" sx={{ fontWeight: 500, mt: 2 }}>
// //               {product.category}
// //             </Typography>
// //             <Typography variant="body2" color="grey.300">
// //               PKR {product.price}
// //             </Typography>
// //             <Button
// //               component={Link}
// //               to="/products"
// //               sx={{
// //                 mt: 2,
// //                 borderColor: '#6DA5C0',
// //                 color: '#6DA5C0',
// //                 borderRadius: '30px',
// //                 textTransform: 'none',
// //                 padding: { xs: '10px 16px', md: '12px 24px' }, // Responsive button padding
// //                 fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
// //                 fontWeight: 600,
// //                 backgroundColor: 'white',
// //                 width: { xs: '100%', sm: 'fit-content' },
// //                 maxWidth: '300px',
// //                 boxShadow: '0 2px 10px rgba(109, 165, 192, 0.3)',
// //                 transition: 'all 0.3s ease-in-out',
// //                 '&:hover': {
// //                   backgroundColor: '#6DA5C0',
// //                   color: 'white',
// //                   boxShadow: '0 4px 20px rgba(109, 165, 192, 0.5)',
// //                 },
// //               }}
// //             >
// //               See More Products
// //             </Button>
// //           </Box>
// //         </div>
// //       ))}
// //     </Slider>
// //   </Box>

// //   {/* Footer Section */}
// //   <Box
// //     sx={{
// //       textAlign: 'center',
// //       backgroundImage: 'linear-gradient(135deg, #2b5876, #4e4376)',
// //       color: 'white',
// //       py: { xs: 3, md: 4 }, // Responsive padding
// //       mt: { xs: 3, md: 5 }, // Adjust margin for smaller screens
// //       borderRadius: 2,
// //       boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
// //       position: 'relative',
// //       overflow: 'hidden',
// //       mx: { xs: 1, md: 0 }, // Adjust margin for smaller screens
// //     }}
// //   >
// //     {/* Decorative Overlay */}
// //     <Box
// //       sx={{
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         width: '100%',
// //         height: '100%',
// //         background: 'rgba(0, 0, 0, 0.2)', // Semi-transparent overlay
// //         borderRadius: 2,
// //         zIndex: 1,
// //       }}
// //     />

// //     <Typography
// //       variant="h4"
// //       sx={{
// //         fontWeight: 'bold',
// //         letterSpacing: '1px',
// //         position: 'relative',
// //         zIndex: 2,
// //       }}
// //     >
// //       Stay Connected
// //     </Typography>

// //     {/* Social Media Icons */}
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         gap: 3,
// //         mb: 2,
// //         position: 'relative',
// //         zIndex: 2,
// //       }}
// //     >
// //       <Facebook
// //         sx={{
// //           fontSize: 36,
// //           cursor: 'pointer',
// //           '&:hover': { color: '#1877F2' },
// //           transition: 'color 0.3s ease',
// //         }}
// //       />
// //       <Twitter
// //         sx={{
// //           fontSize: 36,
// //           cursor: 'pointer',
// //           '&:hover': { color: '#1DA1F2' },
// //           transition: 'color 0.3s ease',
// //         }}
// //       />
// //       <Instagram
// //         sx={{
// //           fontSize: 36,
// //           cursor: 'pointer',
// //           '&:hover': { color: '#E1306C' },
// //           transition: 'color 0.3s ease',
// //         }}
// //       />
// //     </Box>

// //     <Typography
// //       variant="body2"
// //       sx={{ fontSize: '14px', opacity: 0.8, position: 'relative', zIndex: 2 }}
// //     >
// //       &copy; 2024 VIP Website. All Rights Reserved.
// //     </Typography>
// //     <Typography
// //       variant="body2"
// //       sx={{ fontSize: '12px', opacity: 0.6, position: 'relative', zIndex: 2 }}
// //     >
// //       Elevating Your Shopping Experience with Quality and Service
// //     </Typography>
// //   </Box>
// // </Container>


// //   );
// // };



// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Button, Box, IconButton } from '@mui/material';
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods
// import { db } from '../../Config/firebaseConfig'; // Import Firestore instance
// import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from '@mui/icons-material';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './sliderStyles.css';

// export const Home = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch product data from Firestore
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'products'));
//         const productList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));

//         // Shuffle the product list and select only 4 products
//         const shuffledProducts = productList.sort(() => 0.5 - Math.random()).slice(0, 4);
//         setProducts(shuffledProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <IconButton
//         onClick={onClick}
//         sx={{
//           position: 'absolute',
//           left: '-30px',
//           top: '40%',
//           color: 'white',
//           backgroundColor: '#6DA5C0',
//           '&:hover': { backgroundColor: '#5b92a8' },
//         }}
//       >
//         <ChevronLeft />
//       </IconButton>
//     );
//   };

//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <IconButton
//         onClick={onClick}
//         sx={{
//           position: 'absolute',
//           right: '-30px',
//           top: '40%',
//           color: 'white',
//           backgroundColor: '#6DA5C0',
//           '&:hover': { backgroundColor: '#5b92a8' },
//         }}
//       >
//         <ChevronRight />
//       </IconButton>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//       { breakpoint: 900, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <Container 
//       maxWidth="lg" 
//       sx={{ mt: { xs: 1, md: 3 } }} // Adjust margin based on screen size
//     >
//       {/* Hero Section */}
//       <Box
//         sx={{
//           textAlign: 'center',
//           backgroundImage: 'linear-gradient(135deg, #1f1c2c, #928dab)',
//           color: 'white',
//           py: { xs: 3, md: 7 }, // Responsive padding
//           borderRadius: 3,
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
//           mx: { xs: 1, md: 0 }, // Margin for small screens to reduce gaps
//         }}
//       >
//         <Typography
//           variant="h2"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font sizes
//           }}
//         >
//           Welcome to Click Shop Store
//         </Typography>

//         <Typography
//           variant="h5"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font sizes
//           }}
//         >
//           Unlock exclusive content and premium features.
//         </Typography>

//         <Button
//           variant="contained"
//           size="large"
//           sx={{
//             mt: 2,
//             backgroundColor: '#fff',
//             color: '#6DA5C0',
//             borderRadius: '30px',
//             fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive button text
//             fontWeight: 'bolder',
//             px: { xs: 2, md: 5 }, // Responsive padding for button
//             '&:hover': { backgroundColor: '#6DA5C0', color: 'white' },
//           }}
//         >
//           Get Started
//         </Button>
//       </Box>

//       {/* Product Slider */}
//       <Box sx={{ mt: { xs: 2, md: 5 }, position: 'relative' }}>
//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product.id} style={{ padding: '0 15px' }}>
//               <Box
//                 sx={{
//                   backgroundColor: '#1f1c2c',
//                   color: 'white',
//                   padding: { xs: 2, md: 3 }, // Responsive padding
//                   borderRadius: 2,
//                   marginLeft: { xs: 0, md: 5 }, // Center-align on small screens
//                   textAlign: 'center',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
//                   transition: 'transform 0.4s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
//                   },
//                 }}
//               >
//                 <img
//                   src={product.imageUrl}
//                   alt={product.title}
//                   style={{
//                     width: '100%',
//                     height: '200px',
//                     borderRadius: '8px',
//                     objectFit: 'cover', // Maintain image aspect ratio
//                   }}
//                 />
//                 <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
//                   {product.title}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: 500, mt: 2 }}>
//                   {product.category}
//                 </Typography>
//                 <Typography variant="body2" color="grey.300">
//                   PKR {product.price}
//                 </Typography>
//                 <Button
//                   component={Link}
//                   to="/products"
//                   sx={{
//                     mt: 2,
//                     borderColor: '#6DA5C0',
//                     color: '#6DA5C0',
//                     borderRadius: '30px',
//                     textTransform: 'none',
//                     padding: { xs: '10px 16px', md: '12px 24px' }, // Responsive button padding
//                     fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
//                     fontWeight: 600,
//                     backgroundColor: 'white',
//                     width: { xs: '100%', sm: 'fit-content' },
//                     maxWidth: '300px',
//                     boxShadow: '0 2px 10px rgba(109, 165, 192, 0.3)',
//                     transition: 'all 0.3s ease-in-out',
//                     '&:hover': {
//                       backgroundColor: '#6DA5C0',
//                       color: 'white',
//                       boxShadow: '0 4px 20px rgba(109, 165, 192, 0.5)',
//                     },
//                   }}
//                 >
//                   See More Products
//                 </Button>
//               </Box>
//             </div>
//           ))}
//         </Slider>
//       </Box>

//       {/* Footer Section */}
//       <Box
//         sx={{
//           textAlign: 'center',
//           backgroundImage: 'linear-gradient(135deg, #2b5876, #4e4376)',
//           color: 'white',
//           py: { xs: 3, md: 4 }, // Responsive padding
//           mt: { xs: 3, md: 5 }, // Adjust margin for smaller screens
//           borderRadius: 2,
//           boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
//           position: 'relative',
//           overflow: 'hidden',
//           mx: { xs: 1, md: 0 }, // Adjust margin for smaller screens
//         }}
//       >
//         {/* Decorative Overlay */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: 'rgba(0, 0, 0, 0.2)', // Semi-transparent overlay
//             borderRadius: 2,
//             zIndex: 1,
//           }}
//         />

//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: 'bold',
//             letterSpacing: '1px',
//             zIndex: 2,
//           }}
//         >
//           Stay Connected
//         </Typography>
//         <Box sx={{ mt: 2, zIndex: 2 }}>
//           <IconButton component="a" href="#" sx={{ color: 'white' }}>
//             <Facebook />
//           </IconButton>
//           <IconButton component="a" href="#" sx={{ color: 'white' }}>
//             <Twitter />
//           </IconButton>
//           <IconButton component="a" href="#" sx={{ color: 'white' }}>
//             <Instagram />
//           </IconButton>
//         </Box>
//       </Box>
//     </Container>
//   );
// };






















import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box, IconButton, Grid } from '@mui/material';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods
import { db } from '../../Config/firebaseConfig'; // Import Firestore instance
import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderStyles.css';

export const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Shuffle the product list and select only 4 products
        const shuffledProducts = productList.sort(() => 0.5 - Math.random()).slice(0, 4);
        setProducts(shuffledProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          left: '-30px',
          top: '40%',
          color: 'white',
          backgroundColor: '#6DA5C0',
          '&:hover': { backgroundColor: '#5b92a8' },
        }}
      >
        <ChevronLeft />
      </IconButton>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: '-30px',
          top: '40%',
          color: 'white',
          backgroundColor: '#6DA5C0',
          '&:hover': { backgroundColor: '#5b92a8' },
        }}
      >
        <ChevronRight />
      </IconButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{ mt: { xs: 1, md: 3 } }} // Adjust margin based on screen size
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #1f1c2c, #928dab)',
          color: 'white',
          py: { xs: 3, md: 7 }, // Responsive padding
          borderRadius: 3,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          mx: { xs: 1, md: 0 }, // Margin for small screens to reduce gaps
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font sizes
          }}
        >
          Welcome to Click Shop Store
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font sizes
          }}
        >
          Unlock exclusive content and premium features.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: '#fff',
            color: '#6DA5C0',
            borderRadius: '30px',
            fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive button text
            fontWeight: 'bolder',
            px: { xs: 2, md: 5 }, // Responsive padding for button
            '&:hover': { backgroundColor: '#6DA5C0', color: 'white' },
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* Product Slider */}
      <Box sx={{ mt: { xs: 2, md: 5 }, position: 'relative' }}>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} style={{ padding: '0 15px' }}>
              <Box
                sx={{
                  backgroundColor: '#1f1c2c',
                  color: 'white',
                  padding: { xs: 2, md: 3 }, // Responsive padding
                  borderRadius: 2,
                  marginLeft: { xs: 0, md: 5 }, // Center-align on small screens
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.4s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                  },
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '8px',
                    objectFit: 'cover', // Maintain image aspect ratio
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                  {product.title}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500, mt: 2 }}>
                  {product.category}
                </Typography>
                <Typography variant="body2" color="grey.300">
                  PKR {product.price}
                </Typography>
                <Button
                  component={Link}
                  to="/products"
                  sx={{
                    mt: 2,
                    borderColor: '#6DA5C0',
                    color: '#6DA5C0',
                    borderRadius: '30px',
                    textTransform: 'none',
                    padding: { xs: '10px 16px', md: '12px 24px' }, // Responsive button padding
                    fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
                    fontWeight: 600,
                    backgroundColor: 'white',
                    width: { xs: '100%', sm: 'fit-content' },
                    maxWidth: '300px',
                    boxShadow: '0 2px 10px rgba(109, 165, 192, 0.3)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: '#6DA5C0',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(109, 165, 192, 0.5)',
                    },
                  }}
                >
                  See More Products
                </Button>
              </Box>
            </div>
          ))}
        </Slider>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #2b5876, #4e4376)',
          color: 'white',
          py: { xs: 3, md: 4 }, // Responsive padding
          mt: { xs: 3, md: 5 }, // Adjust margin for smaller screens
          borderRadius: 2,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden',
          mx: { xs: 1, md: 0 }, // Adjust margin for smaller screens
        }}
      >
        {/* Decorative Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.2)', // Semi-transparent overlay
            borderRadius: 2,
            zIndex: 1,
          }}
        />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 2,
            position: 'relative',
            zIndex: 2,
          }}
        >
          Stay Connected
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
              <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>Phone: +92 320 8138038</Typography>
            <Typography>Email: support@clickshopstore.com</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 2, position: 'relative', zIndex: 2 }}>
          © {new Date().getFullYear()} Click Shop Store. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};
