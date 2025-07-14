// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Language from './components/Language';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
// Tidak perlu mengimpor style.css di sini karena sudah di main.jsx

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* Pastikan setiap section memiliki ID untuk navigasi */}
      <section id="hero-section">
        <Hero />
      </section>
      
      <div className="main-content-grid">
        <div className="main-left-column">
          <section id="education-section" className="section-card">
            <Education />
          </section>
          <section id="experience-section" className="section-card">
            <Experience />
          </section>
          <section id="skills-section" className="section-card">
            <Skills />
          </section>
          <section id="hobbies-section" className="section-card">
            <Hobbies />
          </section>
        </div>

        <div className="main-right-column">
          <section id="contact-section" className="section-card">
            <Contact />
          </section>
          <section id="language-section" className="section-card">
            <Language />
          </section>
        </div>
      </div>
      {/* Anda bisa menambahkan Footer di sini jika diperlukan */}
    </div>
  );
}

export default App;