import { UPDATE_LIKE } from './likeActions';

const initialState = {
  like: '',
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIKE:
      return {
        ...state,
        like: action,
      };
    default:
      return state;
  }
};
