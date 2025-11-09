import React, { useState } from 'react';
import '../styles/Navbar.css';
import '../assets/recurielogo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
       <img src={require('../assets/recurielogo.svg').default} alt="Recurie-Logo" className="navbar-logo" />
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
        <img src={require('../assets/hamburger-svgrepo-com.svg').default} alt="hamburger" className="button-general" />
        </button>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button className="close-menu-btn" onClick={toggleMenu}>
             <img src={require('../assets/close-svgrepo-com.svg').default} alt="closing" className="button-general" />
          </button>
           {/*<div className={'nav-item-mobile'}>
             <a href="/MachineLearning" className="newlink">Machine Learning</a>
           </div> */}
          <div className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </div>
          
          <div className="nav-item dropdown">
            <a href="#expertise" className="nav-link">Expertise </a>
          </div>
          
          <div className="nav-item dropdown">
            <a href="#about" className="nav-link">About Us </a>
          </div>
          
          <div className="nav-item dropdown">
            <a href="#insights" className="nav-link">Insights </a>
          </div>
          
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;