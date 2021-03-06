import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../theme/muiTheme';
import Header from '../header/header';
import BackgroundImg from '../images/unicef_enfants.jpg'

export default class Welcome extends Component {
  displayPage = () => {
    return (
      <div>
        <img alt="children" src = {BackgroundImg} style={styles.image}/>
      </div>
    )
  }

  render() {
      return (
        <div style={{}}>
          <Header/>
          {this.displayPage()}
          <MuiThemeProvider theme={muiTheme}>
          </MuiThemeProvider>
        </div>
      )
  }
}

const styles = {
  image : {
    position: 'relative',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    marginTop: '5px',
  }
}