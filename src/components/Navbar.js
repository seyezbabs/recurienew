import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">CLE10</a>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars">☰</i>
        </button>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button className="close-menu-btn" onClick={toggleMenu}>
            <i className="fas fa-times">✕</i>
          </button>
          
          <div className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </div>
          
          <div className="nav-item dropdown">
            <a href="#expertise" className="nav-link">Expertise ↓</a>
          </div>
          
          <div className="nav-item dropdown">
            <a href="#about" className="nav-link">About Us ↓</a>
          </div>
          
          <div className="nav-item dropdown">
            <a href="#insights" className="nav-link">Insights ↓</a>
          </div>
          
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary">Contact our Team →</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;