import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { setStatus } from './photosSlice';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  (token, { getState, dispatch, rejectWithValue }) => {
    const page = getState().photos.page;
    const status = getState().photos.status;
    const search = getState().photos.search;

    if (status === 'loading' || page > 1) return;
    dispatch(setStatus());
    if (!token) {
      return axios(
        !search
          ? `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&order_by=popular`
          : `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&query=${search}`,
      )
        .then(({ data }) => {
          if (search) {
            return data.results;
          }
          return data;
        })
        .catch((err) => rejectWithValue(err));
    } else {
      return axios(
        !search
          ? `https://api.unsplash.com/photos?page=${page}&per_page=30&order_by=popular`
          : `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(({ data }) => {
          if (search) {
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

    if (!token) {
      return axios(
        !search
          ? `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&order_by=popular`
          : `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=30&query=${search}`,
      )
        .then(({ data }) => {
          if (search) {
            return data.results;
          }
          return data;
        })
        .catch((err) => rejectWithValue(err));
    } else {
      return axios(
        !search
          ? `https://api.unsplash.com/photos?page=${page}&per_page=30&order_by=popular`
          : `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(({ data }) => {
          if (search) {
            return data.results;
          }
          return data;
        })
        .catch((err) => err);
    }
  },
);
