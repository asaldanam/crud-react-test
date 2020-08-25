import React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import ViewSignIn from "views/VSignIn";
import VList from "views/VList";

const Router = withRouter(({ location, history }: RouteComponentProps) => {
  return (
    <Switch location={location}>
      <Route exact path={"/login"} component={ViewSignIn} />
      <Route exact path={"/"} component={VList} />
      <Route exact path={"/detail"} component={ViewSignIn} />
      <Redirect to="/404" />
    </Switch>
  );
});

export default Router;
