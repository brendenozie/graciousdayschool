import React from 'react';
import './loader.css';

const Loader = ({ style, ...props }) => {
  return (
    <>
    <div className="loader-container" style={style}>
      <div className="loader"></div>      
    </div>
    
    </>
  );
};

export default Loader;
