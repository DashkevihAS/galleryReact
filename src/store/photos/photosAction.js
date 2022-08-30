import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { photosSlice } from './photosSlice';

export const photosRequestAsync = () => (dispatch, getState) => {
  // const token = getState().token.token;
  const token = localStorage.getItem('bearer');

  console.log('token', token);
  console.log('ACCESS_KEY', ACCESS_KEY);
  dispatch(photosSlice.actions.photosRequest());
  if (!token) {
    axios('https://api.unsplash.com/photos?per_page=30&order_by=popular', {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    })
      .then(({ data }) => {
        dispatch(photosSlice.actions.photosRequestSuccess(data));
      })
      .catch(err => dispatch(photosSlice.actions.photosRequestError(err)));
  }
  axios('https://api.unsplash.com/photos?per_page=30&order_by=popular', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(({ data }) => {
      dispatch(photosSlice.actions.photosRequestSuccess(data));
    })
    .catch(err => dispatch(photosSlice.actions.photosRequestError(err)));
};
