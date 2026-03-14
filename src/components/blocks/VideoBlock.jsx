import React from 'react';

const VideoBlock = ({ src }) => {
  return (
    <div className="my-4">
      <video
        controls
        className="max-w-full h-auto rounded-lg shadow-lg"
        preload="metadata"
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBlock;