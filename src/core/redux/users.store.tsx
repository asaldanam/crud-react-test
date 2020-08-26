import { SUser } from "./user-details.store";

/** STATE */

export interface SUsers {
  loading?: boolean;
  error?: any;
  page: number;
  total_pages: number;
  data: SUser[];
}

const initialState: SUsers = {
  loading: false,
  error: null,
  page: 0,
  total_pages: 0,
  data: [],
};

/** ACTIONS */
export const REQUEST_USER_DETAILS = "[USERS LIST] get list";
export const SET_USERS_LIST = "[USERS LIST] set list";
export const SET_USERS_ERROR = "[USERS LIST] set error";

/** ACTION CREATORS */

/** Realiza un GET al listado de usuarios
 * @param page página listada
 */
export function getUsers(page?: number) {
  return { type: REQUEST_USER_DETAILS, payload: page };
}

/** Setea el listado de usuarios en el store de Redux */
export function setUsersList(usersList: SUsers) {
  return { type: SET_USERS_LIST, payload: usersList };
}

/** REDUCERS */
const users = function (state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_USER_DETAILS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_USERS_LIST: {
      return {
        ...action.payload,
        loading: false,
        error: null,
      };
    }
    case SET_USERS_ERROR: {
      return {
        error: action.payload,
        loading: false,
        page: 0,
        total_pages: 0,
        data: [],
      };
    }
    default:
      return state;
  }
};

export default users;
