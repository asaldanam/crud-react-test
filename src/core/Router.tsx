import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import VList from "views/VList";
import VSignIn from "views/VSignIn";
import { RootState } from "./redux/store";
import VDetail from "views/VDetail";

const Router = withRouter(({ location, history }: RouteComponentProps) => {
  // Almaceno la ruta original para en el caso de que el usuario acceda por deep link,
  // devolverle a esta después de todas las comprobaciones contra Redux
  const initialRoute = useRef(location.pathname);
  const token = useSelector((state: RootState) => state.auth.token);

  // Reseteo la ruta guardada en caso de que ya tenga token
  useEffect(() => {
    if (token && initialRoute.current !== "/") {
      initialRoute.current = "/";
      console.log(initialRoute.current);
    }
  }, [token]);

  return (
    <Switch location={location}>
      <RedirectRoute
        exact
        path={"/login"}
        to={initialRoute.current === "/login" ? "/" : initialRoute.current}
        component={VSignIn}
      />
      <PrivateRoute path={"/users/:id"} component={VDetail} />
      <PrivateRoute exact path={"/users"} component={VList} />
      <Redirect from={"/"} to={"/users"} exact />
      <Redirect to="/404" />
    </Switch>
  );
});

export default Router;

/** Ruta privada que comprueba si hay token antes de redirigir */
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        Boolean(token) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

/** Ruta que redirige en caso de tener token */
const RedirectRoute = ({ component: Component, to, ...rest }: any) => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        Boolean(token) ? <Redirect to={to} /> : <Component {...props} />
      }
    />
  );
};
