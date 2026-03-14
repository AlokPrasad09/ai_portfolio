import React, { useState, useEffect } from 'react';
import {
  getHeroContent,
  getAboutContent,
  getLayoutConfig,
  getAllSkills,
  getAllProjects,
  getAllBlogPosts,
} from '../lib/contentLoader';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [heroData, setHeroData] = useState(getHeroContent());
  const [aboutData, setAboutData] = useState(getAboutContent());
  const [layoutData, setLayoutData] = useState(getLayoutConfig());
  const [skillsData, setSkillsData] = useState(getAllSkills());
  const [projectsData, setProjectsData] = useState(getAllProjects());
  const [blogData, setBlogData] = useState(getAllBlogPosts());
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedHero = localStorage.getItem('admin_hero');
    const savedAbout = localStorage.getItem('admin_about');
    const savedLayout = localStorage.getItem('admin_layout');
    const savedSkills = localStorage.getItem('admin_skills');
    const savedProjects = localStorage.getItem('admin_projects');
    const savedBlog = localStorage.getItem('admin_blog');

    if (savedHero) {
      setHeroData(JSON.parse(savedHero));
    }
    if (savedAbout) {
      setAboutData(JSON.parse(savedAbout));
    }
    if (savedLayout) {
      setLayoutData(JSON.parse(savedLayout));
    }
    if (savedSkills) {
      setSkillsData(JSON.parse(savedSkills));
    }
    if (savedProjects) {
      setProjectsData(JSON.parse(savedProjects));
    }
    if (savedBlog) {
      setBlogData(JSON.parse(savedBlog));
    }
  }, []);

  // Mark as having unsaved changes when data changes
  useEffect(() => {
    setHasUnsavedChanges(true);
  }, [heroData, aboutData, layoutData]);

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
  ];

  const handleSave = () => {
    try {
      localStorage.setItem('admin_hero', JSON.stringify(heroData));
      localStorage.setItem('admin_about', JSON.stringify(aboutData));
      localStorage.setItem('admin_layout', JSON.stringify(layoutData));
      localStorage.setItem('admin_skills', JSON.stringify(skillsData));
      localStorage.setItem('admin_projects', JSON.stringify(projectsData));
      localStorage.setItem('admin_blog', JSON.stringify(blogData));
      setHasUnsavedChanges(false);
      alert('Changes saved successfully! Refresh the main site to see updates.');
    } catch (error) {
      console.error('Failed to save:', error);
      alert('Failed to save changes. Please try again.');
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all changes? This will reload the original content.')) {
      localStorage.removeItem('admin_hero');
      localStorage.removeItem('admin_about');
      localStorage.removeItem('admin_layout');
      localStorage.removeItem('admin_skills');
      localStorage.removeItem('admin_projects');
      localStorage.removeItem('admin_blog');
      window.location.reload();
    }
  };

  const renderContentEditor = () => {
    switch (activeSection) {
      case 'hero':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Edit Hero Section</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={heroData.name || ''}
                onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={heroData.title || ''}
                onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tagline</label>
              <textarea
                value={heroData.tagline || ''}
                onChange={(e) => setHeroData({ ...heroData, tagline: e.target.value })}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Edit About Section</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={aboutData?.title || ''}
                onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={aboutData?.description || ''}
                onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Background</label>
              <textarea
                value={aboutData?.background || ''}
                onChange={(e) => setAboutData({ ...aboutData, background: e.target.value })}
                className="w-full p-2 border rounded"
                rows="2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Interests</label>
              <textarea
                value={aboutData?.interests || ''}
                onChange={(e) => setAboutData({ ...aboutData, interests: e.target.value })}
                className="w-full p-2 border rounded"
                rows="2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Experience</label>
              <textarea
                value={aboutData?.experience || ''}
                onChange={(e) => setAboutData({ ...aboutData, experience: e.target.value })}
                className="w-full p-2 border rounded"
                rows="2"
              />
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Edit Skills Section</h2>
            <p className="text-gray-600">Update skills shown on the portfolio. Changes are saved to localStorage and affect the live preview.</p>

            <div className="space-y-3">
              {skillsData?.map((skill, idx) => (
                <div key={idx} className="grid gap-3 md:grid-cols-3 items-end">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      value={skill.name || ''}
                      onChange={(e) => {
                        const next = [...skillsData];
                        next[idx] = { ...next[idx], name: e.target.value };
                        setSkillsData(next);
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input
                      type="text"
                      value={skill.category || ''}
                      onChange={(e) => {
                        const next = [...skillsData];
                        next[idx] = { ...next[idx], category: e.target.value };
                        setSkillsData(next);
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Level</label>
                    <input
                      type="text"
                      value={skill.level || ''}
                      onChange={(e) => {
                        const next = [...skillsData];
                        next[idx] = { ...next[idx], level: e.target.value };
                        setSkillsData(next);
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setSkillsData(skillsData.filter((_, i) => i !== idx));
                    }}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                onClick={() => setSkillsData([...(skillsData || []), { name: '', category: '', level: '' }])}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add skill
              </button>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Edit Projects Section</h2>
            <p className="text-gray-600">Update project cards shown in the portfolio.</p>

            <div className="space-y-3">
              {projectsData?.map((project, idx) => (
                <div key={idx} className="space-y-3 border rounded p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={project.title || ''}
                        onChange={(e) => {
                          const next = [...projectsData];
                          next[idx] = { ...next[idx], title: e.target.value };
                          setProjectsData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Slug</label>
                      <input
                        type="text"
                        value={project.slug || ''}
                        onChange={(e) => {
                          const next = [...projectsData];
                          next[idx] = { ...next[idx], slug: e.target.value };
                          setProjectsData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      value={project.description || ''}
                      onChange={(e) => {
                        const next = [...projectsData];
                        next[idx] = { ...next[idx], description: e.target.value };
                        setProjectsData(next);
                      }}
                      className="w-full p-2 border rounded"
                      rows={3}
                    />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">GitHub Link</label>
                      <input
                        type="text"
                        value={project.github || ''}
                        onChange={(e) => {
                          const next = [...projectsData];
                          next[idx] = { ...next[idx], github: e.target.value };
                          setProjectsData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Demo Link</label>
                      <input
                        type="text"
                        value={project.demo || ''}
                        onChange={(e) => {
                          const next = [...projectsData];
                          next[idx] = { ...next[idx], demo: e.target.value };
                          setProjectsData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Tech Stack (comma separated)</label>
                      <input
                        type="text"
                        value={(project.stack || []).join(', ')}
                        onChange={(e) => {
                          const next = [...projectsData];
                          next[idx] = { ...next[idx], stack: e.target.value.split(',').map(s => s.trim()).filter(Boolean) };
                          setProjectsData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="flex items-end justify-end">
                      <button
                        onClick={() => setProjectsData(projectsData.filter((_, i) => i !== idx))}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Remove project
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() =>
                  setProjectsData([
                    ...(projectsData || []),
                    { slug: '', title: '', description: '', stack: [], github: '', demo: '' },
                  ])
                }
                className="text-sm text-blue-600 hover:underline"
              >
                + Add project
              </button>
            </div>
          </div>
        );
      case 'blog':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Edit Blog Section</h2>
            <p className="text-gray-600">Update blog posts displayed in the portfolio.</p>

            <div className="space-y-3">
              {blogData?.map((post, idx) => (
                <div key={idx} className="space-y-3 border rounded p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={post.title || ''}
                        onChange={(e) => {
                          const next = [...blogData];
                          next[idx] = { ...next[idx], title: e.target.value };
                          setBlogData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Slug</label>
                      <input
                        type="text"
                        value={post.slug || ''}
                        onChange={(e) => {
                          const next = [...blogData];
                          next[idx] = { ...next[idx], slug: e.target.value };
                          setBlogData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Date</label>
                      <input
                        type="date"
                        value={post.date ? post.date.split('T')[0] : ''}
                        onChange={(e) => {
                          const next = [...blogData];
                          next[idx] = { ...next[idx], date: e.target.value };
                          setBlogData(next);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="flex items-end justify-end">
                      <button
                        onClick={() => setBlogData(blogData.filter((_, i) => i !== idx))}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Remove post
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Content</label>
                    <textarea
                      value={post.body || ''}
                      onChange={(e) => {
                        const next = [...blogData];
                        next[idx] = { ...next[idx], body: e.target.value };
                        setBlogData(next);
                      }}
                      className="w-full p-2 border rounded"
                      rows={4}
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() =>
                  setBlogData([
                    ...(blogData || []),
                    { slug: '', title: '', date: '', body: '' },
                  ])
                }
                className="text-sm text-blue-600 hover:underline"
              >
                + Add post
              </button>
            </div>
          </div>
        );
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-6 py-3 hover:bg-gray-100 ${
                activeSection === section.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {hasUnsavedChanges && (
              <div className="mb-4 rounded border border-yellow-300 bg-yellow-50 p-3 text-sm text-yellow-800">
                You have unsaved changes. Click "Save Changes" to persist.
              </div>
            )}
            {renderContentEditor()}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleSave}
                disabled={!hasUnsavedChanges}
                className={`px-4 py-2 rounded text-white ${
                  hasUnsavedChanges ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
                }`}
              >
                Save Changes
              </button>
              <button
                onClick={handleReset}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Reset
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;