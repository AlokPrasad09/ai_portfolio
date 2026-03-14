// THIS FILE IS GENERATED. Do not edit directly.
// Run "npm start" or "npm run build" to regenerate.

export const theme = {
  "primaryColor": "#6366f1",
  "backgroundColor": "#f8fafc",
  "cardStyle": "soft",
  "fontScale": 1.1
};
export const layout = {
  "sections": [
    "hero",
    "about",
    "skills",
    "tech",
    "projects",
    "github",
    "certificates",
    "blog",
    "contact"
  ],
  "enabled": {
    "hero": true,
    "about": true,
    "skills": true,
    "tech": true,
    "projects": true,
    "github": true,
    "certificates": true,
    "blog": true,
    "contact": true
  }
};
export const hero = {
  "name": "Alok Prasad",
  "title": "AI Developer & Product Engineer",
  "tagline": "Crafting intelligent experiences with modern AI, clean UX, and production-ready code.",
  "profile_image": "/images/profile.svg",
  "animation": "particles",
  "githubUsername": "AlokPrasad09",
  "body": "Welcome to the AI Portfolio. Use the CMS to update your hero text, animation, and profile image without changing code."
};
export const projects = [
  {
    "slug": "ncert-ai-assistant",
    "title": "NCERT AI Assistant",
    "description": "An AI-powered application that helps students understand NCERT PDFs.",
    "stack": [
      "React",
      "Python",
      "LLM",
      "Tailwind"
    ],
    "github": "https://github.com/alokprasad/ncert-ai-assistant",
    "demo": "https://ncert-ai-assistant.demo",
    "image": "/images/project-1.svg",
    "body": "A scalable AI helper that parses textbooks and answers questions in real-time."
  },
  {
    "slug": "pdf-ai-tool",
    "title": "PDF AI Tool",
    "description": "An AI system that reads PDF documents and answers questions.",
    "stack": [
      "React",
      "Python",
      "LangChain",
      "Tailwind"
    ],
    "github": "https://github.com/alokprasad/pdf-ai-tool",
    "demo": "https://pdf-ai-tool.demo",
    "image": "/images/project-2.svg",
    "body": "Extracts context from PDF files and provides interactive Q&A."
  }
];
export const skills = [
  {
    "slug": "machine-learning",
    "name": "Machine Learning",
    "category": "AI",
    "level": "Intermediate",
    "body": "Experience with model training, evaluation, and deployment in production."
  },
  {
    "slug": "python",
    "name": "Python",
    "category": "Programming",
    "level": "Advanced",
    "body": "Python is used for building ML pipelines, data processing, and backend services."
  },
  {
    "slug": "react",
    "name": "React",
    "category": "Frontend",
    "level": "Advanced",
    "body": "Building performant UIs with React, hooks, and modern state management."
  }
];
export const certificates = [
  {
    "slug": "ai-foundations",
    "name": "AI Foundations",
    "issuer": "Coursera",
    "year": 2024,
    "image": "/images/certificate-1.svg",
    "body": "Certificate demonstrating foundational AI knowledge."
  },
  {
    "slug": "ml-specialization",
    "name": "Machine Learning Specialization",
    "issuer": "DeepLearning.AI",
    "year": 2025,
    "image": "/images/certificate-2.svg",
    "body": "Advanced machine learning coursework including deep learning and neural networks."
  }
];
export const blog = [
  {
    "slug": "welcome",
    "title": "Welcome to My AI Portfolio",
    "date": "2026-03-14",
    "image": "/images/blog-cover.svg",
    "body": "This blog is powered by Decap CMS and is fully editable through the admin dashboard.\r\n\r\n- Add new posts under **Blog**\r\n- Update the home page content with the **Hero, Projects, Skills,** and **Certificates** sections\r\n- Upload images to **public/images** and use them in your posts"
  }
];
export const pages = {
  "home": {
    "blocks": [
      {
        "type": "text",
        "content": "Welcome to my AI Developer Portfolio"
      },
      {
        "type": "image",
        "src": "/images/profile.png"
      },
      {
        "type": "project",
        "id": "ncert-ai"
      },
      {
        "type": "skill",
        "id": "react"
      },
      {
        "type": "code",
        "content": "console.log('Hello, World!');",
        "language": "javascript"
      },
      {
        "type": "callout",
        "content": "This is a callout block for important information",
        "style": "info"
      }
    ]
  }
};
