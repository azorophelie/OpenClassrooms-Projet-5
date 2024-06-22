// src/pages/Home.js
import React from 'react';
import HomeBanner from '../components/HomeBanner';
import Styles from '../SCSS/main.scss';
import logementsData from '../data/logements.json';
import Card from '../components/Cards';





const Home = () => {
  return (
    <div className={Styles.home}>
      <HomeBanner/>
        
      <div className="app">
        {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
        
      </div>
     
    </div>
      
  );
};

export default Home;
