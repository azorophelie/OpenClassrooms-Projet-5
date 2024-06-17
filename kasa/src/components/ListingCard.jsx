import React from 'react';
import properties from '../data/logements.json';

const Card = ({ title, image }) => {
  return (
    <div className="card-container">
      {properties.map((property, index) => (
        <Card key={index} title={property.title} image={property.image} />
      ))}
    </div>
  );
};



export default Card;