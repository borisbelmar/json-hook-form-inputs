import darkTheme from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'

export const darkThemeStyle = {
  codeTheme: darkTheme,
  root: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    ...darkTheme.plain,
    backgroundColor: 'inherit'
  },
  backgroundColor: 'linear-gradient(to left bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))'
}

export const lightThemeStyle = {
  codeTheme: lightTheme,
  root: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    ...lightTheme.plain,
    backgroundColor: 'inherit'
  },
  backgroundColor: 'linear-gradient(to right bottom, rgb(243, 244, 246), rgb(209, 213, 219))'
}
