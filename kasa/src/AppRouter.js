// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/home'; // Make sure filenames match with correct casing
import About from './pages/About'; // Make sure filenames match with correct casing
import NotFound from './pages/NotFound'; // Make sure filenames match with correct casing


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element prop with JSX */}
        <Route path="/about" element={<About />} /> {/* Use element prop with JSX */}
        <Route path="*" element={<NotFound />} /> {/* Use path="*" for NotFound */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
