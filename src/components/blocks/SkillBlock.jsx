import React from 'react';
import { skills } from '../../content/data';

const SkillBlock = ({ id }) => {
  const skill = skills.find(s => s.slug === id);
  if (!skill) return <div>Skill not found</div>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 my-4">
      <h4 className="text-lg font-semibold">{skill.name}</h4>
      <p className="text-gray-600 dark:text-gray-300">{skill.category}</p>
      <p className="text-sm text-gray-500">{skill.level}</p>
    </div>
  );
};

export default SkillBlock;