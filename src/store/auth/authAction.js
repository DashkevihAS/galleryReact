import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthData = createAsyncThunk(
  'auth/fetchAuthData',
  async (token) => {
    if (!token) return;
    const { data } = await axios(`https://api.unsplash.com/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
);
