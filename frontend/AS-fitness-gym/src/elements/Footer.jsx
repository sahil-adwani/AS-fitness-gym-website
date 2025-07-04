import React from 'react';
import { Link } from 'react-router-dom';
//import './App.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row pt-5">
        <div className="footer-nav col-lg-3 col-sm-6 mb-5">
          <h4 className="mb-4">Get In Touch</h4>
          <p><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</p>
          <p><i className="fa fa-phone-alt me-2"></i>+012 345 67890</p>
          <p><i className="fa fa-envelope me-2"></i>info@example.com</p>
        </div>
        
        <div className="footer-wrap col-lg-3 col-sm-6 mb-5">
          <h4 className="mb-4">Social Links</h4>
          <div className="social-links">
            <Link className="social-link" to="/"><i className="fab fa-twitter"></i></Link>
            <Link className="social-link" to="/"><i className="fab fa-facebook-f"></i></Link>
            <Link className="social-link" to="/"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
        <div className="footer-info col-lg-3 col-sm-6 mb-5">
          <h4 className="mb-4">Opening Hours</h4>
          <h5>Monday - Friday</h5>
          <p>8.00 AM - 8.00 PM</p>
          <h5>Saturday - Sunday</h5>
          <p>2.00 PM - 8.00 PM</p>
        </div>
      </div>
      <div className="container border-top pt-5">
        <p className="m-0 text-center text-white">
          &copy; <Link className="footer-link" to="/">Your Site Name</Link>. All Rights Reserved. Designed by Sahil Adwani
        </p>
      </div>
    </div>
  );
}

export default Footer;
