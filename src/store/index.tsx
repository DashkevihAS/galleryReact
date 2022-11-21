import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photos/photosSlice';
import photoPageReducer from './photoPage/photoPageSlice';
import authReducer from './auth/authSlice';
import { useDispatch } from 'react-redux';

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

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
