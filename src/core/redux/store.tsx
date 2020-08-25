import { createStore, combineReducers } from "redux";
import auth from "core/redux/auth-store";

export default createStore(
  combineReducers({ auth }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
