import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photo: [],
  status: '',
  error: {},
};

export const photoPageSlice = createSlice({
  name: 'photoPage',
  initialState,
  reducers: {
    photoPageRequest: (state) => {
      state.error = '';
      state.status = 'loading';
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
  },
});

export default photoPageSlice.reducer;
