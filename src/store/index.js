import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../store/photos/photosSlice';
import { tokenReducer } from '../store/token/tokenReducer';
import { authReducer } from './auth/authReducer';
// import { tokenMiddleware } from './token/tokenActions';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    photos: photosReducer,

  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(tokenMiddleware)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

