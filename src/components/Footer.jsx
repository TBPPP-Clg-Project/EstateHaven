import React from 'react';
import './Footer.css';
import { Building2 } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="brand">
            <Building2 size={24} className="text-white" />
            <div className="brand-text">
              <h2>EstateHaven</h2>
              <p>Your dream home awaits</p>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#Header">Home</a></li>
            <li><a href="#Buy">Buy</a></li>
            <li><a href="#Sell">Sell</a></li>
            <li><a href="#Rent">Rent</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#About Us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          &copy; 2023 EstateHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;