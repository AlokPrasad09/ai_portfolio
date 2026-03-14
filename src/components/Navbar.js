import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const defaultNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Tech', href: '#tech' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ links = defaultNavLinks }) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="text-2xl font-bold tracking-tight text-gray-900">
            <span className="text-accent">Alok</span> Prasad
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-accent transition-colors"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
