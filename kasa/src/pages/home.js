// src/pages/Home.js
import React from 'react';
import image from '../images/Banner.png';
import Styles from '../SCSS/main.scss';
import logementsData from '../data/logements.json';
import Card from '../components/Cards';




const Home = () => {
  return (
    <div className={Styles.home}>
      <div className="container" id="image-container">
          <img src={image} alt="banner" className="banner" id="banner" />
          <div className="overlay" id="overlay"></div>
          <div className="text" id="image-text">Chez vous, partout et ailleurs</div>
        </div>
        
      <div className="app">
        {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
     
    </div>
      
  );
};

export default Home;
