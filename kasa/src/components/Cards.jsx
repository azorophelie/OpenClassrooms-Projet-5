import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slider';

function Card({ logement }) {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${logement.id}`);
    setIsSliderVisible(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={logement.cover} alt="Logement" className='card-image'/>
      {isSliderVisible && <Slideshow images={logement.images} />}
      <h2>{logement.title}</h2>
    </div>
  );
}

export default Card;
