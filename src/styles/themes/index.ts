import { defaultTheme } from './default'
import { darkTheme } from './dark'

export * from './default'
export * from './dark'

type ThemeNames = keyof typeof themes

const themes = {
  default: defaultTheme,
  dark: darkTheme,
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
