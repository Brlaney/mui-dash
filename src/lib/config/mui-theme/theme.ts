import {
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles';

const font = "'Rubik', sans-serif";

let theme = createTheme({
  palette: {
    primary: { main: '#246EB9' },
    secondary: { main: '#16ff4c' },
    error: { main: '#F06543' },
    warning: { main: '#F5EE9E' },
    info: { main: '#16c9ff' },
    success: { main: '#16ff4c' },
    background: { default: '#FDFFFC' }
  },
  breakpoints: {
    values: { xs: 600, sm: 800, md: 1000, lg: 1200, xl: 1536, }
  },
  typography: {
    fontFamily: font,
    h1: { fontSize: 62 },
    h2: { fontSize: 50 },
    h3: { fontSize: 38 },
    h4: { fontSize: 30 },
    h5: { fontSize: 24 },
    h6: { fontSize: 20 },
    subtitle1: { fontSize: 24 },
    subtitle2: { fontSize: 18 },
    body1: { fontSize: 18 },
    body2: { fontSize: 16 }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: font,
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
