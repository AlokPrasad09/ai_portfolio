import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/AlokPrasad09' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/alokprasad92' },
  { icon: <FaEnvelope />, href: 'mailto:alokprasad570@gmail.com' },
];

const SocialLinks = () => (
  <div className="flex justify-center gap-6">
    {socialLinks.map((link, index) => (
      <motion.a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text/60 hover:text-accent transition-colors text-3xl"
        whileHover={{ scale: 1.2, y: -2 }}
      >
        {link.icon}
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
