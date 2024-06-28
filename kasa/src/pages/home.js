// src/pages/Home.js
import React from 'react';
import home_Banner from '../images/Banner.png';
import Banner from '../components/Banner';
import Styles from '../SCSS/main.scss';
import logementsData from '../data/logements.json';
import Card from '../components/Cards';


const Home = () => {
  return (
    <div className={Styles.home}>
     <Banner 
    image={home_Banner} text="Chez vous, partout et ailleurs" alt="Paysage avec des rochers et une plage"
    />
        
      <div className="app">
        {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
        
      </div>
     
    </div>
      
  );
};

export default Home;
