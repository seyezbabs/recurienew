import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      icon: '💻',
      title: 'Responsive Design',
      description: 'Websites that look great on all devices - desktop, tablet, and mobile.'
    },
    {
      id: 2,
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized code for quick loading times and smooth user experience.'
    },
    {
      id: 3,
      icon: '🔍',
      title: 'SEO Friendly',
      description: 'Built with search engines in mind to help your site rank higher.'
    },
    {
      id: 4,
      icon: '🛠️',
      title: 'Easy Maintenance',
      description: 'Clean code structure that makes future updates simple and efficient.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Our Features</h2>
          <p>What makes our websites stand out</p>
        </div>
        
        <div className="features-grid">
          {featuresList.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;