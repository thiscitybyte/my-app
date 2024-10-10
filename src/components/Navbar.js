// src/components/Navbar.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../components/Navbar.css';  
import logo from '../logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Placeholder"
            className="navbar-img" />
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/photography">Photography</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;