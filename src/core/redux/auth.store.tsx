import { IAuthTokenBody } from "core/services";

/** ACTIONS */
export const AUTH_SET_TOKEN = "AUTH_SET_TOKEN";
export const AUTH_SET_ERROR = "AUTH_SET_ERROR";
export const AUTH_CLEAR_TOKEN = "AUTH_CLEAR_TOKEN";
export const GET_AUTH = "GET_AUTH";

/** STATE */
export interface SAuth {
  token?: string | null;
  error?: string | null;
  loading: boolean;
}

const initialState: SAuth = {
  token: null,
  error: null,
  loading: false,
};

/** ACTION CREATORS */

/** Obtiene el token de autentificación y lo guarda en el store */
export function signIn(body: IAuthTokenBody) {
  return { type: "GET_AUTH", payload: body };
}

/** Setea el token en el store  */
export function setToken(token: SAuth["token"]) {
  return { type: "AUTH_SET_TOKEN", payload: token };
}

/** Limpia el token del store y la sesión del localstorage  */
export function signOut() {
  window.localStorage.removeItem("token");
  return { type: "AUTH_SET_TOKEN", payload: undefined };
}

/** REDUCERS */
const auth = function (state = initialState, action: any) {
  switch (action.type) {
    case GET_AUTH: {
      return {
        loading: true,
      };
    }
    case AUTH_SET_TOKEN: {
      return {
        token: action.payload,
        error: null,
        loading: false,
      };
    }
    case AUTH_SET_ERROR: {
      return {
        token: null,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default auth;
