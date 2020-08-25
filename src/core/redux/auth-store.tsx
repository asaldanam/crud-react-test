const SET_TOKEN = "SET_TOKEN";

/** ACTIONS */
export const setTokenAction = (payload: string) => ({
  type: SET_TOKEN,
  payload,
});

/** STATE */
const initialState: {
  token: string | null;
} = {
  token: null,
};

/** REDUCERS */
const auth = function (state = initialState, action: any) {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default auth;
