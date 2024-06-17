// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO.png';

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar" id="navbar">
        <a href="index.html">
          <img src={logo} alt="Logo" className="logo" id="logo"/>
        </a>
        <ul className="navLinks" id="navLinks">
          <li><Link to="/" className="navLink" id="navLink">Accueil</Link></li>
          <li><Link to="/about" className="navLink" id="navLink">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
