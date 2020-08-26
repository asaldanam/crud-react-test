import { all, call } from "redux-saga/effects";
import watchSignIn from "./auth.saga";
import watchGetUsers from "./users.saga";
import {
  watchGetUserDetails,
  watchDeleteUserSaga,
  watchUpdateUserSaga,
} from "./user-details.saga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchSignIn),
    call(watchGetUsers),
    call(watchGetUserDetails),
    call(watchUpdateUserSaga),
    call(watchDeleteUserSaga),
  ]);
}
