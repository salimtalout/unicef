import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="blur" style={styles.all} />
        <div style={styles.back} />
        <div style={styles.content}>
          <p style={styles.message}>Veuillez patienter pendant l'enregistrement des données<br/><br />
          It will take a few seconds</p>
          <CircularProgress style={styles.circularProgress} color="secondary" />
        </div>
        <br /><br />
      </div>
    )
  }
}

const styles = {
  content: {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, 20%)',
    zIndex: 2
  },
  circularProgress: {
    marginTop: '20px',
    marginLeft: '43%',
  },
  message: {
    color: "#FFF",
    fontSize: "15px",
    textAlign: "center",
  },
  all: {
    position: "absolute",
    top: '50%',
    left: '50%'
  },
  back: {
    position: 'fixed',
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: '0.7',
    zIndex: 1,
    width: '100%',
    height: '100%',
  }
};
