import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import muiTheme from "./theme/muiTheme";
import QueryId from "./dashboards/Identity/queryIdentity";
import AddIdentity from "./dashboards/Identity/addIdentity";
import UsersDashboard from "./dashboards/Identity/identity";
import Welcome from "./dashboards/welcome";
import Authority from "./dashboards/Authority/authority";
import AddAuthority from "./dashboards/Authority/addAuthority";
import { sign_data } from "./walletStorage";

//sign_data();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/identity" component={UsersDashboard} />
              <Route path="/identity/create" component={AddIdentity} />
              <Route path="/identity/query" component={QueryId} />
              <Route exact path="/authority" component={Authority} />
              <Route path="/authority/add" component={AddAuthority} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
