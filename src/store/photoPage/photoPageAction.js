import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';

export const fetchPhoto = createAsyncThunk(
  'photo/fetchPhoto',
  (id, { rejectWithValue }) => {
    const token = localStorage.getItem('bearer');

    if (!token) {
      return axios(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })
        .then(({ data }) => data)
        .catch((err) => rejectWithValue(err));
    } else {
      return axios(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => data)
        .catch((err) => rejectWithValue(err));
    }
  },
);

export const fetchLike = createAsyncThunk(
  'like/fetchLike',
  (id, { getState, rejectWithValue }) => {
    const isLiked = getState().photo.photo.liked_by_user;
    const token = localStorage.getItem('bearer');

    if (!isLiked) {
      return axios(`https://api.unsplash.com/photos/${id}/like`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => data)
        .catch((err) => err);
    } else {
      return axios(`https://api.unsplash.com/photos/${id}/like`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => data)
        .catch((err) => rejectWithValue(err));
    }
  },
);
