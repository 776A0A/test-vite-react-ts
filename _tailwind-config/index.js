const { addBase, addComponents, addUtilities } = require('./plugins')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  plugins: [
    addBase(),
    addUtilities(),
    addComponents(),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
