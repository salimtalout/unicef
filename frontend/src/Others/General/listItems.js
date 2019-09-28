import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileIcon from '@material-ui/icons/FileCopy';
import ListIcon from '@material-ui/icons/List';
import CloudOffIcon from '@material-ui/icons/CloudOff';
// import { logout } from '../js/actions/index';
// import store from "../js/store/index";

export const adminMainListItems = (
  <div>
    <ListItem button onClick={() => window.location.href = "/"}>
      <ListItemIcon>
        <FileIcon />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Enregistrer un document" />
    </ListItem>
    <ListItem button onClick={() => window.location.href = "/filesList"}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Liste des documents" />
    </ListItem>
    <ListItem button onClick={() => {
      // store.dispatch(logout());
      window.location.href = "/";
    }}>
      <ListItemIcon>
        <CloudOffIcon />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Se déconnecter" />
    </ListItem>
  </div>
);
