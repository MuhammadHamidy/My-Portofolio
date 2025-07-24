import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <SpaceBackground />
      <Header />
      <Hero />
      <TechStack />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;