import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AboutMe = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
    <motion.div
      className={`bg-card p-10 ${useTheme().cardClass}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-text">About Me</h2>
          <p className="text-lg text-text/80 leading-relaxed">
            I’m an AI developer who builds intelligent applications that solve real problems and delight users. I enjoy turning research into production and designing products that look polished while being powered by modern AI.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-text">Background</h3>
              <p className="text-text/70">Experience building full-stack applications, machine learning pipelines, and scalable APIs for startups and personal projects.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-text">AI Interests</h3>
              <p className="text-text/70">Natural language understanding, generative AI, reinforcement learning, and creating useful assistant experiences.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-text">Goals</h3>
              <p className="text-text/70">Ship production-ready AI products, contribute to open source, and mentor others in the ML community.</p>
            </div>
          </div>
        </div>

        <div className={`rounded-3xl border border-gray-100 bg-white/60 p-8 ${useTheme().cardClass}`}>
          <h3 className="text-xl font-semibold text-text mb-4">Quick Highlights</h3>
          <ul className="space-y-3 text-text/80">
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
              Built multiple AI-powered applications using OpenAI, LangChain, and vector databases.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
              Designed modern web interfaces using React, Tailwind CSS, and Framer Motion.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
              Passionate about clean code, strong architecture, and user-first experiences.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutMe;
