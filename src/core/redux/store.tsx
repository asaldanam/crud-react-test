import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import auth from "./auth.store";
import rootSaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({ auth }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
