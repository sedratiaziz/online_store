// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Concorde from './pages/articles/Concorde';
import CheapFlights from './pages/articles/CheapFlights';
import LongestFlight from './pages/articles/LongestFlight';


import './assets/fonts/fonts.css';


const AppRouter = () => {
  return (    
    <Router>      
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/concorde" element={<Concorde />} />
        <Route path="/cheap-flights" element={<CheapFlights />} />        
        <Route path="/longest-flight" element={<LongestFlight />} />        
      </Routes>
    </Router>
  );
}

export default AppRouter;
