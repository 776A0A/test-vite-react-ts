// @ts-check

const plugin = require('tailwindcss/plugin')

module.exports = {
  addUtilities: () => {
    // @ts-ignore
    return plugin(({ addUtilities }) => {
      const utilities = {
        '.theme-text-color': {
          color: 'var(--theme-text-color)',
        },
        '.theme-bg-color': {
          'background-color': 'var(--theme-bg-color)',
        },
        '.transition-duration-300': {
          'transition-duration': '300ms',
        },
      }

      addUtilities(utilities)
    })
  },
}
