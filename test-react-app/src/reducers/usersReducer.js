import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  isLoading: false,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserFetch: (state, action) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isloading = false;
      state.users = action.payload;
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
  },
});

export const { getUserFetch, getUserSuccess, getUserFailure } =
  usersSlice.actions;

export default usersSlice.reducer;
