// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
import About from './pages/About'; 
import ErrorPage from './pages/errorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyDetails from './pages/propertyDetails';
import '../src/SCSS/main.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
