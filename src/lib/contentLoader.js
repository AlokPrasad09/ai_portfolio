import { theme, layout, about, hero, projects, skills, certificates, blog } from '../content/data';

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

function tryLoadFromLocalStorage(key, fallback) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return fallback;
  }
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn(`Failed to parse localStorage key ${key}:`, e);
    return fallback;
  }
}

export function getLayoutConfig() {
  return tryLoadFromLocalStorage('admin_layout', layout || {});
}

export function getAboutContent() {
  return tryLoadFromLocalStorage('admin_about', about);
}

export function getHeroContent() {
  return tryLoadFromLocalStorage('admin_hero', hero);
}

export function getAllProjects() {
  return tryLoadFromLocalStorage('admin_projects', projects);
}

export function getAllSkills() {
  return tryLoadFromLocalStorage('admin_skills', skills);
}

export function getAllCertificates() {
  return tryLoadFromLocalStorage('admin_certificates', certificates);
}

export function getAllBlogPosts() {
  return tryLoadFromLocalStorage('admin_blog', sortByDate(blog));
}

export function getBlogPostBySlug(slug) {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}
