import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { setStatus } from './photosSlice';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (token, { getState, dispatch }) => {
    const page = getState().photos.page;
    const status = getState().photos.status;
    if (status === 'loading' || page > 1) return;
    dispatch(setStatus());
    if (!token) {
      return axios(
        `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&order_by=popular`,
      )
        .then(({ data }) => data)
        .catch((err) => err);
    } else {
      return axios(
        `https://api.unsplash.com/photos?page=${page}&per_page=30&order_by=popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(({ data }) => data)
        .catch((err) => err);
    }
  },
);

export const fetchPhotosByScroll = createAsyncThunk(
  'photos/fetchPhotosByScroll',
  (_, { getState }) => {
    const token = localStorage.getItem('bearer');
    const page = getState().photos.page;

    if (!token) {
      return axios(
        `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&order_by=popular`,
      )
        .then(({ data }) => data)
        .catch((err) => err);
    } else {
      return axios(
        `https://api.unsplash.com/photos?page=${page}&per_page=30&order_by=popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(({ data }) => data)
        .catch((err) => err);
    }
  },
);
