import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-card text-text py-8">
      <div className="container mx-auto px-4 text-center">
        <SocialLinks />
        <p className="mt-4">&copy; {new Date().getFullYear()} Alok Prasad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
