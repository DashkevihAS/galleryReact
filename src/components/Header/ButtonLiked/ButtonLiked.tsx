import React from 'react';
import style from './ButtonLiked.module.css';
import heart from '../../../UI/heart_PNG51258 2.png';
import { useNavigate } from 'react-router';
import { setFetchType } from '../../../store/photos/photosSlice';
import { fetchPhotos } from '../../../store/photos/photosAction';
import { useAppDispatch } from '../../../store';

export const ButtonLiked: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const getLikedPhoto = (): void => {
    navigate(`/likes`);
    dispatch(setFetchType('likes'));
    dispatch(fetchPhotos());
  };
  return (
    <button className={style.button} onClick={getLikedPhoto}>
      <span>my</span>
      <img className={style.heart} src={heart} alt='heart' />
    </button>
  );
};
