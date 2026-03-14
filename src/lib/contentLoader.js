import { theme, layout, hero, projects, skills, certificates, blog } from '../content/data';

function sortByDate(items) {
  return [...items].sort((a, b) => {
    const aDate = new Date(a.date || 0).getTime();
    const bDate = new Date(b.date || 0).getTime();
    return bDate - aDate;
  });
}

export function getThemeConfig() {
  return theme || {};
}

export function getLayoutConfig() {
  return layout || {};
}

export function getHeroContent() {
  return hero;
}

export function getAllProjects() {
  return projects;
}

export function getAllSkills() {
  return skills;
}

export function getAllCertificates() {
  return certificates;
}

export function getAllBlogPosts() {
  return sortByDate(blog);
}

export function getBlogPostBySlug(slug) {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}
