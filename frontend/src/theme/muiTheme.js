import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    secondary: {
      light: '#1CE8B5',
      main: '#fff',
      dark: '#660033',
      contrastText: '#660033',
    },
    primary: {
      light: '#1CE8B5',
      main: '#1cabe2 ',
      dark: '#660033',
      contrastText: '#fff',
    }
  },
});

export default muiTheme;
