const plugin = require('tailwindcss/plugin')
const {
  addUtilities,
  addComponents,
  addBase,
} = require('./_tailwind-config/plugins')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [addBase(), addUtilities(), addComponents()],
}
