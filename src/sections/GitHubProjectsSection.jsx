import React, { useState, useEffect } from 'react';
import { hero } from '../content/data';

const GitHubProjectsSection = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!hero.githubUsername) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://api.github.com/users/${hero.githubUsername}/repos?sort=updated&per_page=10`);
        if (!response.ok) throw new Error('Failed to fetch repos');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="text-center py-8">Loading GitHub projects...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!hero.githubUsername) return <div className="text-center py-8">GitHub username not configured</div>;

  return (
    <section id="github-projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">GitHub Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {repo.description || 'No description available'}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjectsSection;