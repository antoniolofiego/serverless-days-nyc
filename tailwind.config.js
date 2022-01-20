const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat', ...defaultTheme.fontFamily.sans],
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
