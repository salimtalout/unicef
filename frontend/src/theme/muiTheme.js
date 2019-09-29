import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    secondary: {
      light: '#1CE8B5',
      main: '#fff',
      dark: '#1CABE2',
      contrastText: '#1CABE2',
    },
    primary: {
      light: '#1CE8B5',
      main: '#1CABE2',
      dark: '#1CABE2',
      contrastText: '#fff',
    }
  },
});

export default muiTheme;
