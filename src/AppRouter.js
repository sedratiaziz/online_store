// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import ShoppingCart from './pages/ShoppingCart';
import Offers from './pages/Offers';

import Empty from './pages/Empty';

import './assets/fonts/fonts.css';


const AppRouter = () => {
  return (    
    <Router>      
      <Routes>
        <Route index path="/" element={<Home />} />  
        <Route path="/Settings" element={<Settings />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Offers" element={<Offers />} />  
              
        <Route path="/404" element={<Empty />} />              
      </Routes>
    </Router>
  );
}

export default AppRouter;
