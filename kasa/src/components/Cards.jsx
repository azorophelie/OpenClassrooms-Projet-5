import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slider';

function Card({ logement }) {
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const handleClick = () => {
    setIsSliderVisible(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      <Link to={`/property/${logement.id}`} >
        <img src={logement.cover} alt="Logement" className='card-image'/>
        {isSliderVisible && <Slideshow images={logement.images} />}
        <h2>{logement.title}</h2>
      </Link>
    </div>
  );
}

export default Card;
