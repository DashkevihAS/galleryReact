import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { photoPageSlice } from './photoPageSlice';

export const photoRequestAsync = (id) => (dispatch, getState) => {
  const token = localStorage.getItem('bearer');
  dispatch(photoPageSlice.actions.photoPageRequest());

  if (!token) {
    axios(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    })
      .then(({ data }) => {
        dispatch(photoPageSlice.actions.photoPageRequestSuccess(data));
      })
      .catch(err =>
        dispatch(photoPageSlice.actions.photoPageRequestError(err)));
  } else {
    axios(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(({ data }) => {
        dispatch(photoPageSlice.actions.photoPageRequestSuccess(data));
      })
      .catch(err =>
        dispatch(photoPageSlice.actions.photoPageRequestError(err)));
  }
};
