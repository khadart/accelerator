import React from 'react';

const Card = ({ title, value, className }) => {
  return (
    <div className={`card text-center p-3 ${className}`} >
      <h5 className="card-title">{title}</h5>
      <h3 className="card-text">{value}</h3>
    </div>
  );
};

export default Card;
