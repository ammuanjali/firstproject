import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError(error.response.data.error);
    }
  };

  return (
    
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleForgotPassword}>
        Send Reset Link
      </Button>
      {message && <Typography variant="body1">{message}</Typography>}
      {error && <Typography variant="body1" color="error">{error}</Typography>}
    </Container>
  );
};

export default ForgotPasswordPage;