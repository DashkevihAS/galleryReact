import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../store/photos/photosAction';

export const usePhotosRedux = () => {
  const photosData = useSelector(state => state.photos.photos);
  const token = localStorage.getItem('bearer');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosRequestAsync());
  }, [token]);
  return [photosData];
};
