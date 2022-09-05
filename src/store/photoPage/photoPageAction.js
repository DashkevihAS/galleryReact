import axios from 'axios';
import { ACCESS_KEY } from '../../api/const';
import { photoPageSlice } from './photoPageSlice';

export const photoRequestAsync = (id) => (dispatch) => {
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


export const likeRequestAsync = (id) => (dispatch, getState) => {
  const isLiked = getState().photo.photo.liked_by_user;
  const token = localStorage.getItem('bearer');
  console.log('isLiked', isLiked);
  dispatch(photoPageSlice.actions.likeRequest());
  if (!isLiked) {
    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(photoPageSlice.actions.likeRequestSuccess(data));
      });
  } else {
    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(photoPageSlice.actions.likeRequestSuccess(data));
      });
  }
};

