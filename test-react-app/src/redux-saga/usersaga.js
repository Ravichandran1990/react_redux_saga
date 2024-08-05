import { call, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess } from "../reducers/usersReducer";
import { getPhotosSuccess } from "../reducers/photosReducers";
//url = https://jsonplaceholder.typicode.com/todos
function* workGetUserFetch() {
  const userData = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/todos")
  );
  const userDataJson = yield userData.json();
  const initialLoadData = userDataJson.slice(0, 10);
  yield put(getUserSuccess(initialLoadData));
}

function* workGetPhotosFetch() {
  const photoData = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/photos")
  );
  const photoDataDataJson = yield photoData.json();
  const initialLoadData = photoDataDataJson.slice(0, 10);
  yield put(getPhotosSuccess(initialLoadData));
}

function* usersSaga() {
  yield takeEvery("users/getUserFetch", workGetUserFetch);
  yield takeEvery("photos/getPhotosFetch", workGetPhotosFetch);
}

export default usersSaga;
