import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import usersReducers from '../reducers/usersReducer';
import reducers from '../reducers/reducer_action';
// import photosReducers from '../reducers/photosReducers';
// import usersSaga from '../redux-saga/usersaga';
import usersSaga from '../redux-saga/sagaAction';
const saga = createSagaMiddleware();
const middleware = [saga];
export const store = configureStore({
    reducer: {
        sagaStore: reducers        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});

saga.run(usersSaga);