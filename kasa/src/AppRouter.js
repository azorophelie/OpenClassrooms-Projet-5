// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
import About from './pages/About'; 
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import FicheLogement from './pages/FicheLogement';


const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<FicheLogement />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<ErrorPage />} /> 
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
