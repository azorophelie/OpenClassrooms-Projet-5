// src/pages/cards.jsx
import React from 'react';

function Card({ logement }) {
  return (
    <div className="card">
      <img src={logement.cover} alt="Logement" className='card-image'/>
      <h2>{logement.title}</h2>
    </div>
  );
}

export default Card;