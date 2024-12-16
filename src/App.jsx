import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

const App = () => (
  <>
    <GlobalStyles />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Contact />
  </>
);

export default App;
