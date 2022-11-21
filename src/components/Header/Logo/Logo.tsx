import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { fetchPhotos } from '../../../store/photos/photosAction';
import { setFetchType, setSearch } from '../../../store/photos/photosSlice';
import style from './Logo.module.css';

export const Logo: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClickHome = (): void => {
    dispatch(setSearch(''));
    dispatch(setFetchType('default'));
    dispatch(fetchPhotos());
  };
  return (
    <Link className={style.logo} to={`/`} onClick={handleClickHome}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 24 24'
        viewBox='0 0 24 24'
      >
        <path
          d='M16.5 17.25h-9v-6.75h-7.5v13.5h24v-13.5h-7.5zM7.5
        0h9v6.75h-9z'
        />
      </svg>
    </Link>
  );
};
