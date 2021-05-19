module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  plugins: [
    require('./_tailwind-config/plugins/base'),
    require('./_tailwind-config/plugins/components'),
    require('./_tailwind-config/plugins/utilities'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
