import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photo: [],
  status: '',
  error: {},
  likeData: [],
  statusLike: '',
  errorLike: {},
};

export const photoPageSlice = createSlice({
  name: 'photoPage',
  initialState,
  reducers: {
    photoPageRequest: (state) => {
      state.error = '';
      state.status = 'loading';
      state.likeData = [];
    },
    photoPageRequestSuccess: (state, action) => {
      state.photo = action.payload;
      state.error = '';
      state.status = 'loaded';
    },
    photoPageRequestError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
    likeRequest: (state) => {
      state.errorLike = '';
      state.statusLike = 'loading';
    },
    likeRequestSuccess: (state, action) => {
      state.photo = { ...state.photo, ...action.payload.photo };
      state.errorLike = '';
      state.statusLike = 'loaded';
    },
    likeRequestError: (state, action) => {
      state.errorLike = action.payload;
      state.statusLike = 'error';
    },
  },
});

export default photoPageSlice.reducer;
