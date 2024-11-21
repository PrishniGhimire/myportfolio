// src/components/Projects.jsx
import React from 'react';
import projectsData from '../data/projectsData'; // Import your project data

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card bg-white shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

