import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import auth from "./auth.store";
import literals from "./literals.store";

import rootSaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ literals, auth });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);
