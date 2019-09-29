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

export default class AddIdentity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : 'f02-a13f-a7feb5d48a28',
      loading : false,
      answer : false,
<<<<<<< HEAD
      open: true,
      openNum: null,
      openMedical: true,
      openMedicalNum: null
=======
      open: false,
      openNum: null
>>>>>>> 858da1ae5e9be6be60b31cd03a0ee9e65514b179
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

  handleOpenMedical = (id) => {
    this.setState({ openMedical: true, openMedicalNum: id});
  };

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
              <Card>
                <CardContent>
                  {/* <DialogTitle id="customized-dialog-title"> */}
                    <Typography color="textSecondary" variant = 'h1' gutterBottom style = {styles.dialogText.title}>
                      Identité
                    </Typography>
                    <div style = {styles.image}/>
                  {/* </DialogTitle> */}
                  {/* <DialogContent id="customized-dialog-title" style = {styles.dialogText.line} > */}
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      ID : 
                    </Typography>
                    <div style = {{display : 'flex',}}>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        Nom : 
                      </Typography>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        Prénom : 
                      </Typography>
                    </div>
                    <div style = {{display : 'flex',}}>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        Sexe de naissance : 
                      </Typography>
                      <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                        Date de naissance : 
                      </Typography>
                    </div>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Ville et pays de naissance : 
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Couleur des yeux :
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Nom et prénom du parent 1 :
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Nom et prénom du parent 2 :
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Nom(s) et prénom(s) des enfants (optionnel) :
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Signature de l'oracle (juge, chef du village, officiel, etc.) :
                    </Typography>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Commentaire :
                    </Typography>
                  {/* </DialogContent> */}
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
                      Taille et poids : 
                    </Typography><br/>
                    <Typography color="textSecondary" gutterBottom style = {styles.dialogText.content}>
                      Vaccins : 
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
            onClose={this.handleClose}
            // aria-labelledby="customized-dialog-title"
            open={this.state.open}
            style = {styles.dialog}
            fullWidth = {true}
            maxWidth = {'sm'}
          >
            <Card>
              <CardContent>
                <Typography color="textSecondary" variant = 'h3' gutterBottom style = {styles.dialogText.titleMed}>
                  Nouvelles données médicales
                </Typography>
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
      fontSize : '1vw'
    },
    line : {
      display :'flex'
    }
  },
  image : {
    maxWidth: '100px',
    maxHeight : '250px',
    textAlign : 'right',
    marginTop: '5px',
    // backgroundSize : 'cover'
    backgroundImage : `url(${Enfant})`
  }
}