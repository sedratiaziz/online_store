// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';


import './assets/fonts/fonts.css';


const AppRouter = () => {
  return (    
    <Router>      
      <Routes>
        <Route index path="/" element={<Home />} />        
      </Routes>
    </Router>
  );
}

export default AppRouter;
