import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { photosSlice } from './photosSlice';

export const photosRequestAsync = () => (dispatch, getState) => {
  const token = localStorage.getItem('bearer');
  const status = getState().photos.status;
  const page = getState().photos.page;

  if (status === 'loading') return;
  dispatch(photosSlice.actions.photosRequest());

  if (!token) {
    axios(`https://api.unsplash.com/photos?page=${page}&per_page=${page < 3 ? 15 : 30}&order_by=popular`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    })
      .then(({ data }) => {
        dispatch(photosSlice.actions.photosRequestSuccess(data));
      })
      .catch(err => dispatch(photosSlice.actions.photosRequestError(err)));
  } else {
    axios(`https://api.unsplash.com/photos?page=${page}&per_page=${page < 3 ? 15 : 30}&order_by=latest`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(({ data }) => {
        dispatch(photosSlice.actions.photosRequestSuccess(data));
      })
      .catch(err => dispatch(photosSlice.actions.photosRequestError(err)));
  }
};
