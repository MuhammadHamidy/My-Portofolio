import React from 'react';

const Experience = () => {
  const experiences = [
    { 
      date: 'January 2025 – Present',
      title: 'Secretary',
      company: 'Student Association of Computer Science, Universitas Pertamina',
      description: 'Managed internal documentation, coordinated communications, and supported organizational operations.',
      logo: '📑'
    },
    {
      date: 'January 2025 – July 2025',
      title: 'Mobile App Developer (Team Project)',
      company: 'Mobile Programming Course Project, Universitas Pertamina',
      description: 'Developed Bantuin, an Android app for daily task management using Kotlin and Firebase.',
      logo: '📱',
      projectLink: 'https://github.com/FarisFarhan17/Bantuin_Apk'
    },
    {
      date: 'January 2025 – July 2025',
      title: 'UI/UX Designer (Team Project)',
      company: 'Human-Computer Interaction Course Project, Universitas Pertamina',
      description: 'Designed an educational platform UI/UX using Figma with user flows and hi-fi prototypes.',
      logo: '🎨',
      projectLink: 'https://www.figma.com/design/M4c5YhSJaNV6TLIJ7boX3u/Aplikasi-Bantuin-faris?node-id=9-5'
    },
    {
      date: 'January 2025 – July 2025',
      title: 'Data Visualization Analyst (Team Project)',
      company: 'Data Visualization Course Project, Universitas Pertamina',
      description: 'Built interactive dashboards in Power BI to analyze and present waste management data.',
      logo: '📊',
      projectLink: 'https://drive.google.com/drive/folders/1OhYMeF0QNw7FVfLHKQSWPgvjRllg-5aO?usp=sharing'
    },
    {
      date: 'January 2025 – July 2025',
      title: 'Machine Learning Developer (Team Project)',
      company: 'Machine Learning Course Project, Universitas Pertamina',
      description: 'Built LSTM/GRU models for predicting renewable energy stock prices with time-series data.',
      logo: '🤖',
      projectLink: 'https://github.com/MuhammadHamidy/Project-ML-Saham'
    },
    {
      date: 'September 2024 – December 2024',
      title: 'Web Developer (Team Project)',
      company: 'Web Programming Course Project, Universitas Pertamina',
      description: 'Created a Laravel-based children’s quiz app with authentication and responsive design.',
      logo: '🧩',
      projectLink: 'https://github.com/MuhammadHamidy/TubesPemograman-web'
    },
    {
      date: 'July 2024 – September 2024',
      title: 'UI/UX Designer (Team Project)',
      company: 'Competition Project , Universitas Pertamina',
      description: 'Designed and developed the UI/UX of EventNet, a platform that connects SMEs with nearby events and enables visitors to explore available tenants and pre-order products before the event',
      logo: '💻',
      projectLink: 'https://www.figma.com/design/IMlE0OMQmCPS2S5Wuh5BX4/EventNet?node-id=0-1&t=nUWvVrk7UwqMF8J8-1'
    },
    {
      date: 'January 2024 – July 2024',
      title: 'Teaching Assistant',
      company: 'Operating Systems Lab, Universitas Pertamina',
      description: 'Assisted students with Linux OS labs, focusing on process management and system operations.',
      logo: '💻'
    },
    {
      date: 'September 2023 – September 2024',
      title: 'Head of Sponsorship Division',
      company: 'CITE UP 2024 Event, Universitas Pertamina',
      description: 'Secured sponsorships and built partnerships for a major campus tech event.',
      logo: '🤝'
    },
    {
      date: 'September 2023 – December 2023',
      title: 'Web Game Developer (Team Project)',
      company: 'Linear Algebra Course Project, Universitas Pertamina',
      description: 'Developed an educational game using JavaScript to visualize linear algebra concepts.',
      logo: '🎮',
      projectLink: 'https://muhammadhamidy.github.io/'
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h3 className="experience-title">Experience</h3>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-logo">{exp.logo}</div>
                <div className="experience-details">
                  <div className="experience-meta">
                    <div className="experience-info">
                      <h4>{exp.title}</h4>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-date">{exp.date}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                   {exp.projectLink && (
                    <a
                    href={exp.projectLink}
                    className="experience-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      View Project ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;