// src/components/Experience.jsx
import React from 'react';

const experienceData = [
  { 
    year: 'January 2025 - Present', 
    title: 'Secretary', 
    company: 'Student Association of Computer Science, Universitas Pertamina, Jakarta Selatan',
    desc: [
      'Manage internal documentation and meeting minutes',
      'Coordinate communications between departments and members',
      'Support administrative and organizational tasks'
    ],
    projectLink: null 
  },
  { 
    year: 'January 2025 - July 2025', 
    title: 'Mobile App Developer (Team Project)', 
    company: 'Course Project - Mobile Programming, Universitas Pertamina, Jakarta Selatan',
    desc: [
      'Developed Bantuln, an Android-based mobile app designed to assist users with daily task management',
      'Implemented core functionalities using Kotlin and Firebase' 
    ],
    projectLink: 'https://github.com/FarisFarhan17/Bantuin_Apk' 
  },
  { 
    year: 'January 2025 - July 2025', 
    title: 'UI/UX Designer (Team Project)', 
    company: 'Course Project - Human-Computer Interaction, Universitas Pertamina, Jakarta Selatan',
    desc: [
      'Created UI/UX designs and user flows for an educational platform',
      'Designed low- and high-fidelity prototypes using Figma, focusing on user-centered interaction'
    ],
    projectLink: 'https://www.figma.com/design/M4c5YhSJaNV6TLIJ7boX3u/Aplikasi-Bantuin-faris?node-id=9-5&t=5IJoBgUmpUzWSza8-1' // Ganti dengan link aktual Anda
  },
  { 
    year: 'January 2025 - July 2025', 
    title: 'Data Visualization Analyst (Team Project)', 
    company: 'Course Project - Data Visualization, Universitas Pertamina, Jakarta Selatan',
    desc: [
      'Built interactive dashboards using Power BI for waste management insights',
      'Analyzed and visualized waste collection trends and optimized reporting' 
    ],
    projectLink: 'https://drive.google.com/drive/folders/1OhYMeF0QNw7FVfLHKQSWPgvjRllg-5aO?usp=sharing' // Ganti dengan link aktual Anda
  },
  { 
    year: 'January 2025 - July 2025', 
    title: 'Machine Learning Developer (Team Project)', 
    company: 'Course Project - Machine Learning, Universitas Pertamina, Jakarta Selatan',
    desc: [
      'Developed stock price prediction models for renewable energy companies using LSTM and GRU',
      'Preprocessed time-series data and evaluated model performance using MAE'
    ],
    projectLink: 'https://github.com/MuhammadHamidy/Project-ML-Saham' // Ganti dengan link aktual Anda
  },
  { 
    year: 'September 2024 - December 2024', 
    title: 'Web Developer (Team Project)', 
    company: 'Course Project - Web Programming, Universitas Pertamina, Jakarta Selatan', 
    desc: [
      'Created a Laravel-based web quiz app for children, including backend logic and user authentication',
      'Implemented responsive design with Tailwind CSS and Bootstrap' 
    ],
    projectLink: 'https://github.com/MuhammadHamidy/TubesPemograman-web' // Ganti dengan link aktual Anda
  },
  { 
    year: 'January 2024 - July 2024', 
    title: 'Teaching Assistant', 
    company: 'Operating Systems Lab, Universitas Pertamina, Jakarta Selatan', 
    desc: [
      'Assisted students in Linux-based OS lab sessions',
      'Guided debugging, process management, and file system tasks' 
    ],
    projectLink: null
  },
  { 
    year: 'September 2023 - September 2024', 
    title: 'Head of Sponsorship Division', 
    company: 'CITE UP 2024 Event, Universitas Pertamina, Jakarta Selatan', 
    desc: [
      'Secured funding and partnerships for campus technology event',
      'Negotiated sponsorship packages and maintained partner relationships' 
    ],
    projectLink: null
  },
  { 
    year: 'September 2023 - December 2023', 
    title: 'Web Game Developer (Team Project)', 
    company: 'Course Project - Linear Algebra and Its Applications, Universitas Pertamina, Jakarta Selatan',
    desc: [
      'Developed a web-based educational game to visualize linear algebra concepts',
      'Implemented interactive features using JavaScript and matrix libraries'
    ],
    projectLink: 'https://muhammadhamidy.github.io/'
  },
];

const Experience = () => {
  return (
    <div> 
      <h2>Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-icon">✦</span>
            {index < experienceData.length - 1 && (
              <div className="timeline-connector"></div>
            )}
            <div className="timeline-content">
              <p>{item.year}</p>
              <h3>{item.title} | {item.company}</h3>
              {Array.isArray(item.desc) ? (
                <ul>
                  {item.desc.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              ) : (
                <span>{item.desc}</span>
              )}
              {item.projectLink && (
                <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Lihat Proyek →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;