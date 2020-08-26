import { fetchUserDetail, updateUserCall, deleteUserCall } from "core/services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  setUserDetails,
  REQUEST_USER_DETAIL,
  setUserDetailsError,
  REQUEST_UPDATE_USER,
  REQUEST_DELETE_USER,
  updateUser,
  deleteUser,
} from "../redux/user-details.store";

/** Obtiene el detalle del usuario @saga */
function* getUserDetailsSaga(action: any) {
  try {
    const { data } = yield call(fetchUserDetail, action.payload);
    yield put(setUserDetails(data.data));
  } catch (e) {
    yield put(
      setUserDetailsError({
        message: e.response.data.error,
        status: e.response.status,
      })
    );
  }
}

/** Actualiza el usuario @saga */
function* updateUserSaga(action: any) {
  try {
    const { data } = yield call(updateUserCall, action.payload);
    yield put(updateUser(data));
  } catch (e) {
    yield put(
      setUserDetailsError({
        message: e.response.data.error,
        status: e.response.status,
      })
    );
  }
}

/** Elimina el usuario @saga */
function* deleteUserSaga(action: any) {
  try {
    yield call(deleteUserCall, action.payload);
    yield put(deleteUser());
  } catch (e) {
    yield put(
      setUserDetailsError({
        message: e.response.data.error,
        status: e.response.status,
      })
    );
  }
}

/** EXPORT WATCHERS */

export function* watchGetUserDetails() {
  yield takeLatest(REQUEST_USER_DETAIL, getUserDetailsSaga);
}

export function* watchUpdateUserSaga() {
  yield takeLatest(REQUEST_UPDATE_USER, updateUserSaga);
}

export function* watchDeleteUserSaga() {
  yield takeLatest(REQUEST_DELETE_USER, deleteUserSaga);
}
