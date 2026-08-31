# AI Developer Portfolio

A clean, modern developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

It includes:
- Light theme with soft gradients and rounded cards
- Responsive navbar with mobile menu
- Animated hero background (particles + aurora)
- Smooth scroll and section transitions
- Project, certificates, skills, and contact sections
- Built to be deployment-ready (Vercel compatible)

## Sections
- Hero
- About
- Skills
- Tech Stack
- Projects
- Certificates
- Contact
- Footer (Social links)

## Getting Started
1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in the browser.

## Build for Production

```bash
npm run build
```

## Content Management (CMS)

This portfolio supports a **Decap CMS** (formerly Netlify CMS) admin panel so you can edit content without touching source code.

### Accessing the Admin Panel

- Open: **`/admin`** (e.g. `http://localhost:3000/admin`)
- The admin panel reads content from the `content/` folder and writes updates back to the repository.

### How It Works

- Markdown files live in `content/` (e.g. `content/projects/`, `content/skills/`, etc.).
- A build step converts these into JSON under `src/content/` so the React app can load them at runtime.
- The CMS stores uploaded images in `public/images/`.

### CMS Collections

The admin panel enables editing of:
- Hero section (name, title, tagline, profile image)
- Projects (title, description, tech stack, GitHub/demo links, image)
- Skills (name, category, level)
- Certificates (name, issuer, year, image)
- Blog posts (title, date, content, image)

### Configuring the CMS Backend

The CMS is configured in `public/admin/config.yml`. You must set up a Git-backed backend to allow saving changes.

**Option 1 (recommended for Vercel)**: Use the **GitHub backend** by updating `backend.repo` with your GitHub repo (e.g. `username/repo`).

**Option 2**: Deploy to Netlify and use Netlify Identity + Git Gateway (requires additional Netlify setup).

> Tip: After updating the content in `content/`, run the app with `npm start` (or `npm run build`) to regenerate `src/content/`.

## Customize

- Update static sections in `src/sections/`.
- Replace placeholder assets in `public/images/` or `src/assets/`.
- Adjust styles via `src/styles/global.css` and `tailwind.config.js`.

## Deployment

This project can be deployed on **Vercel**, **Netlify**, or any static hosting provider that supports React apps.

---

© {new Date().getFullYear()} Alok Prasad
