import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { getAllProjects } from '../lib/contentLoader';
import { useTheme } from '../context/ThemeContext';

const ProjectsSection = () => {
  const projects = getAllProjects();
  const { cardClass } = useTheme();

  if (!projects.length) {
    return null;
  }

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className={`bg-card ${cardClass} overflow-hidden`}
            whileHover={{ y: -6, boxShadow: '0 16px 30px rgba(0, 0, 0, 0.12)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text">{project.title}</h3>
              <p className="mb-4 text-text/80 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack?.map(tech => (
                  <span key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-xs text-text/60">No demo link</span>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text/60 hover:text-accent transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
