import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../theme/muiTheme';
import TextField from '@material-ui/core/TextField';
import Header from '../header/header';

export default class UploadFiles extends Component {
  displayForm = () => {
    return (
      <div>
        <Paper style={styles.root}>
          <TextField
            key="1"
            name="aaa"
            label="aaa"
            style={styles.root}
          // onChange={this.handleInputChange.bind(this)}
          /><br />
        </Paper>
      </div>
    )
  }

  render() {
    return (
      <div style={styles.root}>
        <MuiThemeProvider theme={muiTheme}>
          <Header />
          {this.displayForm()}
        </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {
  root: {
  }
}