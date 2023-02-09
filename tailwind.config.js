/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--primary-color)',
        fading: '#1e1e21',
      },
      fontFamily: {
        primary: ['Yanone Kaffeesatz', 'sans-serif'],
      },
      backgroundImage: {
        heroBanner: "url('/assets/images/hero.svg')",
        imageOne: "url('/assets/images/dummy.png')",
        projects: "url('/assets/images/projects-bg.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
