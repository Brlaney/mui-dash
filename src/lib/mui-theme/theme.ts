import {
  createTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const font = "'Lato', sans-serif"

let theme = createTheme({
  palette: {
    primary: {
      main: '#246EB9'
    },
    secondary: {
      main: '#16ff4c'
    },
    error: {
      main: '#F06543'
    },
    warning: {
      main: '#F5EE9E'
    },
    info: {
      main: '#16c9ff'
    },
    success: {
      main: '#16ff4c'
    },
    background: {
      default: '#FDFFFC'
    }
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 74
    },
    h2: {
      fontSize: 62
    },
    h3: {
      fontSize: 50
    },
    h4: {
      fontSize: 42
    },
    h5: {
      fontSize: 32
    },
    h6: {
      fontSize: 24
    },
    subtitle1: {
      fontSize: 22
    },
    subtitle2: {
      fontSize: 20
    },
    body1: {
      fontSize: 18
    },
    body2: {
      fontSize: 16
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
