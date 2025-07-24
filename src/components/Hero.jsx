import React from 'react';
import profileImage from '../assets/foto_profiles.jpeg'; 
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="hero-title">
          Welcome to My<br />
          Digital Universe
        </h2>
        <p className="hero-subtitle">Exploring the Digital Universe</p>
        <p className="hero-description">
          Hi, I'm Mu'ammal Hamidy — a Computer Science student and aspiring Front-End Developer 
          passionate about exploring user interfaces, web ecosystems, and intelligent systems. This is my mission control. 
          Let's launch into my work.
        </p>
      </div>
      <div className="hero-image">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;