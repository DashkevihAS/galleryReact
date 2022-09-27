import { createSlice } from '@reduxjs/toolkit';
import { fetchLike, fetchPhoto } from './photoPageAction';

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
    // photoPageRequest: (state) => {
    //   state.error = '';
    //   state.status = 'loading';
    //   state.photo = [];
    // },
    // photoPageRequestSuccess: (state, action) => {
    //   state.photo = action.payload;
    //   state.error = '';
    //   state.status = 'loaded';
    // },
    // photoPageRequestError: (state, action) => {
    //   state.error = action.payload;
    //   state.status = 'error';
    // },
    // likeRequest: (state) => {
    //   state.errorLike = '';
    //   state.statusLike = 'loading';
    // },
    // likeRequestSuccess: (state, action) => {
    //   state.photo = { ...state.photo, ...action.payload.photo };
    //   state.errorLike = '';
    //   state.statusLike = 'loaded';
    // },
    // likeRequestError: (state, action) => {
    //   state.errorLike = action.payload;
    //   state.statusLike = 'error';
    // },
    getLikeCount: (state, action) => {
      state.like = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.pending, (state) => {
      state.error = '';
      state.status = 'loading';
      state.photo = [];
    });

    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
      state.error = '';
      state.status = 'loaded';
    });

    builder.addCase(fetchPhoto.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    });

    builder.addCase(fetchLike.pending, (state) => {
      state.errorLike = '';
      state.statusLike = 'loading';
    });

    builder.addCase(fetchLike.fulfilled, (state, action) => {
      state.photo = { ...state.photo, ...action.payload.photo };
      state.errorLike = '';
      state.statusLike = 'loaded';
    });

    builder.addCase(fetchLike.rejected, (state, action) => {
      state.errorLike = action.payload;
      state.statusLike = 'error';
    });
  },
});

export const { getLikeCount } = photoPageSlice.actions;

export default photoPageSlice.reducer;
