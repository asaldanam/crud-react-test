import { IAuthTokenBody } from "core/services";

/** ACTIONS */
export const AUTH_SET_TOKEN = "AUTH_SET_TOKEN";
export const AUTH_SET_ERROR = "AUTH_SET_ERROR";
export const GET_AUTH = "GET_AUTH";

/** STATE */
const initialState: {
  token?: string;
  error?: string;
  loading: boolean;
} = {
  loading: false,
};

/** ACTION CREATORS */

/** Obtiene el token de autentificación */
export function getAuth(body: IAuthTokenBody) {
  return { type: "GET_AUTH", payload: body };
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
        loading: false,
      };
    }
    case AUTH_SET_ERROR: {
      return {
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default auth;
