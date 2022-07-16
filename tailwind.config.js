/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      fontFamily: {
        primary: ['Yanone Kaffeesatz', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
