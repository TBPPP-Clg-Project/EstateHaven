import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import Middle from './components/Middle';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import Buy from './components/BuyRent';
import AboutUs from './components/About';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Header />
            <Middle />
            <Project />
            <About />
            <Footer />
          </div>
        } />
        <Route path="/buy" element={<div><Navbar /> <Buy /></div>} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;