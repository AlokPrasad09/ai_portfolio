import React from 'react';

const CodeBlock = ({ content, language }) => {
  return (
    <div className="my-4">
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>
          {content}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;