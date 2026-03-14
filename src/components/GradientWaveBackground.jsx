import React from 'react';

const GradientWaveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Animated gradient waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"></div>

      {/* Wave animations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.05)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.15)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
            </linearGradient>
          </defs>

          {/* First wave */}
          <path
            d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
            fill="url(#waveGradient1)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 10,5; 0,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          {/* Second wave */}
          <path
            d="M0,60 Q25,40 50,60 T100,60 V100 H0 Z"
            fill="url(#waveGradient2)"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -10,-3; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          {/* Third wave */}
          <path
            d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z"
            fill="url(#waveGradient1)"
            className="animate-pulse"
            style={{ animationDelay: '4s' }}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 5,-2; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-accent/30 rounded-full animate-bounce"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-accent/25 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default GradientWaveBackground;