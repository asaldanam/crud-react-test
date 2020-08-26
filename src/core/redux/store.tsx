import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import auth from "./auth.store";
import literals from "./literals.store";
import users from "./users.store";
import userDetails from "./user-details.store";

import rootSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ literals, auth, users, userDetails });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);
