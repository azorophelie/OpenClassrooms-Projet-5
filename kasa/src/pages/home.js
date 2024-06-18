// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';

import Styles from '../SCSS/main.scss';



const Home = () => {
  return (
    <div className={Styles.home}>
      <Banner />
      
    </div>
      
  );
};

export default Home;
