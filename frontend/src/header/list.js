import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Search from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';

const ItemList = (
  <div>
    <ListItem button onClick={() => window.location.href = "/identity/create"}>
      <ListItemIcon>
        <LibraryAdd />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Enregistrer une identité" />
    </ListItem>
    <ListItem button onClick={() => window.location.href = "/identity/query"}>
      <ListItemIcon>
        <Search  />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Accéder à une identité" />
    </ListItem>
    <ListItem button onClick={() => window.location.href = "/reporting"}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Reporting des identités" />
    </ListItem>
    <ListItem button onClick={() => window.location.href = "/autority/add"}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: -25 }} primary="Gérer les droits" />
    </ListItem>
  </div>
);

export default ItemList