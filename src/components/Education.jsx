// src/components/Education.jsx
import React from 'react';

const educationData = [
  { year: 'Active since 2022', degree: 'Bachelor of Computer Science (In Progress)', info: 'Pertamina University, Current GPA: 2.88 (5th Semester)' },
];

const Education = () => {
  return (
    <div> {/* Menghapus .section-card dari sini karena sudah di App.jsx */}
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-icon">✦</span>
            {index < educationData.length - 1 && (
              <div className="timeline-connector"></div>
            )}
            <div className="timeline-content">
              <p>{item.year}</p>
              <h3>{item.degree}</h3>
              <span>{item.info}</span>
              <ul className="education-relevant-courses">
                <li>• Relevant coursework: Web Development, UI/UX Design, Operating Systems, Mobile Development, Project Management, Database Design, Machine Learning</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;