// @ts-check

const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(({ addComponents, theme }) => {
  const components = {}

  addComponents(components)
})
