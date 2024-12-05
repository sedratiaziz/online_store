// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import ShoppingCart from './pages/ShoppingCart';
import Offers from './pages/Offers';

import Profile from './pages/settings/Profile';
import Orders from './pages/settings/Orders';
import Language from './pages/settings/Language';
import Payment from './pages/settings/Payment';
import Notifications from './pages/settings/Notifications';
import Dashboard from './pages/settings/Dashboard';


import Empty from './pages/Empty';

import './assets/fonts/fonts.css';
import Reciept from './pages/Reciept';
import Delivery from './pages/Delivery';
import SuccesMessage from './pages/settings/SubPages/SuccesMessage';
import ProfileSetting from './pages/settings/SubPages/ProfileSetting';
import Bio from './pages/settings/SubPages/Bio';
import YourName from './pages/settings/SubPages/YourName';
import SuccesMessagePrdct from './pages/settings/SubPages/SuccesMessagePrdct';

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
         
         {/* Sub Settings */}
         <Route path="/Settings/SuccesMessage" element={<SuccesMessage />} />
         <Route path="/Settings/SuccesMessagePrdct" element={<SuccesMessagePrdct />} />
         <Route path="/Settings/ProfileSetting" element={<ProfileSetting />} />
         <Route path="/Settings/Bio" element={<Bio />} />
         <Route path="/Settings/YourName" element={<YourName />} />
         
         <Route path="/Reciept" element={<Reciept />} />
         <Route path="/Delivery" element={<Delivery />} />

        <Route path="/404" element={<Empty />} />              
      </Routes>
    </Router>
  );
}

export default AppRouter;
