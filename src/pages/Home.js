import React from 'react';
import '../App.css'; // Import your CSS styles
// In your React component file, e.g., App.js
import '../assets/fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import useScrollAnimation from '../assets/Hooks/useScrollAnimation'

import Header from '../assets/components/Header';
import Navbar from '../assets/components/Navbar';
import Welcome from '../assets/components/sections/Welcome';
import BePrepared from '../assets/components/sections/BePrepared';
import Acc from '../assets/components/sections/Acc';
import Social from '../assets/components/sections/Social';
import Categ from '../assets/components/sections/Categ';
import Taste from '../assets/components/sections/Taste'


function Home() {
  useScrollAnimation();
  
  return (
    <>
      <Header />
      <Navbar />      
      <Welcome />
      <BePrepared />
      <Acc />
      <Social />
      <Taste />
      <Categ />      
    </>
  );
}

export default Home;
