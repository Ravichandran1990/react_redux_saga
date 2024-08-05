import { GET_USER_FETCH, GET_USER_SUCCESS, GET_PHOTO_FETCH, GET_PHOTO_SUCCESS } from "../action/test_action";
const initialState = {
  users: [],
  photos: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FETCH:
      return { ...state };
    case GET_USER_SUCCESS:
      return { ...state, users: action.users };
    case GET_PHOTO_FETCH:
      return { ...state, photos: [] };
    case GET_PHOTO_SUCCESS:
      return { ...state, photos: action.photos };
    default:
      return state;
  }
};

export default reducer;
