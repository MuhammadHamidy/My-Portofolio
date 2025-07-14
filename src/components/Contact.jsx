// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div> {/* Menghapus .section-card dari sini karena sudah di App.jsx */}
      <h2>Contact</h2>
      <div className="contact-list">
        <p className="contact-item">
         <span className="icon">📍</span>L72 Harapan Mulya, Central Jakarta 10640, Indonesia 
        </p>
        <p className="contact-item">
         <span className="icon">✉️</span><a href="mailto:hamidym84@gmail.com">hamidym84@gmail.com</a>
        </p>
        <p className="contact-item">
         <span className="icon">📞</span><a href="tel:+6283808191352">(+62) 83808191352</a> 
        </p>
        <p className="contact-item">
         <span className="icon">🔗</span><a href="https://www.linkedin.com/in/muammalhamidy" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> 
        </p>
        <p className="contact-item">
         <span className="icon">🐙</span><a href="https://github.com/Muhammad Hamidy" target="_blank" rel="noopener noreferrer">GitHub Profile</a> 
        </p>
      </div>
    </div>
  );
};

export default Contact;