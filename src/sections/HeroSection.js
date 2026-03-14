import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import AuroraGradientBackground from '../components/AuroraGradientBackground';
import GradientWaveBackground from '../components/GradientWaveBackground';
import TechGridBackground from '../components/TechGridBackground';
import profileImageFallback from '../assets/profile.svg';
import { getHeroContent } from '../lib/contentLoader';

const heroContent = getHeroContent();

const BACKGROUND_MAP = {
  particles: ParticleBackground,
  aurora: AuroraGradientBackground,
  gradientWave: GradientWaveBackground,
  techGrid: TechGridBackground,
};

const HeroSection = () => {
  const {
    name = 'Alok Prasad',
    title = 'AI Developer & Product Engineer',
    tagline = 'Crafting intelligent experiences with modern AI, clean UX, and production-ready code.',
    profile_image: profileImage = null,
    animation = 'particles',
  } = heroContent || {};

  const HeroBackground = BACKGROUND_MAP[animation] || ParticleBackground;
  const heroImage = profileImage || profileImageFallback;

  return (
    <section id="home" className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 py-20 lg:flex-row lg:items-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium tracking-wide text-accent">AI Developer Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Hi, I’m <span className="text-accent">{name}</span>
          </h1>
          <p className="mt-4 text-lg text-text/80">{tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-text shadow-sm transition hover:bg-gray-50"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative mx-auto w-72 overflow-hidden rounded-3xl border border-gray-100 bg-white/70 shadow-lg backdrop-blur">
            <img
              src={heroImage}
              alt="Profile"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-dashed border-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
