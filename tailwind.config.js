module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};