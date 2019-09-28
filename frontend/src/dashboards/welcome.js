import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../theme/muiTheme';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import Header from '../header/header';

export default class UploadFiles extends Component {
    constructor(props) {
      super(props);
      this.state = {
        uuid : '',
        dateNaissance : '',
        lieuNaissance : '',
        acteNaissance : '',
        fingerprint : '',
        signatureOracle : '',
        commentaire : '',
        nom : '',
        prenom : '',
        couleurYeux : '',
        sexe : '',
        parent1 : '',
        parent2 : '',
        enfants : '',
        donneesAutres : '',
        photo : '',
      }
    }

    handleInputChange(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

    handleChange(files) {
      let reader = new FileReader();
      if (files.length === 0) {
        this.setState({
          files: null,
          data: null
        });
      } else {
        reader.readAsBinaryString(files[0]);
        reader.onload = () => {
          this.setState({
            files: files,
            data: reader.result,
            dataHash: crypto.createHash('sha256').update(reader.result).digest('hex')
          });
        }
      }
    }

    displayForm = () => {
        return (          
            <div>
            <Paper style={styles}>
              <TextField
                key="1"
                name="nom"
                label="Nom"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              />
              <TextField
                key="2"
                name="prenom"
                label="Prenom"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              />
              <TextField
                key="3"
                name="sexe"
                label="Sexe de naissance"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              />              
              <TextField
                key="4"
                name="dateNaissance"
                label="Date de naissance"
                defaultValue="2019-01-01"
                type="date"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              /><br />
              <TextField
                name="lieuNaissance"
                key="9"
                label="Lieu et pays de naissance"
                style={styles.textFields.large}
                onChange={this.handleInputChange.bind(this)}
              /><br />
              <TextField
                key="5"
                name="couleurYeux"
                label="Couleur des yeux"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              /><br />
              <TextField
                key="6"
                name="parent1"
                label="Nom et prénom du parent 1"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              /><br />
              <TextField
                key="7"
                name="parent2"
                label="Nom et prénom du parent 2"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              /><br />
              <TextField
                key="8"
                name="enfants"
                label="Nom(s) et prénom(s) des enfants (optionnel)"
                style={styles.textFields.premLigne}
                onChange={this.handleInputChange.bind(this)}
              /><br />
              <TextField
                name="signatureOracle"
                key="12"
                label="Signature de l'oracle (juge, chef du village, officiel, etc.)"
                style={styles.textFields.large}
                onChange={this.handleInputChange.bind(this)}
              />
              <TextField
                name="commentaire"
                key="13"
                multiline
                fullWidth
                rows='3'
                label="Commentaires"
                style={styles.textFields.commentaire}
                onChange={this.handleInputChange.bind(this)}
              /><br /><br />
            <h1 style={styles.title}>Fichiers à uploader</h1>
            {this.displayDropZone('Acte de naissance', 'acteNaissance')}<br/>
            {this.displayDropZone('Photo', 'photo')}<br/>
            {this.displayDropZone('Empreinte digitale', 'fingerprint')}<br/>
            {this.displayDropZone('Autre', 'donneesAutres')}
            </Paper>
          </div>
        )
      }

      displayDropZone = (texte, name) => {
        return (
          <div>
              <Paper style={styles.dropZone}>
                <DropzoneArea
                  key = {name}
                  name = {name}
                  filesLimit={1}
                  showFileNamesInPreview={false}
                  dropzoneText={texte}
                  onChange={this.handleChange.bind(this)}
                />
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
  paperLeft: {
    maxWidth: '650px',
    height: '400px',
    paddingRight: '5px',
    paddingLeft: '5px',
  },
  paperRight: {
    marginLeft: '39%',
    height: '400px',
    width: '550px',
  },
  premLigne: {
    maxWidth : '10%'
  },
  title :{
    fontWeight: 'bold',
    color: '#660033',
    fontSize: '30px',
    paddingLeft: '2px',
    marginBottom: '7px',
    marginTop: '0px'
  },
  dropZone: {
    width: '350px',
    maxHeight: '400px',
    paddingRight: '5px',
    paddingLeft: '5px',
  },
  textFields: {
    generic: {
      marginLeft: '20px',
      marginBottom: '10px',
    },
    premLigne: {
      marginRight: '10px',
      marginLeft: '20px',
      width: '42%',
      marginBottom: '10px',
    },
    large: {
      marginLeft: '20px',
      width: '92%',
      marginBottom: '10px',
      marginTop: '10px'
    },
    commentaire: {
      marginRight: '22px',
      marginLeft: '20px',
      width: '95%',
    },
  },
}