import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  like: '',
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likeUpdate: (state) => {
      state.like = !state.like;
    },
  },
});

export default likeSlice.reducer;
