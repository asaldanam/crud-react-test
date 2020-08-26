import React, { useEffect } from "react";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./redux/auth.store";

interface Props {
  children?: any;
}

/** Guarda o recupera el token del Session Storage antes de que resuelva las rutas */
const SessionManager: React.FC<Props> = (props: Props) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionToken = window.localStorage.getItem("token");
    if (sessionToken && !auth.token) {
      dispatch(setToken(sessionToken));
    } else if (auth.token) {
      window.localStorage.setItem("token", auth.token);
    }
  }, [auth, dispatch]);

  return props.children;
};

export default SessionManager;
