import React from 'react';
import skillsData from '../data/skillsData'; // Adjust the path if necessary
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container mx-auto px-6">
        <h2 className="skills-title">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-item">
              <img
                src={skill.icon}
                alt={skill.name}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
