import React from 'react';
import image from '../images/Banner_a_propos.png';

const Banner  = () => {
    return (

        <div className="container" id="image-container">
        <img src={image} alt="banner" className="banner" id="banner" />
    <div className="container">
          <img src="/path/to/banner.jpg" alt="banner" className="banner" id="banner" />
          <div className="overlay" id="overlay"></div>
          
        </div>
  
       
      </div>
        );
    };


        export default Banner;