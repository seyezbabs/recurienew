import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      
      title: 'Strategy',
      description: 'We help businesses identify opportunities and develop actionable plans to achieve their goals.'
    },
    {
      id: 2,
    
      title: 'Human Factors',
      description: 'We apply cognitive science principles to create intuitive and user-friendly experiences.'
    },
    {
      id: 3,
    
      title: 'Design',
      description: 'Our design team creates beautiful, functional interfaces that engage and delight users.'
    },
    {
      id: 4,
      
      title: 'Engineering',
      description: 'We build robust, scalable solutions using cutting-edge technologies and best practices.'
    }
  ];

  return (
    <section className="services" id="expertise">
      <div className="container">
       
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
            
              <h3 className="service-title">{service.title}</h3>
               <a href={`#${service.title.toLowerCase()}`} className="service-link">Learn more →</a>
              <p className="service-description">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;