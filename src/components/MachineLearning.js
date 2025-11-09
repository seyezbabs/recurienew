import React from 'react';
import '../styles/machinelearning.css';
import Navbar from './Navbar';

const MachineLearning = () => {
  return (
    // id used as an anchor target so other pages/components can link to this section
    <div id="machine-learning" className="maindiv">
      <Navbar/>
      <span className="machine-learning-text">Machine Learning</span>
    </div>
  );
};

export default MachineLearning;
