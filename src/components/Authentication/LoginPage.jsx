import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import axios from 'axios';


const defaultTheme = createTheme();

// Custom component for form input fields
const FormInput = ({ label, type, value, onChange, autoFocus }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    autoFocus={autoFocus}
  />
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      if (response && response.data && response.data.token) {
        console.log('Login successful');
        // Store the token in session storage
        // sessionStorage.setItem('token', response.data.token);
        localStorage.setItem('token', response.data.token);
        console.log('Token stored in localStorage from loginpage:', response.data.token);
        // Redirect the user to the dashboard
        navigate('/dashboard');
      } else {
        console.error('Unexpected response format:', response);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Error logging in');
        console.error('Error logging in:', error.response.data);
      } else {
        setError(error.message || 'Error logging in');
        console.error('Error logging in:', error.message);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           {error && (
              <Typography color="error" variant="subtitle2">
                {error}
              </Typography>
            )}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
          <FormInput
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
             <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              onClick={handleLogin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}