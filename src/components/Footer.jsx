import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          {/* Left Side: Brand Name */}
          <h1 className="footer-logo">PrishniGhimire</h1>
        </div>
        {/* Right Side: Footer Links and Info */}
        <div className="footer-links">
          <p>© 2024 All rights reserved.</p>
          <p>Designed with ♥ by Prishni</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
