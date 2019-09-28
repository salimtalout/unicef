import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import QueryId from './dashboards/Users/queryId';
import AddIdentity from './dashboards/Users/addIdentity';
import UsersDashboard from './dashboards/Users/users'
import Welcome from './dashboards/welcome';
import Authority from './dashboards/Authority/authority';
import AddAuthority from './dashboards/Authority/addAuthority';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Provider>
          <Router>
            <div >
              <Switch>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/users' component={UsersDashboard} />
                <Route path='/users/create' component={AddIdentity} />
                <Route path='/users/query' component={QueryId} />
                <Route exact path='/authority' component={Authority} />
                <Route path='/authority/add' component={AddAuthority} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}