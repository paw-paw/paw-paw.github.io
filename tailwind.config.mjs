/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2F7A77',
        secondary: '#1F252D',
        highlightBlue: '#6CA7A1',
        neutral: {
          bg: '#F3EEE4',
          panel: '#FBF8F2',
          soft: '#E7DFD2',
          dark: '#11161B',
          darkSoft: '#1A2129',
        },
        fog: '#F4F6F0',
        muted: '#55606B',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'h1': 'clamp(3rem, 5vw, 4.75rem)',
        'h2': 'clamp(2.25rem, 3.8vw, 3.25rem)',
        'body': 'clamp(1rem, 1vw, 1.125rem)',
      },
      maxWidth: {
        'container': '1280px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        'gutter': '24px',
      },
      boxShadow: {
        'button': '0 18px 40px -24px rgba(31, 37, 45, 0.35)',
        'panel': '0 24px 60px -32px rgba(31, 37, 45, 0.28)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(47, 122, 119, 0.18), transparent 48%)',
        'section-wash': 'linear-gradient(180deg, rgba(47, 122, 119, 0.08) 0%, rgba(243, 238, 228, 0) 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
    },
  },
  plugins: [],
};
