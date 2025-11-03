import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="tag">About CLE10</span>
            <h2 className="section-title">We're a team of innovators and problem solvers</h2>
            <p className="about-description">
              Founded in 2008, CLE10 has grown from a small design studio to a full-service product development firm. 
              Our multidisciplinary team brings together expertise in strategy, human factors, design, and engineering 
              to create innovative solutions that solve complex problems.
            </p>
            <p className="about-description">
              We partner with forward-thinking companies to bring their ideas to life, from concept to market. 
              Our collaborative approach ensures that every solution we create is not only beautiful but also 
              functional and user-centered.
            </p>
            <a href="#contact" className="btn btn-primary">Work with us →</a>
          </div>
          <div className="about-image">
            <div className="about-image-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;