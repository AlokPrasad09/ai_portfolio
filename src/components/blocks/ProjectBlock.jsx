import React from 'react';
import { projects } from '../../content/data';

const ProjectBlock = ({ id }) => {
  const project = projects.find(p => p.slug === id);
  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-4">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack?.map((tech, index) => (
          <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
            {tech.tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBlock;