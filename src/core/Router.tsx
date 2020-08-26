import React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import VSignIn from "views/VSignIn";
import VList from "views/VList";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

const Router = withRouter(({ location, history }: RouteComponentProps) => {
  return (
    <Switch location={location}>
      <RedirectRoute exact path={"/login"} to={"/"} component={VSignIn} />
      <PrivateRoute exact path={"/users"} component={VList} />
      <PrivateRoute exact path={"/detail"} component={VSignIn} />
      <Redirect from="/" to="/users" />
      <Redirect to="/404" />
    </Switch>
  );
});

export default Router;

/** Ruta privada que comprueba si hay token antes de redirigir */
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const hasToken = useSelector((state: RootState) => state.auth.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        hasToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

/** Redirige en caso de tener token */
const RedirectRoute = ({ component: Component, to, ...rest }: any) => {
  const hasToken = useSelector((state: RootState) => state.auth.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        hasToken ? <Redirect to={to} /> : <Component {...props} />
      }
    />
  );
};
