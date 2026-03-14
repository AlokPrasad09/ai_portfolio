import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { getThemeConfig } from '../lib/contentLoader';

const defaultTheme = {
  primaryColor: '#6366f1',
  backgroundColor: '#f8fafc',
  cardStyle: 'soft',
  fontScale: 1,
};

const ThemeContext = createContext({
  ...defaultTheme,
  cardClass: 'rounded-2xl shadow-md',
});

function getCardClass(style) {
  switch (style) {
    case 'flat':
      return 'rounded-xl shadow-none';
    case 'elevated':
      return 'rounded-2xl shadow-2xl';
    case 'soft':
    default:
      return 'rounded-3xl shadow-lg';
  }
}

export const ThemeProvider = ({ children }) => {
  const config = getThemeConfig() || {};
  const theme = useMemo(() => {
    const merged = {
      ...defaultTheme,
      ...config,
    };

    return {
      ...merged,
      cardClass: getCardClass(merged.cardStyle),
    };
  }, [config]);

  useEffect(() => {
    // Only run on client side
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.style.setProperty('--color-accent', theme.primaryColor);
    root.style.setProperty('--color-background', theme.backgroundColor);
    root.style.setProperty('--color-card', theme.cardStyle === 'soft' ? 'rgba(255, 255, 255, 0.85)' : '#ffffff');
    root.style.setProperty('--color-text', '#1e293b');
    root.style.setProperty('--font-scale', theme.fontScale ?? 1);
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
