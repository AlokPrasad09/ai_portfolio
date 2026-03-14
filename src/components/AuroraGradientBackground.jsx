import React from 'react';

const AuroraGradientBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent"></div>
    </div>
  );
};

export default AuroraGradientBackground;
