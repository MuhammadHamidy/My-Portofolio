// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">M. Mu'ammal Hamidy</div> {/* Nama Anda */}
        <ul className="navbar-menu">
          <li><a href="#hero-section" onClick={() => handleScroll('hero-section')}>Home</a></li>
          <li><a href="#education-section" onClick={() => handleScroll('education-section')}>Education</a></li>
          <li><a href="#experience-section" onClick={() => handleScroll('experience-section')}>Experience</a></li>
          <li><a href="#skills-section" onClick={() => handleScroll('skills-section')}>Skills</a></li>
        </ul>
        <button className="navbar-button" onClick={() => handleScroll('contact-section')}>
          Get in Touch!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;