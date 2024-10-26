// // import React from 'react';
// // import { 
// //   Container, TextField, Button, Typography, Box, createTheme, ThemeProvider 
// // } from '@mui/material';
// // import { purple, grey } from '@mui/material/colors';
// // import "@fontsource/poppins"; // Import Poppins font
// // import "@fontsource/roboto"; // Optional: Default Material UI font

// // // Custom Material UI Theme
// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: purple[500],  // Elegant purple color
// //     },
// //     secondary: {
// //       main: grey[700], // Soft grey for secondary elements
// //     },
// //   },
// //   typography: {
// //     fontFamily: 'Poppins, Roboto, sans-serif', // Custom font family
// //   },
// // });

// // export const Contact = () => {
// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Container 
// //         maxWidth="sm" 
// //         sx={{ 
// //           mt: 5, 
// //           p: 4, 
// //           boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', 
// //           borderRadius: 2, 
// //           backgroundColor: '#fff',
// //         }}
// //       >
// //         <Typography 
// //           variant="h4" 
// //           align="center" 
// //           gutterBottom 
// //           sx={{ color: theme.palette.primary.main }}
// //         >
// //           Contact Us
// //         </Typography>
// //         <Typography 
// //           variant="subtitle1" 
// //           align="center" 
// //           sx={{ mb: 2, color: theme.palette.secondary.main }}
// //         >
// //           We'd love to hear from you!
// //         </Typography>
// //         <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
// //           <TextField 
// //             fullWidth 
// //             label="Name" 
// //             variant="outlined" 
// //             margin="normal" 
// //             required 
// //             sx={{ 
// //               '& .MuiOutlinedInput-root': {
// //                 '& fieldset': { borderColor: grey[300] },
// //                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
// //               },
// //             }}
// //           />
// //           <TextField 
// //             fullWidth 
// //             label="Email" 
// //             type="email" 
// //             variant="outlined" 
// //             margin="normal" 
// //             required 
// //             sx={{ 
// //               '& .MuiOutlinedInput-root': {
// //                 '& fieldset': { borderColor: grey[300] },
// //                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
// //               },
// //             }}
// //           />
// //           <TextField 
// //             fullWidth 
// //             label="Message" 
// //             multiline 
// //             rows={4} 
// //             variant="outlined" 
// //             margin="normal" 
// //             required 
// //             sx={{ 
// //               '& .MuiOutlinedInput-root': {
// //                 '& fieldset': { borderColor: grey[300] },
// //                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
// //               },
// //             }}
// //           />
// //           <Button style={{backgroundColor:'#6DA5C0'}}
// //             variant="contained" 
// //             color="primary" 
// //             fullWidth 
// //             sx={{ 
// //               mt: 2, 
// //               py: 1.5, 
// //               fontWeight: 'bold', 
// //               fontSize: '1rem', 
// //               textTransform: 'none',
// //             }}
// //             type="submit"
// //           >
// //             Submit
// //           </Button>
// //         </Box>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // };






// import React, { useState, useEffect } from 'react';
// import { 
//   Container, TextField, Button, Typography, Box, createTheme, ThemeProvider 
// } from '@mui/material';
// import { purple, grey,lightGreen } from '@mui/material/colors';
// import "@fontsource/poppins"; 
// import "@fontsource/roboto"; 

// import { db } from '../../Config/firebaseConfig'; // Adjust the import path as necessary
// import { doc, setDoc } from 'firebase/firestore'; // Firestore methods
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Auth methods

// // Custom Material UI Theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],  
//     },
//     secondary: {
//       main: grey[700], 
//     },
//   },
//   typography: {
//     fontFamily: 'Poppins, Roboto, sans-serif', 
//   },
// });

// export const Contact = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [userName, setUserName] = useState(''); // Store user name
//   const auth = getAuth(); // Initialize Firebase Authentication

//   // Listen to authentication state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserName(user.displayName); // Set the user name when authenticated
//       } else {
//         setUserName(''); // Clear user name if not logged in
//         alert('User not logged in.');
//       }
//     });

//     // Clean up the listener when the component unmounts
//     return () => unsubscribe();
//   }, [auth]);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form's default behavior

//     try {
//       const user = auth.currentUser; // Get current user

//       if (user) {
//         // Store message under the user's name in Firestore
//         await setDoc(doc(db, 'contacts', user.displayName), {
//           name: user.displayName,
//           email,
//           message,
//         });

//         // Clear form fields after submission
//         setEmail('');
//         setMessage('');
//         alert("Message sent successfully!");
//       } else {
//         alert('User not logged in.');
//       }
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       alert("Error sending message. Please try again.");
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container 
//         maxWidth="sm" 
//         sx={{ 
//           mt: 5, 
//           p: 4, 
//           boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', 
//           borderRadius: 2, 
//           backgroundColor: '#fff',
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           align="center" 
//           gutterBottom 
//           sx={{ color: theme.palette.primary.main }}
//         >
//           Contact Us
//         </Typography>
//         <Typography 
//           variant="subtitle1" 
//           align="center" 
//           sx={{ mb: 2, color: theme.palette.secondary.main }}
//         >
//           We'd love to hear from you!
//         </Typography>
//         <Box 
//           component="form" 
//           noValidate 
//           autoComplete="off" 
//           onSubmit={handleSubmit} 
//           sx={{ mt: 3 }}
//         >
//           <TextField 
//             fullWidth 
//             label="Name" 
//             variant="outlined" 
//             margin="normal" 
//             required 
//             value={userName} // Display user's name
//             disabled // Disable input since it's auto-filled
//             sx={{ 
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: grey[300] },
//                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
//               },
//             }}
//           />
//           <TextField 
//             fullWidth 
//             label="Email" 
//             type="email" 
//             variant="outlined" 
//             margin="normal" 
//             required 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Update email state
//             sx={{ 
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: grey[300] },
//                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
//               },
//             }}
//           />
//           <TextField 
//             fullWidth 
//             label="Message" 
//             multiline 
//             rows={4} 
//             variant="outlined" 
//             margin="normal" 
//             required 
//             value={message}
//             onChange={(e) => setMessage(e.target.value)} // Update message state
//             sx={{ 
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: grey[300] },
//                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
//               },
//             }}
//           />
//           <Button 
//             style={{backgroundColor:'#6DA5C0'}}
//             variant="contained" 
//             color="primary" 
//             fullWidth 
//             sx={{ 
//               mt: 2, 
//               py: 1.5, 
//               fontWeight: 'bold', 
//               fontSize: '1rem', 
//               textTransform: 'none',
//             }}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };


import React, { useState, useEffect } from 'react';
import { 
  Container, TextField, Button, Typography, Box, Snackbar, Alert, createTheme, ThemeProvider 
} from '@mui/material';
import { purple, grey } from '@mui/material/colors';
import "@fontsource/poppins"; 
import "@fontsource/roboto"; 

import { db } from '../../Config/firebaseConfig'; // Adjust the import path as necessary
import { doc, setDoc } from 'firebase/firestore'; // Firestore methods
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Auth methods

// Custom Material UI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],  
    },
    secondary: {
      main: grey[700], 
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif', 
  },
});

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 
  const auth = getAuth(); 

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('');
        showSnackbar('User not logged in.', 'error');
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      showSnackbar('Please fill in all the fields.', 'error');
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'contacts', user.displayName), {
          name: user.displayName,
          email,
          message,
        });
        setEmail('');
        setMessage('');
        showSnackbar('Message sent successfully!', 'success');
      } else {
        showSnackbar('User not logged in.', 'error');
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      showSnackbar('Error sending message. Please try again.', 'error');
    }
  };

  // Show Snackbar with dynamic message and severity
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        maxWidth="sm" 
        sx={{ 
          mt: 5, 
          p: 4, 
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', 
          borderRadius: 2, 
          backgroundColor: '#fff',
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ color: theme.palette.primary.main }}
        >
          Contact Us
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          sx={{ mb: 2, color: theme.palette.secondary.main }}
        >
          We'd love to hear from you!
        </Typography>
        <Box 
          component="form" 
          noValidate 
          autoComplete="off" 
          onSubmit={handleSubmit} 
          sx={{ mt: 3 }}
        >
          <TextField 
            fullWidth 
            label="Name" 
            variant="outlined" 
            margin="normal" 
            required 
            value={userName} 
            disabled 
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: grey[300] },
                '&:hover fieldset': { borderColor: theme.palette.primary.main },
              },
            }}
          />
          <TextField 
            fullWidth 
            label="Email" 
            type="email" 
            variant="outlined" 
            margin="normal" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: grey[300] },
                '&:hover fieldset': { borderColor: theme.palette.primary.main },
              },
            }}
          />
          <TextField 
            fullWidth 
            label="Message" 
            multiline 
            rows={4} 
            variant="outlined" 
            margin="normal" 
            required 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: grey[300] },
                '&:hover fieldset': { borderColor: theme.palette.primary.main },
              },
            }}
          />
          <Button 
            style={{ backgroundColor: '#6DA5C0' }}
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ 
              mt: 2, 
              py: 1.5, 
              fontWeight: 'bold', 
              fontSize: '1rem', 
              textTransform: 'none',
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>

        {/* Snackbar for VIP-styled messages */}
        <Snackbar 
          open={snackbarOpen} 
          autoHideDuration={4000} 
          onClose={handleCloseSnackbar} 
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbarSeverity} 
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};
