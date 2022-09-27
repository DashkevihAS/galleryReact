import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthData = createAsyncThunk(
  'auth/fetchAuthData',
  (token, { rejectWithValue }) => {
    if (!token) return;
    return axios(`https://api.unsplash.com/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => data)
      .catch((err) => rejectWithValue(err));
  },
);
