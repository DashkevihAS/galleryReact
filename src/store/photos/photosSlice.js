import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos, fetchPhotosByScroll } from './photosAction';

const initialState = {
  photos: [],
  status: '',
  error: {},
  page: 1,
  token: '',
  search: '',
  fetchType: 'default',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosUpdate: (state) => {
      state.photos = [];
      state.page = 1;
    },
    setStatus: (state) => {
      state.status = 'loading';
    },
    tokenUpdate: (state, action) => {
      state.token = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
    setFetchType: (state, action) => {
      state.fetchType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.error = '';
      state.page = 1;
      state.photos = [];
    });

    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.error = '';
      state.status = 'loaded';
      state.page = 2;
    });

    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    });

    builder.addCase(fetchPhotosByScroll.pending, (state) => {
      state.error = '';
    });

    builder.addCase(fetchPhotosByScroll.fulfilled, (state, action) => {
      if (action.payload) {
        state.photos = [...state.photos, ...action.payload];
      }
      state.error = '';
      state.page += 1;
    });

    builder.addCase(fetchPhotosByScroll.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { photosUpdate, tokenUpdate, setStatus, setSearch, setFetchType } =
  photosSlice.actions;

export default photosSlice.reducer;
