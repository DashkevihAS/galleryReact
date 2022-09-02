import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../store/photos/photosSlice';
import photoPageReducer from '../store/photoPage/photoPageSlice';
import { authReducer } from './auth/authReducer';
import likeReducer from '../store/like/likeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    photos: photosReducer,
    photo: photoPageReducer,
    like: likeReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

