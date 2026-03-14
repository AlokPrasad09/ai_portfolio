import React from 'react';

const TechGridBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating tech icons */}
      <div className="absolute top-20 left-10 opacity-10 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div className="absolute top-40 right-20 opacity-10 animate-pulse delay-1000">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-10 animate-pulse delay-500">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>
    </div>
  );
};

export default TechGridBackground;