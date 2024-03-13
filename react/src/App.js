// App.js
import React from 'react';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';

import Navbar from './components/NavBar/navbar';
import './App.css';
import About from './components/AboutPage/About';

function App() {
  return (
   <div className='app'>
     <Home/>
    <div>
    <About/>
    </div>
    <div>
      <Navbar/>
    </div>
   </div>
    
  );
}

export default App;
