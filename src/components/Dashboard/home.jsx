// Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../assets/css/custom.css';

function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      // Check the token stored in localStorage
      const storedToken = localStorage.getItem('token');
      // console.log('Token stored in localStorage:', storedToken);
  
    // Fetch user profile data
    if (storedToken) {
    const fetchProfile = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/profile', {
          const response = await axios.get('http://localhost:5000/api/profile/profile', {
          headers: {
             Authorization: `Bearer ${localStorage.getItem('token')}`, // Fetch token from local storage
          
          },
          
        });
        setUser(response.data.user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Token is expired or tampered with
          setError('Token is expired or tampered with. Please login again.');
          // Remove the token from localStorage
          localStorage.removeItem('token');
        } else {
          // Other errors
          console.error('Error fetching user profile here:', error.response.data);
          setError('Error fetching user profile. Please try again later.');
        }
      }
    };

    fetchProfile();
  }
  }, []);

  return (
    <div className="homeContainer">
      <h2>Profile Page</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Home;