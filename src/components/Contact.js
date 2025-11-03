import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="tag">Get in Touch</span>
            <h2 className="section-title">Ready to bring your ideas to life?</h2>
            <p className="contact-description">
              Let's discuss how CLE10 can help you transform your vision into reality. 
              Our team is ready to collaborate with you on your next project.
            </p>
            <a href="#contact-form" className="btn btn-primary">Contact our Team →</a>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <p>hello@cle10.com</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>Address</h4>
                <p>123 Innovation Way<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form" id="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;