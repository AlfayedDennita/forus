/* eslint-disable import/no-extraneous-dependencies */

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fde8ce',
          100: '#fddfbb',
          200: '#fbcc93',
          300: '#fab96c',
          400: '#f8a744',
          500: '#f7941d',
          600: '#e38008',
          700: '#bc6a07',
          800: '#945305',
          900: '#6d3d04',
        },
        secondary: {
          50: '#c6e9f7',
          100: '#b4e2f5',
          200: '#91d4f0',
          300: '#6dc6eb',
          400: '#49b8e6',
          500: '#25aae1',
          600: '#1b91c2',
          700: '#16779f',
          800: '#115c7b',
          900: '#0c4157',
        },
      },
      transitionDuration: {
        DEFAULT: defaultTheme.transitionDuration[300],
      },
    },
  },
  plugins: [],
};
