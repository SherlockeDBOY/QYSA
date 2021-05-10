import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Home from './components/Home';
import FooterScript from './components/Footer-script';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Carousel slides={SliderData}/>
      <Home/>
      <FooterScript/>
    </div>
  );
}

export default App;
