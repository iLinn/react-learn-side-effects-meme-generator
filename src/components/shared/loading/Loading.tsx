import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;