// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/LOGO.png';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="navbar-wrapper">
      <nav className="navbar" id="navbar">
        <a href="index.html">
          <img src={logo} alt="Logo" className="logo" id="logo"/>
        </a>
        <ul className="navLinks">
        <li>
            <NavLink to="/" exact activeClassName="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">À propos</NavLink>
          </li>
          </ul>
      </nav>
    </div>
    </header>
  );
};

export default Header;
