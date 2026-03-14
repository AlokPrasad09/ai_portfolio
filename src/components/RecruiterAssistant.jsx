import React, { useState } from 'react';
import { hero, projects, skills } from '../content/data';

const RecruiterAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const summarizeProfile = () => {
    return `${hero.name} is a ${hero.title} with expertise in ${skills.map(s => s.name).join(', ')}. ${hero.tagline}`;
  };

  const listSkills = () => {
    return skills.map(skill => `${skill.name} (${skill.category}) - ${skill.level}`).join('\n');
  };

  const explainProjects = () => {
    return projects.map(project => `${project.title}: ${project.description}`).join('\n\n');
  };

  const generateOverview = () => {
    return `Developer Overview:
Name: ${hero.name}
Title: ${hero.title}
Skills: ${skills.slice(0, 5).map(s => s.name).join(', ')}
Key Projects: ${projects.slice(0, 3).map(p => p.title).join(', ')}
Experience: ${hero.body}`;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg z-40"
      >
        Recruiter Assistant
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-11/12 max-w-2xl max-h-3/4 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Recruiter Assistant</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Profile Summary</h3>
                  <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded">{summarizeProfile()}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded whitespace-pre-wrap">{listSkills()}</pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Explanations</h3>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded whitespace-pre-wrap">{explainProjects()}</pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Overview</h3>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded whitespace-pre-wrap">{generateOverview()}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruiterAssistant;