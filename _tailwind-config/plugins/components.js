// @ts-check

const plugin = require('tailwindcss/plugin')

module.exports = {
  addComponents: () => {
    // @ts-ignore
    return plugin(({ addComponents, theme }) => {
      const components = {}

      addComponents(components)
    })
  },
}
