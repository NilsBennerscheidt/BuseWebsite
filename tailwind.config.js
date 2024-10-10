// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        text: '#eae9fc',
        background: '#121010',
        primary: '#ca2d25',
        secondary: '#2e5247',
        accent: '#0ec893',
      },
      backgroundColor: theme => ({
        ...theme('colors'), // This will include your custom colors in backgroundColor
      }),
    },
  },
  plugins: [],
};
