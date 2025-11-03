import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>CLE10</h2>
            <p>Designing innovations that shape our future</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CLE10. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;