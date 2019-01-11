import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Main from './app/containers/Main';

import './assets/scss/main.scss';

interface IPalette {
  type?: string;
  primary?: string;
  secondary?: string;
  error?: string;
  contrastThreshold?: string;
  tonalOffset?: string;
  text?: string;
  divider?: string;
  background?: string;
  action?: string;
}

interface PaletteIntention {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
  typography?: { fontFamily: string[] };
  palette?: IPalette;
}

const testTheme: string = 'light';

const userTheme: any =
  testTheme == 'light'
    ? {
        palette: {
          type: 'light'
        }
      }
    : {
        palette: {
          type: 'dark'
        }
      };

const theme = createMuiTheme(userTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById('root')
);
