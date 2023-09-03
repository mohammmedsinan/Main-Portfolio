const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--PrimaryColor)',
        secondary: 'var(--secondaryColor)',
        accent: 'var(--Accent)',
      },
      fontFamily: {
        sans: ["Pitagon Serif", ...defaultTheme.fontFamily.sans],
        serif: ["Pitagon Serif", ...defaultTheme.fontFamily.serif],
        heading: ["Pitagon Serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
