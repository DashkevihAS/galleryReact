import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = localStorage.getItem('bearer');

  if (!token) return;
  dispatch(authRequest());
  axios(`https://api.unsplash.com/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
    .then(({ data }) => {
      dispatch(authRequestSuccess(data));
    })
    .catch((err) => {
      dispatch(authRequestError(err.message));
    });
};
