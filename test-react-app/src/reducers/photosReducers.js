import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    photos: []
}
const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        getPhotosFetch:(state) => {},
        getPhotosSuccess: (state, action) => {
            state.photos = action.payload
        },
        getPhotosFailure: (state, action) => {
            state.photos = action.payload
        }
    }
});

export const { getPhotosFetch, getPhotosFailure, getPhotosSuccess } = photosSlice.actions;
export default photosSlice.reducer;
