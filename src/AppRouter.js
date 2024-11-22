// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import ShoppingCart from './pages/ShoppingCart';
import Offers from './pages/Offers';

import Profile from './pages/settings/Profile';
import Orders from './pages/settings/Profile';
import Language from './pages/settings/Language';
import Payment from './pages/settings/Profile';
import Notifications from './pages/settings/Profile';
import Dashboard from './pages/settings/Profile';


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
         
         {/* Navigating variuos settings */}
         <Route path="/Settings/Profile" element={<Profile />} />
         <Route path="/Settings/Orders" element={<Orders />} />
         <Route path="/Settings/Language" element={<Language />} />
         <Route path="/Settings/Payment" element={<Payment />} />
         <Route path="/Settings/Notifications" element={<Notifications />} />
         <Route path="/Settings/Dashboard" element={<Dashboard />} />

        <Route path="/404" element={<Empty />} />              
      </Routes>
    </Router>
  );
}

export default AppRouter;
