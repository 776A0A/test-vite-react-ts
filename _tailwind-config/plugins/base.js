// @ts-check

const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(({ addBase, theme }) => {
  const base = {}

  addBase(base)
})
