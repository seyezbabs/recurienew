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
            CLE10 is a leading product development firm in North America that merges Strategy, Human Factors, Design, and Engineering to bring innovative solutions to life.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Explore Projects →</a>
            <a href="#about" className="btn btn-outline">Discover CLE10</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;