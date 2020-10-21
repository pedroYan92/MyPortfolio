import React from 'react';
import './app.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Projects from './Components/Works';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='background'>
    <Nav /> 
    <Hero />
    <Projects />
    <About />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
