import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const techs = [
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'Python',
  'LangChain',
  'OpenAI',
  'Vector DB',
  'GitHub',
  'Vercel',
  'APIs',
  'Docker',
  'Google Cloud',
];

const TechStack = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto" id="tech">
    <h2 className="text-3xl font-bold mb-8 text-center text-text">Tech Stack</h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {techs.map((tech, idx) => (
        <motion.div
          key={tech}
          className="bg-card/70 p-4 rounded-2xl text-center text-sm font-semibold text-text shadow-sm backdrop-blur"
          whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechStack;
