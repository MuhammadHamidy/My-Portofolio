import React from 'react';
import UnivImage from '../assets/uper.webp'; 
const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-content">
          <h3 className="section-title">A Few Words About My Education</h3>
          <p style={{color: '#E9E3DD', marginBottom: '1rem'}}>
            <strong>Driven by curiosity and innovation —</strong>
          </p>
          <p style={{color: '#E9E3DD', marginBottom: '2rem'}}>
            I'm currently a Computer Science student at Universitas Pertamina, 
            where I’ve been actively learning and working on various real-world tech projects since 2022.
          </p>
          <p style={{color: '#E9E3DD', marginBottom: '2rem'}}>
            I enjoy applying what I’ve learned in practical team projects, from developing mobile apps and building 
            web platforms to designing interfaces and analyzing data. This academic journey has helped me grow not only 
            in technical skills, but also in communication, leadership, and adaptability.
          </p>
          <div className="education-grid">
            <div className="education-column">
              <h4>I've learned about:</h4>
              <ul className="education-list">
                <li>Web Development</li>
                <li>CRUD (Create, Read, Update, Delete)</li>
                <li>Mobile App Development</li>
                <li>Data Structures</li>
                <li>Object-Oriented Programming</li>
                <li>Database Design</li>
                <li>Software Engineering</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div className="education-column">
              <h4>Soft Skills:</h4>
              <p style={{color: '#E9E3DD', marginBottom: '1rem'}}>
                <ul className="education-list">
                <li>Technical Documentation & Meeting Minutes</li>
                <li>Project Management & Team Collaboration</li>
                <li>Public Speaking & Presentation</li>
                <li>Leadership & Team Coordination</li>
                <li>Time Management & Multitasking</li>
                <li>Critical Thinking & Problem Solving</li>
                <li>Adaptability & Fast Learner</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
        
        <div className="education-badge">
          <div className="badge-icon">
            <img src={UnivImage} alt="University Pertamina" />
          </div>
          <p className="badge-text">Universitas Pertamina</p>
        </div>
      </div>
    </section>
  );
};

export default Education;