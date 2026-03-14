import React from 'react';

const ImageBlock = ({ src, alt = '' }) => {
  return (
    <div className="my-4">
      <img
        src={src}
        alt={alt}
        className="max-w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  );
};

export default ImageBlock;