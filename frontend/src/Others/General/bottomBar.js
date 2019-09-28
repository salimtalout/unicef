import React, { Component } from 'react';
import siaLogo from './images/SIAPARTNERS_cmjn.jpg';

export default class BottomBar extends Component {
  render() {
    return (
      <div style={styles.bar}>
        <img alt="" src={siaLogo} style={styles.image} />
        <a href="http://sia-partners.com/contact" rel="noopener noreferrer" target="_blank" style={styles.contact}>Contact</a>
      </div>
    )
  }
}

const styles = {
  bar: {
    position: 'relative',
    bottom: '0px',
    backgroundColor: "#fff",
    height: "50px",
    marginTop: '10px',
    borderTopStyle: 'solid',
    borderTopColor: '#000',
    borderTopWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: "#000",
    borderBottomWidth: '1px'
  },
  image: {
    textAlign: "left",
    marginTop: '2px'
  },
  contact: {
    color: "black",
    marginLeft: "5%",
    marginRight: '15px',
    marginTop: '17px',
    fontSize: '15px',
    fontWeight: 'bold',
    textTransform: "uppercase",
    display: 'inline',
    float: 'right',
    fontFamily: 'roboto',
    textDecoration: "none"
  }
};
