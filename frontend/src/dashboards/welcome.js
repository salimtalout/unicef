import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../theme/muiTheme';
import Header from '../header/header';

export default class Welcome extends Component {
    render() {
        return (
          <div style={{}}>
            <Header/>
            <MuiThemeProvider theme={muiTheme}>
            </MuiThemeProvider>
          </div>
        )
    }
}