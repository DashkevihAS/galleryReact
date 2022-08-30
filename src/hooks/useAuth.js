import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequestAsync } from '../store/auth/authAction';

export const useAuth = () => {
  const authData = useSelector(state => state.auth.data);
  const token = localStorage.getItem('bearer');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);
  return [authData];
};
