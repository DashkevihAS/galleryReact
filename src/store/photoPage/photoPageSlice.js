import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photo: [],
  status: '',
  error: {},
  statusLike: '',
  errorLike: {},
  like: '',
};

export const photoPageSlice = createSlice({
  name: 'photoPage',
  initialState,
  reducers: {
    photoPageRequest: (state) => {
      state.error = '';
      state.status = 'loading';
      state.photo = [];
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
    getLikeCount: (state, action) => {
      state.like = action.payload;
    },
  },
});

export const { getLikeCount } = photoPageSlice.actions;

export default photoPageSlice.reducer;
