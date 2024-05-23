
import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper" style={{ backgroundColor: "#0cb0c1", marginTop: "20px", position: "absolute", bottom: 0, width: "100%" }}>
      <Container maxWidth="lg" className="text-white">
        <div className="border-t-2 border-gray-300/50 py-6 text-center">
          <Typography variant="body2">
            @copyright 2024 Zentiq 
          </Typography>
        </div>
      </Container>
    </div>
  );
};
export default Footer;