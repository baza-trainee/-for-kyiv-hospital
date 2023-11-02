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
      colors: {
        'light-blue': 'rgba(197, 223, 240, 1)',
        'active-donate-btn': 'rgba(160, 211, 244, 1)',
      },
      lineHeight: {
        'line-height-extra': '1.2',
      },
      boxShadow: {
        back: '0px 4px 4px 0px #748C97',
        backInsert: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
        donateBoxShadow: '0px 4px 4px 0px rgba(219, 219, 219, 0.5)',
        hoveredDonateBoxShadow: '0px 4px 4px 0px rgba(219, 219, 219, 1)',
      },
    },
    plugins: [],
  },
};
