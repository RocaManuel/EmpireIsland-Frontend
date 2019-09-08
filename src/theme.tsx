import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'


let theme = createMuiTheme({

  palette: {
    text: {
      primary: '#EDF5E1',
      secondary: '#05386B'
    },
    primary: {
      main: '#379683',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#696868',
      contrastText: '#FFF',
      light: '979696',
      dark: '#3E3E3E',
    },
  }
});

theme = responsiveFontSizes(theme);

export default theme