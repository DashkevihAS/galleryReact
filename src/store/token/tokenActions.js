import { getTokenUrl } from '../../api/token';
import axios from 'axios';

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const updateToken = (data) => ({
  type: UPDATE_TOKEN,
  data,
});

export const tokenRequest = () => ({
  type: TOKEN_REQUEST,
});

export const tokenRequestSuccess = (data) => ({
  type: TOKEN_REQUEST_SUCCESS,
  data,
});

export const tokenRequestError = (error) => ({
  type: TOKEN_REQUEST_ERROR,
  error,
});

export const tokenRequestAsync = (code) => (dispatch, getState) => {
  const tokenUrl = getTokenUrl(code);
  console.log(code);
  console.log(tokenUrl);
  if (!code) return '';
  dispatch(tokenRequest());

  axios(tokenUrl, {
    method: 'POST'
  })
    .then(({ data }) => dispatch(tokenRequestSuccess(data)))
    .catch(err => dispatch(tokenRequestError(err)));
};

// export const tokenMiddleware = store => next => action => {
//   if (action.type === UPDATE_TOKEN) {
//     setToken(action.token);
//   }

//   next(action);
// };


