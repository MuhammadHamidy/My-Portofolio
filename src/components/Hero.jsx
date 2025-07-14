// src/components/Hero.jsx
import React from 'react';
import profilePic from '../assets/foto_profile.jpeg'; // Pastikan path ini benar

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-image-and-info">
          <div className="hero-image-container">
            <img
              src={profilePic}
              alt="M. Mu'ammal Hamidy"
              className="hero-image"
            />
          </div>
        </div>
        
        <div className="hero-text">
          <h1>Hello, I'm M. Mu'ammal Hamidy !</h1>
          <p>
            Computer Science student of Pertamina University with strong interest in Front End development and UI/UX design. Experienced as an operating system lab assistant and working on web development projects with expertise in UI/UX design, Flutter, and React JS. Proactive, fast learner, and skilled in teamwork and communication.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Hero;