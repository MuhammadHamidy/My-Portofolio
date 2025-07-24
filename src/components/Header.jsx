import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">Hi, I'm M. Mu'ammal Hamidy</h1>
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;