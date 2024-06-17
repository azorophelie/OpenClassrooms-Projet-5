// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Styles from '../SCSS/main.scss';
import Card from '../components/ListingCard';




const Home = () => {
  return (
    <div className={Styles.home}>
      <Header />
      <Banner />
      <Card/>
    </div>
      
  );
};

export default Home;
