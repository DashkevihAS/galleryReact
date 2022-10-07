import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { setStatus } from './photosSlice';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  (_, { getState, dispatch, rejectWithValue }) => {
    const page = getState().photos.page;
    const status = getState().photos.status;
    const search = getState().photos.search;
    const type = getState().photos.fetchType;
    const { username } = getState().auth.data;
    const token = localStorage.getItem('bearer');

    if (status === 'loading' || page > 1) return;
    dispatch(setStatus());
    if (!token) {
      return axios(
        type === 'search'
          ? `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&query=${search}`
          : type === 'likes'
          ? `https://api.unsplash.com/users/${username}/likes?page=${page}&per_page=30`
          : `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&order_by=popular`,
      )
        .then(({ data }) => {
          if (type === 'search') {
            return data.results;
          }
          return data;
        })
        .catch((err) => rejectWithValue(err));
    } else {
      return axios(
        type === 'search'
          ? `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&query=${search}`
          : type === 'likes'
          ? `https://api.unsplash.com/users/${username}/likes?page=${page}&per_page=30`
          : `https://api.unsplash.com/photos?&page=${page}&per_page=30&order_by=popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(({ data }) => {
          if (type === 'search') {
            return data.results;
          }
          return data;
        })
        .catch((err) => rejectWithValue(err));
    }
  },
);

export const fetchPhotosByScroll = createAsyncThunk(
  'photos/fetchPhotosByScroll',
  (_, { getState, rejectWithValue }) => {
    const token = localStorage.getItem('bearer');
    const page = getState().photos.page;
    const search = getState().photos.search;
    const status = getState().photos.status;
    const type = getState().photos.fetchType;
    const { username } = getState().auth.data;

    if (status === 'loading') return;
    if (!token) {
      return axios(
        type === 'search'
          ? `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&query=${search}`
          : type === 'likes'
          ? `https://api.unsplash.com/users/${username}/likes?page=${page}&per_page=30`
          : `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&order_by=popular`,
      )
        .then(({ data }) => {
          if (type === 'search') {
            return data.results;
          }
          return data;
        })
        .catch((err) => rejectWithValue(err));
    } else {
      return axios(
        type === 'search'
          ? `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&query=${search}`
          : type === 'likes'
          ? `https://api.unsplash.com/users/${username}/likes?page=${page}&per_page=30`
          : `https://api.unsplash.com/photos?&page=${page}&per_page=30&order_by=popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(({ data }) => {
          if (type === 'search') {
            return data.results;
          }
          return data;
        })
        .catch((err) => err);
    }
  },
);
