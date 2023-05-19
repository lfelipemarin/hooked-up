/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        128: '32rem',
        256: 'calc(100vh - 100px)'
      },
      flex: {
        50: '1 1 50%'
      }
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
  prefix: 'tw-',
  important: true
};
