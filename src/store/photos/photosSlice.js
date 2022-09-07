import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  status: '',
  error: {},
  page: 1,
  token: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosRequest: (state) => {
      state.error = '';
      state.status = 'loading';
      state.page = 1;
      state.photos = [];
    },
    photosRequestSuccess: (state, action) => {
      state.photos = action.payload;
      state.error = '';
      state.status = 'loaded';
      state.page = 2;
    },
    photosRequestError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
    photosScrollRequest: (state) => {
      state.error = '';
    },
    photosScrollRequestSuccess: (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.error = '';
      state.page += 1;
    },
    photosScrollRequestError: (state, action) => {
      state.error = action.payload;
    },
    photosUpdate: (state) => {
      state.photos = [];
      state.page = 1;
    },
    tokenUpdate: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { photosUpdate, tokenUpdate } = photosSlice.actions;

export default photosSlice.reducer;
