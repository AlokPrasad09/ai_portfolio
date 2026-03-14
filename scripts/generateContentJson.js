const fs = require('fs');
const path = require('path');

const ROOT_CONTENT = path.resolve(__dirname, '..', 'content');
const OUT_CONTENT = path.resolve(__dirname, '..', 'src', 'content');
const OUT_DATA_FILE = path.resolve(OUT_CONTENT, 'data.js');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return { frontmatter: {}, content: raw.trim() };
  }

  const fm = {};
  const lines = match[1].split(/\r?\n/);
  let currentKey = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('- ') && currentKey) {
      const value = line.slice(2).trim();
      if (!Array.isArray(fm[currentKey])) {
        fm[currentKey] = fm[currentKey] ? [fm[currentKey]] : [];
      }
      fm[currentKey].push(parseValue(value));
      continue;
    }

    const [key, ...rest] = line.split(':');
    if (!key) continue;
    const value = rest.join(':').trim();

    currentKey = key.trim();
    fm[currentKey] = parseValue(value);
  }

  const content = raw.slice(match[0].length).trim();
  return { frontmatter: fm, content };
}

function parseValue(value) {
  if (value === undefined || value === null) {
    return '';
  }
  const trimmed = String(value).trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed, 10);
  if (/^\d+\.\d+$/.test(trimmed)) return parseFloat(trimmed);
  return trimmed.replace(/^"|"$/g, '').replace(/^\'|'$/g, '');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function walkMarkdownFiles(srcDir, callback) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    if (entry.isDirectory()) {
      walkMarkdownFiles(srcPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      callback(srcPath);
    }
  }
}

function loadJsonFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Failed to parse JSON file: ${filePath}`);
    return null;
  }
}

function buildData() {
  const data = {
    hero: null,
    projects: [],
    skills: [],
    certificates: [],
    blog: [],
    theme: null,
    layout: null,
    pages: {},
  };

  // Theme (single file)
  const themeFile = path.join(ROOT_CONTENT, 'theme', 'theme.json');
  data.theme = loadJsonFile(themeFile);

  // Layout (single file)
  const layoutFile = path.join(ROOT_CONTENT, 'layout', 'layout.json');
  data.layout = loadJsonFile(layoutFile);

  // Pages (JSON files)
  const pagesDir = path.join(ROOT_CONTENT, 'pages');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const pageName = file.replace('.json', '');
      const filePath = path.join(pagesDir, file);
      data.pages[pageName] = loadJsonFile(filePath);
    }
  }

  // Hero (single file)
  const heroDir = path.join(ROOT_CONTENT, 'hero');
  if (fs.existsSync(heroDir)) {
    const jsonFile = path.join(heroDir, 'hero.json');
    if (fs.existsSync(jsonFile)) {
      data.hero = loadJsonFile(jsonFile);
    } else {
      const files = fs.readdirSync(heroDir).filter(f => f.endsWith('.md'));
      if (files[0]) {
        const raw = fs.readFileSync(path.join(heroDir, files[0]), 'utf-8');
        const { frontmatter, content } = parseFrontmatter(raw);
        data.hero = { ...frontmatter, body: content };
      }
    }
  }

  // Projects, Skills, Certificates, Blog
  const collections = ['projects', 'skills', 'certificates', 'blog'];
  for (const collection of collections) {
    const dir = path.join(ROOT_CONTENT, collection);
    if (!fs.existsSync(dir)) continue;

    walkMarkdownFiles(dir, filePath => {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { frontmatter, content } = parseFrontmatter(raw);
      const slug = path
        .basename(filePath)
        .replace(/\.md$/, '');
      data[collection].push({ slug, ...frontmatter, body: content });
    });
  }

  // Sort blog posts by date
  data.blog.sort((a, b) => {
    const aDate = new Date(a.date || 0).getTime();
    const bDate = new Date(b.date || 0).getTime();
    return bDate - aDate;
  });

  return data;
}

function writeDataFile(data) {
  ensureDir(OUT_CONTENT);

  const fileContent = `// THIS FILE IS GENERATED. Do not edit directly.
// Run "npm start" or "npm run build" to regenerate.

export const theme = ${JSON.stringify(data.theme, null, 2)};
export const layout = ${JSON.stringify(data.layout, null, 2)};
export const hero = ${JSON.stringify(data.hero, null, 2)};
export const projects = ${JSON.stringify(data.projects, null, 2)};
export const skills = ${JSON.stringify(data.skills, null, 2)};
export const certificates = ${JSON.stringify(data.certificates, null, 2)};
export const blog = ${JSON.stringify(data.blog, null, 2)};
export const pages = ${JSON.stringify(data.pages, null, 2)};
`;

  fs.writeFileSync(OUT_DATA_FILE, fileContent, 'utf-8');
}

function run() {
  console.log('Generating content data module from markdown...');
  const data = buildData();
  writeDataFile(data);
  console.log('Done.');
}

run();
