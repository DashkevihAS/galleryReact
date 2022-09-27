import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../store/photos/photosSlice';
import photoPageReducer from '../store/photoPage/photoPageSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    photos: photosReducer,
    photo: photoPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
