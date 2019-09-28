import React, { Component } from 'react';
import { logout } from '../js/actions/index';
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { adminMainListItems } from './listItems';
import logoSncf from '../../images/sncfLogo.svg';

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

class ConnectedAdminTopBar extends Component {
  state = {
    open: false,
    open2: false,
  };

  handleClick() {
    this.props.logout();
    window.location.href = "/";
  }

  handleDrawer2Open = () => {
    this.setState({ open2: true });
  };

  handleDrawer2Close = () => {
    this.setState({ open2: false });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <AppBar
          position="relative"
          color="default"
        >
          <Toolbar disableGutters={!this.state.open} className={"classes.toolbar"}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              style={styles.title}
              noWrap
              className={"classes.title"}
            >
              Gestion traçabilité des échanges - Modification de sillons
            </Typography>
            <img alt="" src={logoSncf} align="center" style = {{position: 'relative', right: "-1750px", maxHeight : '50px'}}/>
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
          <List>{adminMainListItems}</List>
        </Drawer>
      </div>
    )
  }
}

const AdminTopBar = connect(null, mapDispatchToProps)(ConnectedAdminTopBar);

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
  }
};

export default AdminTopBar;