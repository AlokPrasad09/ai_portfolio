import React from 'react';
import { motion } from 'framer-motion';
import { getAllSkills } from '../lib/contentLoader';

const SkillsSection = () => {
  const skills = getAllSkills();

  if (!skills.length) {
    return null;
  }

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="bg-card p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="mb-3 text-sm font-semibold text-accent">{skill.category}</div>
            <h3 className="text-lg font-semibold text-text">{skill.name}</h3>
            {skill.level ? (
              <p className="mt-2 text-sm text-text/70">Level: {skill.level}</p>
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
