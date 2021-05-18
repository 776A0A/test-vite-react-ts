import { defaultTheme } from './default'
import { blueTheme } from './blue'

export * from './default'
export * from './blue'

type ThemeNames = 'default' | 'blue'

const themes = {
  default: defaultTheme,
  blue: blueTheme,
}

export let currentTheme: ThemeNames = 'default'

export const setTheme = (themeName: ThemeNames, initial = false) => {
  if (currentTheme === themeName && !initial) return

  currentTheme = themeName

  const theme = themes[themeName]

  let style = document.getElementById('theme-style')

  if (!style) {
    style = document.createElement('style')
    style.setAttribute('id', 'theme-style')
    document.head.appendChild(style)
  }

  style.innerText = `:root{${Object.entries(theme).reduce(
    (styles, [property, value]) => `${styles}${property}:${value};`,
    ''
  )}}`
}
