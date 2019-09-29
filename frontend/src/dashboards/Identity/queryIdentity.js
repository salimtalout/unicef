import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from '../../theme/muiTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/CardContent';
import Header from '../../header/header';
import Loading from '../loading';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Search from '@material-ui/icons/Search';
import Photo from '@material-ui/icons/Photo';
import Enfant from '../../images/enfant.jpg';
import { DropzoneArea } from 'material-ui-dropzone';

export default class AddIdentity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '2c4-9e7e-8cfaf361f36b',
      loading : false,
      answer : false,
      open: false,
      openNum: null,
      openMedical: false,
      openMedicalNum: null,
      files: [[]],
      tailleNew : '',
      poidsNew : '',
      commentairesNew: '',
      fileNewMed: null,

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

  handleClose = () => {
    this.setState({ open: false, openNum: null });
  };

  handleCloseMed = () => {
    this.setState({ openMedical: false, openMedicalNum: null });
  };


  handleOpenMedical = (id) => {
    this.setState({ openMedical: true, openMedicalNum: id});
  };

  handleSendMed = (id,tailleNew, poidsNew, commentairesNew, filesNewMed) => {
    // Appeler handleCloseMed() pour fermer la / les boites de dialogue à l'envoi des fichiers
  }

  handleChangeMed = (filesNewMed) => {
    let reader = new FileReader();
    if (filesNewMed.length === 0) {
      this.setState({
        fileNewMed: null
      });
    } else {
      reader.readAsBinaryString(filesNewMed[0]);
      reader.onload = () => {
        this.setState({
          fileNewMed: reader.result
        });
      }
    }
  }

  handleChangePhoto(files) {
    let reader = new FileReader();
    if (files.length === 0) {
      this.setState({
        photo: null
      });
    } else {
      reader.readAsBinaryString(files[0]);
      reader.onload = () => {
        this.setState({
          photo: reader.result
        });
      }
    }
  }

  displayTxResult = () => {
    let data;
    if (this.state.loading & !this.state.answer) {
      data = (
        <div>
          <Loading />
        </div>
      );
    } else {
      data = <div />;
    }
    return data;
  };

  displayTextfields = () => {
    return(
      <div style = {{display : 'flex'}}>
          <TextField
            name="id"
            key="2"
            label="Identifiant"
            defaultValue="f02-a13f-a7feb5d48a28"
            style={styles.textFields.id}
            onChange={this.handleInputChange.bind(this)}
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
      await fetch('http://localhost:3000/getId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id' : id
        })
      })
      .then(res => res.json())
      .then(values => {
        this.setState({ files: values });
      })
      .then(() => {
        this.setState({
          loading: false,
          answer: true,
          open: true,
        })
      })
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
  
  renderDialog = () => {
    try {
      return (
        <div>
          <Dialog
            onClose={this.handleClose}
            // aria-labelledby="customized-dialog-title"
            open={this.state.open}
            style = {styles.dialog}
            fullWidth = {true}
            maxWidth = {'xl'}
          >
            <div style = {{display : 'flex', justifyContent : 'center'}}>
              <Card style = {{justifiContent : 'center'}}>
                <img alt="child" src = {Enfant} style={styles.image}/><br/>
                <Button size = "big" variant = "contained" color = "primary" href ='https://kovan.etherscan.io/address/0x40eeb80c81bf08505643e621553c698b3f6348dc#events' target="_blank" rel="noopener noreferrer" style = {{marginLeft : '2vw'}} >Blockchain</Button>
              </Card>
              <Card>
                <CardContent>
                    <Typography color="textSecondary" variant = 'h1' gutterBottom style = {styles.dialogText.title}>
                      Identité
                    </Typography>
                    <div style = {styles.image}/>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>ID : </strong>{' '}{this.state.files.uuid}</a>
                    </Typography>
                    <div style = {{display : 'flex',}}>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        
                        <a style = {styles.content.titles}><strong>Nom : </strong>{' '}{this.state.files.nom}</a>
                      </Typography>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        <a style = {styles.content.titles}><strong>Prénom : </strong>{' '}{this.state.files.prenom}</a>
                      </Typography>
                    </div>
                    <div style = {{display : 'flex',}}>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}> 
                        <a style = {styles.content.titles}><strong>Sexe de naissance :</strong>{' '}{this.state.files.sexe}</a>
                      </Typography>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        <a style = {styles.content.titles}><strong>Date de naissance :</strong>{' '}{this.state.files.dateNaissance}</a>
                      </Typography>
                    </div>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>Ville et pays de naissance : </strong>{' '}{this.state.files.lieuNaissance}</a>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>Couleur des yeux : </strong>{' '}{this.state.files.couleurYeux}</a>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>Nom et prénom du parent 1 :</strong>{' '}{this.state.files.parent1}</a>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>Nom et prénom du parent 2 :</strong>{' '}{this.state.files.parent2}</a>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>Nom(s) et prénom(s) des enfants (optionnel) :</strong>{' '}{this.state.files.enfants}</a>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                    <a style = {styles.content.titles}><strong>Signature de l'oracle (juge, chef du village, officiel, etc.) :</strong>{' '}{this.state.files.signatureOracle}</a>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      <a style = {styles.content.titles}><strong>Commentaire :</strong>{' '}{this.state.files.commentaire}</a>
                    </Typography>
                </CardContent>
                <div style = {{display : 'flex', justifyContent: 'center' }}>
                  <CardActions style = {styles.dialogActions}>
                    <Button size = "medium" color = "primary">Acte de naissance</Button>
                  </CardActions>
                  <CardActions>
                    <Button size = "medium" color = "primary">Photo</Button>
                  </CardActions>
                  <CardActions>
                    <Button size = "medium" color = "primary">Empreinte digitale</Button>
                  </CardActions>
                  <CardActions>
                    <Button size = "medium" color = "primary">Autre</Button>
                  </CardActions>
                </div>
                <Button size = "medium" color = "primary" variant="contained" style = {{left : '7vw', marginBottom : '1vw'}}>Ajouter un commentaire</Button>
              </Card>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" variant = 'h1' gutterBottom style = {styles.dialogText.title}>
                      Données médicales
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Date de la visite : 
                    </Typography><br/>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Taille : 
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Poids : 
                    </Typography><br/>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Vaccins : 
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Groupe sanguin : 
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Allergie(s) : 
                    </Typography><br/>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Maladies particulières : 
                    </Typography><br/>
                </CardContent>
                <div style = {{display : 'flex', justifyContent: 'center' }}>
                  <CardActions style = {styles.dialogActions}>
                    <Button size = "medium" color = "primary">Dossiers médicaux</Button>
                  </CardActions>
                </div>
                <Button size = "medium" color = "primary" variant="contained" style = {{left : '3vw', marginBottom : '1vw'}} onClick={() => this.handleOpenMedical(this.state.id)}>Ajouter des données médicales</Button>
              </Card>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" variant = 'h1' gutterBottom style = {styles.dialogText.title}>
                      Données professionnelles
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Diplômes : 
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Anciennes fonctions : 
                    </Typography>
                </CardContent>
                <div style = {{display : 'flex', justifyContent: 'center' }}>
                  <CardActions style = {styles.dialogActions}>
                    <Button size = "medium" color = "primary">Diplômes</Button>
                  </CardActions>
                  <CardActions style = {styles.dialogActions}>
                    <Button size = "medium" color = "primary">CV</Button>
                  </CardActions>
                  <CardActions style = {styles.dialogActions}>
                    <Button size = "medium" color = "primary">Autres</Button>
                  </CardActions>
                </div>
                <Button size = "medium" color = "primary" variant="contained" style = {{left : '8vw', marginBottom : '1vw'}}>Ajouter un diplôme</Button><br/>
                <Button size = "medium" color = "primary" variant="contained" style = {{left : '9.5vw', marginBottom : '1vw'}}>Ajouter un CV</Button>
              </Card>
            </div>
          </Dialog>
        </div>
      )
    } catch {
      return (
        <div />
      )
    }
  }

  renderMedicalDialog = () => {
    try {
      return (
        <div>
          <Dialog
            onClose={this.handleCloseMed}
            open={this.state.openMedical}
            style = {styles.dialog}
            fullWidth = {true}
            maxWidth = {'sm'}
          >
            <Card>
              <CardContent>
                <Typography color="textSecondary" variant = 'h3' gutterBottom style = {styles.dialogText.titleMed}>
                  Nouvelles données médicales
                </Typography>
                <TextField
                  key="18"
                  name="tailleNew"
                  defaultValue="1m56"
                  label="Taille"
                  style={styles.textFields.medicalSmall}
                  onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                  key="19"
                  name="poidsNew"
                  defaultValue="56kg"
                  label="Poids"
                  style={styles.textFields.medicalSmall}
                  onChange={this.handleInputChange.bind(this)}
                /><br />
                <TextField
                  key="21"
                  name="vaccinNew"
                  defaultValue="-"
                  label="Vaccin(s)"
                  style={styles.textFields.medicalSmall}
                  onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                  key="25"
                  name="groupeSanguinNew"
                  defaultValue="-"
                  label="Groupe sanguin"
                  style={styles.textFields.medicalSmall}
                  onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                  key="22"
                  name="allergieNew"
                  defaultValue="-"
                  label="Allergie(s)"
                  style={styles.textFields.medicalSmall}
                  onChange={this.handleInputChange.bind(this)}
                /><br />
                <TextField
                  key="20"
                  name="commentairesNew"
                  defaultValue=""
                  multiline
                  fullWidth
                  rows='2'
                  label="Commentaires"
                  style={styles.textFields.medicalLarg}
                  onChange={this.handleInputChange.bind(this)}
                /><br />
                <DropzoneArea
                  key='fileNewMed'
                  name='fileNewMed'
                  filesLimit={1}
                  showFileNamesInPreview={false}
                  dropzoneText='Ajouter une radios, une ordonnance, ou autres'
                  style = {styles.dropzoneMed}
                  onChange={this.handleChangeMed.bind(this)}
                />
                <Button size = "medium" color = "primary" variant="contained" style = {{left : '41%',marginTop: '1vw', marginBottom : '0.3vw'}} onClick = {this.handleSendMed()}>Envoyer</Button><br/>
              </CardContent>
            </Card>
          </Dialog>
        </div>
      )
    } catch {
      return (
        <div />
      )
    }
  }

  render() {
    return (
      <div style={styles.root}>
        {console.log(this.state.files)}
        <Header />
        <MuiThemeProvider theme={muiTheme}>
          {this.displayItems()}
          {this.renderDialog()}
          {this.renderMedicalDialog()}
          {this.displayTxResult()}
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
    medicalSmall : {
      width : '13vw',
      marginTop: '0.5vw',
      marginRight: '0.8vw'
    },
    medicalLarg : {
      width : '26.8vw',
      marginTop: '0.5vw',
      marginRight: '0.8vw',
      marginBottom : '1vw'
    },    
  },
  dropzoneMed : {
    marginTop : '2vw',
    width : '45px',
    maxHeight : '40px',
    textAlign : 'center'
  },
  button: {
    send : {
      marginLeft: '5vw',
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
  },
  dialog: {
    // maxWidth : '350vw'
  },
  dialogActions :{
    paddingBottom :'0.5vw'
  },
  dialogText : {
    title : {
      fontSize : '2vw',
      display : 'flex',
      justifyContent : 'space-between'
    },
    titleMed :{
      fontSize : '1vw',
      textAlign : 'center'
    },
    content: {
      fontSize : '1vw',
      display : 'flex'
    },
    line : {
      display :'flex'
    }
  },
  image : {
    maxWidth: '200px',
    maxHeight : '450px',
    textAlign : 'right',
    marginTop: '5px',
    marginRight: '5px',
    marginLeft: '5px',
    marginBottom: '15px',
    // backgroundSize : 'cover'
    backgroundImage : `url(${Enfant})`
  },
  content : {
    title : {
      fontWeight : 'strong'
    }
  }
}