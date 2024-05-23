import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      // Handle case where token is missing
      console.error('Token is missing');
    }
  }, [token]);

  const handleResetPassword = async () => {
    if (!token) {
      // Prevent password reset if token is missing
      console.error('Token is missing');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        password,
        confirmPassword
      });
      console.log(response); // Add this line to check the response object
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error(error.response); // Add this line to check the error response
      if (error.response && error.response.data) {
        setMessage('');
        setError(error.response.data.error);
      } else {
        setMessage('');
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <TextField
        label="New Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleResetPassword}>
        Reset Password
      </Button>
      {message && <Typography variant="body1">{message}</Typography>}
      {error && <Typography variant="body1" color="error">{error}</Typography>}
    </Container>
  );
};

export default ResetPassword;