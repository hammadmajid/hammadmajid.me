const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'Atkinson-Hyperlegible': ['Atkinson-Hyperlegible', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      'light-body': '#fbfefb',
      'light-text-primary': '#282728',
      'light-text-secondary': '#525152',
      'light-text-tertiary': '#6f6f6f',
      'light-accent': '#1678b3',
    }
  },
  plugins: [],
};
