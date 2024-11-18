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
      textDecorationColor: {
        shadow: '0 0 5px #00f, 0 0 10px #00f, 0 0 20px #00f;'
      }
    },
  },
  plugins: [],
};
