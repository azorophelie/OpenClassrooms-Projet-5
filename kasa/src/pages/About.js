import React from 'react';
import image from '../images/Banner_a_propos.png';

import Styles from '../SCSS/main.scss';


const About = () => (
  <div className={Styles.about}>
  <div className="container" id="image-container">
      <img src={image} alt="banner" className="banner" id="banner" />
  <div className="container">
        <img src="/path/to/banner.jpg" alt="banner" className="banner" id="banner" />
        
      </div>

     
    </div>
    
   
  </div>
);

export default About;
