
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/webpage/navbar/Navbar';
import Banner from './components/webpage/Banner/Banner';
import Sidebar from './components/webpage/navbar/sidebar';
import Footer from './components/webpage/Footer/Footer';
import LoginPage from './components/Authentication/LoginPage';
import RegisterPage from './components/Authentication/RegisterPage';
import ForgotPassword from './components/Authentication/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword';
import  Dashboard  from './components/Dashboard/home';
import Adduser from './components/Dashboard/Users/Adduser';
import AllUsers from './components/Dashboard/Users/Allusers'



function App() {
  

  return (
    <Router>
    <Navbar /> {/* Navbar rendered outside the Routes */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* authorization routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element = {<RegisterPage />}/>
      <Route path="/forgot-password" element = {<ForgotPassword />}/>
      <Route path="/reset-password" element = {<ResetPassword />}/>
      <Route path="/dashboard"  element={
              <>
                <Sidebar />
                <Dashboard />
              </>
            }
          />
           <Route path="/allusers"  element={
              <>
                <Sidebar />
                <AllUsers />
              </>
            }
          />
          
          <Route path='/adduser' element ={
            <>
            <Sidebar/>
            <Adduser/>
            </>
          }
        />
       
      {/* <Route path="/dashboard" element = {<Dashboard />}/> */}
       {/* authorization routes */}

      

    </Routes>
    <Footer /> {/* Footer rendered outside the Routes */}
  </Router>
  );
}

function HomePage() {
  return (
    <>
      <Banner />
    
    </>
  );
}

export default App;