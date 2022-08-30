import {
  TOKEN_REQUEST,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_ERROR,
  UPDATE_TOKEN,
} from './tokenActions';

const initialState = {
  token: '',
  error: '',
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action,
        error: '',
      };
    case TOKEN_REQUEST:
      return {
        ...state,
        error: '',
      };
    case TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        token: action,
        error: '',
      };
    case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
