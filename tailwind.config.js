/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '375px', //  for mobile screen
      md: '744px', // for tablet screen
      sLg: '1280px', // for desktop screen from 1280px
      lg: '1440px', // for desktop screen
    },
    fontFamily: {
      title: ['Mona-Lisa', 'sans-serif'],
      text: ['Monserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-blue': 'rgba(197, 223, 240, 1)',
        'blue-sky': 'rgba(225, 244, 250, 1)',
        'active-btn': 'rgba(160, 211, 244, 1)',
        'active-share-btn': 'rgba(144, 202, 249, 1)',
        'header-color': 'rgba(239, 243, 246, 0.25)',
        'blue-grey': 'rgba(107, 115, 137, 1)',
        'dark-blue': 'rgba(61, 73, 102, 1)',
        'footer-color': 'rgba(88, 107, 112, 0.25)',
      },
      lineHeight: {
        1.2: '1.2',
        1.3: '1.3',
      },
      boxShadow: {
        back: '0px 4px 4px 0px #748C97',
        backInsert: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
        donateBoxShadow: '0px 4px 4px 0px rgba(219, 219, 219, 0.5)',
        hoveredDonateBoxShadow: '0px 4px 4px 0px rgba(219, 219, 219, 1)',
        shareModalButtonShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        footerShadow: '0px 4px 4px 0px rgba(224, 224, 224, 0.25)',
      },
      backgroundImage: {
        customModal: "url('./assets/images/ShareModal/shareBg@2x.png')",
      },
    },
    plugins: [],
  },
};
