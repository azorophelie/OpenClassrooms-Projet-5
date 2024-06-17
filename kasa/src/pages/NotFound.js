import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Retour à l'accueil</Link>
  </div>
);

export default NotFound;