// @ts-check

const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(({ addUtilities }) => {
  const utilities = {
    '.theme-text-color': {
      color: 'var(--theme-text-color)',
    },
    '.theme-bg-color': {
      'background-color': 'var(--theme-bg-color)',
    },
  }

  addUtilities(utilities)
})
