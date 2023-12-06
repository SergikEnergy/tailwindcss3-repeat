/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#9c0303',
        'logo-purple': {
          100: '#bbcafe',
          200: '#fff232',
        },
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
};

// darkMode - only for dev - for prod is it unnecessary - because theme wiil be changed after changing theme inside windows or browser
