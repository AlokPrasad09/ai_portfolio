import React from 'react';

const TextBlock = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <p>{content}</p>
    </div>
  );
};

export default TextBlock;