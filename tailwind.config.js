// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        text: '#eae9fc',
        background: '#060000',
        primary: '#d90516',
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
