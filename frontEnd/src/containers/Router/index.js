import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import Login from "../Login/index";



export const routes = {
  Login: "/",
  Home: "/home"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Login} component={Login}/>
        <Route exact path={routes.Home} component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
