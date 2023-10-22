/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkthemelight: '#1D232A',
        darktheme: '#191E24',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1000px',
      },
    },
  },
  plugins: [],
};
