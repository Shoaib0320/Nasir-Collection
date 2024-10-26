// // Login.js
// import React, { useState } from "react";
// import { 
//   Box, TextField, Button, Typography, Container, Avatar, Alert, CircularProgress
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { loginWithEmail } from "../../Config/firebaseConfig";
// import { GoogleButton } from '../Button/GoogleButton/GoogleButton'; // Import the GoogleButton component
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await loginWithEmail(email, password);
//       alert("Login successful!");
      
//       // Redirect to /admin if the email is admin@gmail.com
//       if (email === "admin@gmail.com") {
//         navigate("/admin");
//       } else {
//         // Redirect user to another page (e.g., user dashboard)
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         mt={8}
//       >
//         <Avatar style={{backgroundColor:'#6DA5C0',}} sx={{ m: 1, bgcolor: "primary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} mt={1}>
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
          
//           {error && <Alert severity="error">{error}</Alert>}

//           <Button style={{backgroundColor:'#6DA5C0',}}
//             type="submit" 
//             variant="contained" 
//             color="primary" 
//             fullWidth 
//             disabled={loading}
//             sx={{ mt: 2 }}
//           >
//             {loading ? <CircularProgress size={24} /> : 'Login'}
//           </Button>

//           {/* Google Button */}
//           <Box mt={2}>
//             <GoogleButton />
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };








import React, { useState } from "react";
import { 
  Box, TextField, Button, Typography, Container, Avatar, CircularProgress ,Alert
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginWithEmail } from "../../Config/firebaseConfig";
import { GoogleButton } from '../Button/GoogleButton/GoogleButton'; // Import the GoogleButton component
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      alert("Login successful!");

      // Redirect to /admin if the email is admin@gmail.com
      if (email === "admin@gmail.com") {
        navigate("/admin");
      } else {
        // Redirect user to another page (e.g., user dashboard)
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
        sx={{
          // Responsive styles
          padding: { xs: 2, md: 4 }, // Add padding for responsiveness
          margin: { xs: 4, sm: 0 }, // Default margin for extra-small screens
          '@media (max-width: 400px)': {
            margin: '5rem 0', // Custom margin for screens less than 400px
          },
        }}
      >
        <Avatar style={{ backgroundColor: '#6DA5C0' }} sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" textAlign="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={1}>
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6DA5C0', // Custom border color
                },
                '&:hover fieldset': {
                  borderColor: '#4F8A92', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4F8A92', // Border color when focused
                },
              },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6DA5C0', // Custom border color
                },
                '&:hover fieldset': {
                  borderColor: '#4F8A92', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4F8A92', // Border color when focused
                },
              },
            }}
          />
          
           {error && <Alert severity="error">{error}</Alert>}


          <Button
            style={{ backgroundColor: '#6DA5C0' }}
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>

          {/* Google Button */}
          <Box mt={2}>
            <GoogleButton />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
