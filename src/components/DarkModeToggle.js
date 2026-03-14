import React from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <motion.button
    className="fixed top-6 right-6 z-50 p-2 rounded-full glass shadow-lg"
    whileTap={{ scale: 0.9 }}
    onClick={() => setDarkMode(!darkMode)}
    aria-label="Toggle dark/light mode"
  >
    {darkMode ? (
      <span role="img" aria-label="Light Mode">🌞</span>
    ) : (
      <span role="img" aria-label="Dark Mode">🌙</span>
    )}
  </motion.button>
);

export default DarkModeToggle;
