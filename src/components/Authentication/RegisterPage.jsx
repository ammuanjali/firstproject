
import React, { useState } from 'react';
import axios from 'axios';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const defaultTheme = createTheme();


  export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');
    const [validationError, setValidationError] = useState('');
  
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  
    const handleRegister = async () => {
      setValidationError('');
  
      if (!username || !email || !password) {
        setValidationError('Please fill in all fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        setValidationError('Please enter a valid email address.');
        return;
      }
  
      try {  
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          username,
          email,
          password,
        });
  
       if (response && response.data && response.data.user) {
          setRegistrationMessage('User Registered Successfully');
          setUsername('');
          setEmail('');
          setPassword('');
          console.log('Registration successful:', response.data);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          if(error.response.data.error === 'Email already exists'){
              setValidationError('Email already existed');
          }
          else if(error.response.data.error === 'Username already exists'){
            setValidationError('UserName already existed');
          }
          else {
            setValidationError('Error registering user');
          }
        
        } else if (error.response && error.response.data) {
          setValidationError('Error registering user');
          console.error('Error registering user:', error.response.data);
        } else {
          setValidationError(`Error registering user: ${error.message}`);
          console.error('Error registering user:', error.message);
        }
      }
    };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
          marginBottom: 5,
          padding: 2, // Add padding to create space around the form elements
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
          {registrationMessage && (
            <Typography variant="body2" color="success">
              {registrationMessage}
            </ Typography>
          )}
          {validationError && (
            <Typography variant="body2" color="error">
              {validationError}
            </Typography>
          )}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
            
        
                <TextField
                  autoComplete="given-name"
                  name="username"
                  value={username}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                 
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>

           
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        {/* </Box> */}
      
      </Container>
    </ThemeProvider>
  );
}