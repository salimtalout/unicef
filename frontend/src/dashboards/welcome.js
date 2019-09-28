import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../theme/muiTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DropzoneArea } from 'material-ui-dropzone';

export default class UploadFiles extends Component {
    // constructor(props) {
    // }

    displayForm = () => {
        return (          
            <div>
            <Paper style={styles.root}>
                <TextField
                    key="1"
                    name="numSillon"
                    label="Numéro de sillon"
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
              {this.displayForm()}
            </MuiThemeProvider>
          </div>
        )
    }
}

const styles = {
  root: {
  },
}