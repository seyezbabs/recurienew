import React from 'react';
import '../styles/Statistics.css';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      number: '250+',
      label: 'Projects Completed'
    },
    {
      id: 2,
      number: '15+',
      label: 'Years Experience'
    },
    {
      id: 3,
      number: '50+',
      label: 'Team Members'
    },
    {
      id: 4,
      number: '100%',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <section className="statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;