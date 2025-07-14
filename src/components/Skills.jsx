// src/components/Skills.jsx
import React from 'react';

const technicalSkills = [
  { title: 'Web Development', skills: ['Laravel', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Mobile App Development', skills: ['Flutter', 'Firebase', 'Android Studio']  },
  { title: 'UI/UX Design', skills: ['Figma', 'Prototyping', 'User Flow']  },
  { title: 'Data Visualization', skills: ['Power BI', 'Data Analysis']  },
  { title: 'Machine Learning', skills: ['LSTM', 'GRU', 'Python']  },
  { title: 'Database', skills: ['Database Design', 'MySQL']  },
  { title: 'Operating Systems', skills: ['Linux', 'Operating Systems']  },
  { title: 'Version Control', skills: ['Git']  },
  { title: 'Management Project', skills: ['Asana', 'Trello']  },
];

const softSkills = [
  'Technical Documentation & Meeting Minutes',
  'Project Management & Team Collaboration',
  'Public Speaking & Presentation',
  'Leadership & Team Coordination',
  'Time Management & Multitasking',
  'Critical Thinking & Problem Solving',
  'Adaptability & Fast Learner'
];

const Skills = () => {
  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div> {/* Menghapus .section-card dari sini karena sudah di App.jsx */}
      <h2>Skills</h2>
      {technicalSkills.map((category, index) => (
        <SkillCategory key={`tech-${index}`} title={category.title} skills={category.skills} />
      ))}
      <SkillCategory title="Soft Skills" skills={softSkills} />
    </div>
  );
};

export default Skills;