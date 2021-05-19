import { defaultTheme } from './default'
import { darkTheme } from './dark'

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

  let style = document.getElementById('theme-style') as
    | (HTMLStyleElement & { themes?: { [key: string]: string } })
    | null

  if (!style) {
    style = document.createElement('style')
    style.setAttribute('id', 'theme-style')
    document.head.appendChild(style)
  }

  let themeText = ''

  if (style.themes?.[themeName]) {
    themeText = style.themes[themeName]
  } else {
    themeText = `:root{${Object.entries(theme).reduce(
      (styles, [property, value]) => `${styles}${property}:${value};`,
      ''
    )}}`

    // 生成的theme字符串做一个缓存
    Object.assign(style.themes || (style.themes = {}), {
      [themeName]: themeText,
    })
  }

  style.innerText = themeText
}
