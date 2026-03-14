import React from 'react';
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import VideoBlock from './blocks/VideoBlock';
import ProjectBlock from './blocks/ProjectBlock';
import SkillBlock from './blocks/SkillBlock';
import CodeBlock from './blocks/CodeBlock';
import CalloutBlock from './blocks/CalloutBlock';

const PageBuilder = ({ blocks }) => {
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return <TextBlock key={index} content={block.content} />;
      case 'image':
        return <ImageBlock key={index} src={block.src} />;
      case 'video':
        return <VideoBlock key={index} src={block.src} />;
      case 'project':
        return <ProjectBlock key={index} id={block.id} />;
      case 'skill':
        return <SkillBlock key={index} id={block.id} />;
      case 'code':
        return <CodeBlock key={index} content={block.content} language={block.language} />;
      case 'callout':
        return <CalloutBlock key={index} content={block.content} style={block.style} />;
      default:
        return <div key={index}>Unknown block type: {block.type}</div>;
    }
  };

  return (
    <div className="page-builder">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default PageBuilder;