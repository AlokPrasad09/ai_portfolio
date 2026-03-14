import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ darkMode }) => (
  <motion.div
    className="fixed inset-0 -z-10 bg-hero-gradient"
    animate={{ opacity: darkMode ? 0.8 : 1 }}
    transition={{ duration: 0.5 }}
    style={{
      background: darkMode
        ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
        : 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
      filter: 'blur(0px)',
    }}
  />
);

export default AnimatedBackground;
