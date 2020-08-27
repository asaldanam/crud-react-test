import { REQUEST_USER_DETAILS, setUsersList } from "core/stores/users.store";
import { fetchUsers } from "core/services";
import { call, put, takeLatest } from "redux-saga/effects";

function* getUsersSaga(action: any) {
  try {
    const { data } = yield call(fetchUsers, action.payload);
    yield put(
      setUsersList({
        total_pages: data.total_pages,
        page: data.page,
        data: data.data,
      })
    );
  } catch (e) {
    /** TODO */
    console.error(e);
    // yield put({ type: "SET_USERS_ERROR", payload: e.response.data.error });
  }
}

function* watchGetUsers() {
  yield takeLatest(REQUEST_USER_DETAILS, getUsersSaga);
}

export default watchGetUsers;
