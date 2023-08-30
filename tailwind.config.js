const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--PrimaryColor)',
        secondary: 'var(--secondaryColor)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ["sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["sans-serif", ...defaultTheme.fontFamily.serif],
        heading: ["sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
