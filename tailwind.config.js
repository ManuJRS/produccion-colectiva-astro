/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#E8684E',
        'custom-green': '#9EDCAD',
        'custom-blue': '#1D4F91',
        'custom-gray': '#333333',
      }
    },
  },
  plugins: [],
};