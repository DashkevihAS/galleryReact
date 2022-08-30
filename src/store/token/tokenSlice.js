// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   token: '',
//   status: '',
//   error: '',
// };

// export const tokenSlice = createSlice({
//   name: 'token',
//   initialState,
//   reducers: {
//     tokenRequest: (state) => {
//       state.error = '';
//       state.status = 'loading';
//     },
//     tokenRequestSuccess: (state, action) => {
//       state.token = action.payload.access_token;
//       state.error = '';
//       state.status = 'loaded';
//     },
//     tokenRequestError: (state, action) => {
//       state.error = action.error;
//       state.status = 'error';
//     },
//   },
// });

// export default tokenSlice.reducer;
