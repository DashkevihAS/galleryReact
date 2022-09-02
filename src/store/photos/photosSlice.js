import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  status: '',
  error: {},
  page: 1,
  like: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosRequest: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    photosRequestSuccess: (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.error = '';
      state.status = 'loaded';
      state.page += 1;
    },
    photosRequestError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
    photosUpdatePage: (state, action) => {
      state.page = 1;
    },
    likeUpdate: (state) => {
      state.like = !state.like;
      state.photos = [];
      state.page = 1;
    },
  },
});

export default photosSlice.reducer;
