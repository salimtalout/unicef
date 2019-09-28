import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../theme/muiTheme';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
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