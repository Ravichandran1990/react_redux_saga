import { call, put, takeEvery } from "redux-saga/effects";
// import { getPhotosSuccess } from "../reducers/photosReducers";

import { GET_USER_FETCH, GET_USER_SUCCESS, GET_PHOTO_FETCH, GET_PHOTO_SUCCESS } from "../action/test_action";
//url = https://jsonplaceholder.typicode.com/todos
function* workGetUserFetch() {
  const userData = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/todos")
  );
  const userDataJson = yield userData.json();
  const initialLoadData = userDataJson.slice(0, 10);
  yield put({ type: GET_USER_SUCCESS, users: initialLoadData });
}

function* workGetPhotosFetch() {
  const photoData = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/photos")
  );
  const photoDataDataJson = yield photoData.json();
  const initialLoadData = photoDataDataJson.slice(0, 10);
  yield put({type: GET_PHOTO_SUCCESS, photos: initialLoadData});
}

function* usersSaga() {
  yield takeEvery(GET_USER_FETCH, workGetUserFetch);
  yield takeEvery(GET_PHOTO_FETCH, workGetPhotosFetch);
}

export default usersSaga;
