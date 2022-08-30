import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: {},
  status: '',
  error: {},
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
      state.photos = action.payload;
      state.error = '';
      state.status = 'loaded';
    },
    photosRequestError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
  },
});

export default photosSlice.reducer;
