import React from 'react';

import '../styles/Hero.css';
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content centered-content">
          <h1 className="big-heading">
            Together, we design innovations that shape our future
          </h1>
          <p className="hero-description">
            Recurie is a leading product development firm in North America that merges Strategy, Human Factors, Design, and Engineering to bring innovative solutions to life.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Tell us about your project</a>
            {/* Link button that scrolls to the Machine Learning section */}
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;