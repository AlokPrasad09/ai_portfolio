import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutMe from './sections/AboutMe';
import SkillsSection from './sections/SkillsSection';
import TechStack from './sections/TechStack';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import BlogSection from './sections/BlogSection';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { getLayoutConfig } from './lib/contentLoader';
import Admin from './pages/Admin';

const SECTION_REGISTRY = {
  hero: { component: HeroSection, label: 'Home', href: '#home' },
  about: { component: AboutMe, label: 'About', href: '#about' },
  skills: { component: SkillsSection, label: 'Skills', href: '#skills' },
  tech: { component: TechStack, label: 'Tech', href: '#tech' },
  projects: { component: ProjectsSection, label: 'Projects', href: '#projects' },
  certificates: { component: CertificatesSection, label: 'Certificates', href: '#certificates' },
  blog: { component: BlogSection, label: 'Blog', href: '#blog' },
  contact: { component: ContactSection, label: 'Contact', href: '#contact' },
};

const DEFAULT_SECTION_ORDER = Object.keys(SECTION_REGISTRY);

const Home = ({ layout }) => {
  const sections = layout?.sections ?? DEFAULT_SECTION_ORDER;
  const enabled = layout?.enabled ?? {};

  const visibleSections = sections
    .filter(key => SECTION_REGISTRY[key])
    .filter(key => enabled[key] !== false);

  return (
    <main>
      {visibleSections.map(key => {
        const Section = SECTION_REGISTRY[key].component;
        return Section ? <Section key={key} /> : null;
      })}
    </main>
  );
};

function App() {
  const layout = getLayoutConfig();
  const sections = layout?.sections ?? DEFAULT_SECTION_ORDER;
  const enabled = layout?.enabled ?? {};

  const navLinks = sections
    .filter(key => SECTION_REGISTRY[key])
    .filter(key => enabled[key] !== false)
    .map(key => ({
      label: SECTION_REGISTRY[key].label,
      href: SECTION_REGISTRY[key].href,
    }));

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-text">
          <Navbar links={navLinks} />
          <Routes>
            <Route path="/" element={<Home layout={layout} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Home layout={layout} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
