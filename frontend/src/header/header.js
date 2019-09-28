import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ItemList from './list';
import logoUnicef from '../images/unicef.jpg';

export default class Header extends Component {
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  displayLogo = () => {
    return(<div style = {styles.logo}>
      <a href ="https://www.unicef.org/fr" target="_blank" rel="noopener noreferrer">
        <img alt="logo" src={logoUnicef} align="center" style = {{maxHeight : '100px'}}/>
      </a>
    </div>
    )
  };

  render() {
    return (
      <div>
        <AppBar
          position="relative"
        >
          <Toolbar disableGutters={!this.state.open} className={"classes.toolbar"} style = {{height : '100px'}} >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              size = 'medium'
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              style={styles.title}
              noWrap
              className={"classes.title"}
              onClick={() => window.location.href = "/"}
            >
              UNICEF BlockchainID
            </Typography>          
            {this.displayLogo()}
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.open}
        >
          <div className={"classes.toolbarIcon"}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{ItemList}</List>
        </Drawer>
      </div>
    )
  }
}

const styles = {
  title: {
    transform: 'translate(-50%, -50%)',
    position: "absolute",
    left: '50%',
    top: '50%'
  },
  rightButton: {
    right: 5,
    position: "absolute"
  },
  logo : {
    position: "absolute",
    top: "0%",
    right :'0%',
    maxHeight : '50px'
  }
};
