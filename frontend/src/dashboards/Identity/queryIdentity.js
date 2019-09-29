import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../../theme/muiTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DropzoneArea } from 'material-ui-dropzone';
import Header from '../../header/header';
import Loading from '../loading';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Search from '@material-ui/icons/Search';

export default class AddIdentity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : ''
    }
  }

  displayTextfields = () => {
    return(
      <div style = {{display : 'flex'}}>
          <TextField
            name="identifiant"
            key="2"
            label="Identifiant"
            defaultValue="583ba135-fc4c-4171-b445-8f660ba5d1e1"
            style={styles.textFields.id}
            // onChange={this.handleInputChange.bind(this)}
          />
          <h3 style = {styles.ou}>OU</h3>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={styles.button.fingerprint}
          >
            Fingerprint Scanner   
            <FingerprintIcon style = {{paddingLeft:  '0.3vw'}} />
          </Button>
      </div>
    )
  }

  displayButton = () => {
    return (
      <div style={styles.button.send} >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            this.sendFiles(
              this.state.id
            );
          }}
        >
          Envoyer
          <Search style = {{paddingLeft:  '0.3vw'}} />
        </Button>
      </div>
    )
  }

  sendFiles = async (
    id
  ) => {
    this.setState({ loading: true });
    await fetch('http://localhost:3000/queryId', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        textFields: {
          'id' : id
        }
      })
    })
      .then(() => {
        this.setState({
          loading: false,
          answer: true,
        })
      })
      .then(() => window.location.reload());
  }

  displayItems = () => {
    return(
      <div style = {{display : 'flex', justifyContent: 'center'}}>
        <Paper style={styles.paper}>
          {this.displayTextfields()}
          {this.displayButton()}
        </Paper>
      </div>
    )
  }

  render() {
    return (
      <div style={styles.root}>
        <Header />
        <MuiThemeProvider theme={muiTheme}>
          {this.displayItems()}
        </MuiThemeProvider>
      </div>
    )
  }
}
  
const styles = {
  paper: {
    marginTop : '1vw',
    marginBottom : '1vw'
  },
  ou : {
    paddingTop : '1vw'
  },
  textFields: {
    id: {
      marginTop : '1vw',
      marginRight : '1vw',
      marginLeft : '1vw',
      marginBottom : '1vw',
      width : '16vw'
    },
  },
  button: {
    send : {
      // marginTop: '1vw',
      marginLeft: '5vw',
      marginBottom: '1vw',
      paddingBottom: '1vw',
      size : 'medium',
    },
    fingerprint : {
      marginTop : '1vw',
      marginRight : '1vw',
      marginLeft : '1vw',
      marginBottom : '1vw',
      size : 'medium',
    }
  }
}