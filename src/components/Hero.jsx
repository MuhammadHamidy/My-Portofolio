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
          Hi, I'm Mu'ammal Hamidy — Computer Science student of Pertamina University with strong interest in Front End development and UI/UX design.
          Experienced as an operating system lab assistant and working on web development projects with expertise in UI/UX design,
          Flutter, and React JS. Proactive, fast learner, and skilled in teamwork and communication. Passionate about developing
          skills and contributing to the success of the company.
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