import React from 'react';
import image from '../images/Banner.png';

const Banner  = () => {
    return (

    <div className="container" id="image-container">
          <img src={image} alt="banner" className="banner" id="banner" />
          <div className="overlay" id="overlay"></div>
          <div className="text" id="image-text">Chez vous, partout et ailleurs</div>
        </div>
        );
    };


        export default Banner;