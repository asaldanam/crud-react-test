import { IUserUpdateBody } from "core/services";

/** STATE */
export interface IUser {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

interface IUserState extends IUser {
  loading: "fetching" | "updating" | "deleteing" | null;
  deleted?: boolean;
  error?: { message: string; status: number };
}

const initialState: IUserState = {
  loading: null,
};

/** ACTIONS */
export const REQUEST_USER_DETAIL = "[USER] get details";
export const REQUEST_UPDATE_USER = "[USER] request update user details";
export const REQUEST_DELETE_USER = "[USER] request delete user";

export const UPDATE_USER = "[USER] update user details";
export const DELETE_USER = "[USER] delete user";
export const SET_USER_DETAIL = "[USER] set details";
export const SET_USER_ERROR = "[USER] set error";

/** ACTION CREATORS */

/** Realiza un GET al detalle de usuario
 * @param userId id del usuario
 */
export function getUserDetails(userId: number) {
  return { type: REQUEST_USER_DETAIL, payload: userId };
}

/** Setea el detalle de usuario en el store de Redux */
export function setUserDetails(userDetail: IUser) {
  return { type: SET_USER_DETAIL, payload: userDetail };
}

/** Realiza el PUT al usuario */
export function requestUpdateUser(payload: IUserUpdateBody) {
  return { type: REQUEST_UPDATE_USER, payload };
}

/** Realiza el DELETE al usuario */
export function requestDeleteUser(userId: number) {
  return { type: REQUEST_DELETE_USER, payload: userId };
}

/** Actualiza el user en el store de Redux */
export function updateUser(payload: IUserUpdateBody) {
  return { type: UPDATE_USER, payload };
}

/** Borra el user en el store de Redux */
export function deleteUser() {
  return { type: DELETE_USER };
}

/** Setea el error de detalle de usuario en el store de Redux */
export function setUserDetailsError(error: {
  message: string;
  status: number;
}) {
  return { type: SET_USER_ERROR, payload: error };
}

/** REDUCERS */
const userDetails = function (state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_USER_DETAIL: {
      return {
        loading: "fetching",
      };
    }
    case REQUEST_UPDATE_USER: {
      return {
        ...state,
        loading: "updating",
      };
    }
    case REQUEST_DELETE_USER: {
      return {
        ...state,
        loading: "deleting",
      };
    }
    case SET_USER_DETAIL: {
      return {
        ...action.payload,
        loading: null,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        ...action.payload,
        loading: null,
      };
    }
    case DELETE_USER: {
      return {
        loading: null,
        deleted: true,
      };
    }
    case SET_USER_ERROR: {
      return {
        loading: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userDetails;
