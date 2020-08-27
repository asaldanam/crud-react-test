import { GET_AUTH, setAuthError, setToken } from "core/stores/auth.store";
import { fetchAuthToken } from "core/services";
import { call, put, takeLatest } from "redux-saga/effects";

/** SIGN IN SAGA */

function* signInSaga(action: any) {
  try {
    const { data } = yield call(fetchAuthToken, action.payload);
    yield put(setToken(data.token));
  } catch (e) {
    yield put(
      setAuthError({
        message: e.response.data.error,
        status: e.response.status,
      })
    );
  }
}

function* watchSignIn() {
  yield takeLatest(GET_AUTH, signInSaga);
}

export default watchSignIn;
