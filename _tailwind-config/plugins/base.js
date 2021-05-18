// @ts-check

const plugin = require('tailwindcss/plugin')

module.exports = {
  addBase: () => {
    // @ts-ignore
    return plugin(({ addBase, theme }) => {
      const base = {}

      addBase(base)
    })
  },
}
