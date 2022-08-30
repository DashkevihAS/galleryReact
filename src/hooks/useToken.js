import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokenRequestAsync } from '../store/token/tokenActions';

export const useToken = (code) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenRequestAsync(code));
  }, []);
  return token;
};
