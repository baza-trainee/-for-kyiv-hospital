/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '375px', //  for mobile screen
      md: '744px', // for tablet screen
      lg: '1440px', // for desktop screen
    },
    fontFamily: {
      title: ['Mona-Lisa', 'sans-serif'],
      text: ['Monserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        back: '0px 4px 4px 0px #748C97',
        backInsert: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
      },
    },
  },
  plugins: [],
};
