import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchAuthToken } from "core/services";

export function* signIn(action: any) {
  try {
    const token = yield call(fetchAuthToken, action.payload);
    yield put({ type: "AUTH_SET_TOKEN", payload: token.data.token });
  } catch (e) {
    yield put({ type: "AUTH_SET_ERROR", payload: e.response.data.error });
  }
}

export function* watchSignIn() {
  yield takeLatest("GET_AUTH", signIn);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(watchSignIn)]);
}
