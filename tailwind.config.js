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
  plugins: [
    addBase(),
    addUtilities(),
    addComponents(),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  mode: 'jit',
  ef50ca9a1484b7b422a435bf5d4cc140c685141,
}
