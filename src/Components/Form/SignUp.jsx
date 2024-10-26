import React, { useState } from 'react';
import { auth, db } from '../../Config/firebaseConfig'; // Firebase config import (including Firestore)
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with name
      await updateProfile(user, { displayName: name });

      // Save user data in Firestore
      await setDoc(doc(db, 'Users', name), {
        name: name,
        email: email,
        userId: user.uid,
        password: password ,
      });

      alert('User signed up and data saved successfully!');

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setError('');

      // Navigate to login page
      navigate('/login'); 
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Box
        component="form"
        onSubmit={handleSignUp}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          label="Name"
          type="text"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
          {loading ? <CircularProgress size={24} /> : 'Sign Up'}
        </Button>
      </Box>
    </Container>
  );
};
