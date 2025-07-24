import React from 'react';
import cppIcon from '../assets/c++.png';
import javaIcon from '../assets/java.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import phpIcon from '../assets/php.png';
import laravelIcon from '../assets/laravel.png';
import bootstrapIcon from '../assets/bootstrap.png';
import tailwindIcon from '../assets/tailwind.png';
import dartIcon from '../assets/dart.png';
import flutterIcon from '../assets/flutter.png';
import pythonIcon from '../assets/py.png';
import mysqlIcon from '../assets/mysql.png';
import firebaseIcon from '../assets/firebase.png';
import gitIcon from '../assets/git.png';
import figmaIcon from '../assets/figma.png';
import linuxIcon from '../assets/linux.png';
import reactIcon from '../assets/react.svg';

const TechStack = () => {
  const techStack = [
    { name: 'C++', icon: cppIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Dart', icon: dartIcon },
    { name: 'Flutter', icon: flutterIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Firebase', icon: firebaseIcon },
    { name: 'Git & GitHub', icon: gitIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Linux', icon: linuxIcon },
    { name: 'React', icon: reactIcon }
  ];

  // Duplicate the array to create seamless scrolling
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section className="tech-stack">
      <div className="tech-scroll-container">
        {duplicatedTechStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon"> 
                <img src={tech.icon} alt={tech.name} />
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;