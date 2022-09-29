import React from 'react';
import style from './ButtonLiked.module.css';
import heart from '../../../UI/heart_PNG51258 2.png';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setFetchType } from '../../../store/photos/photosSlice';
import { fetchPhotos } from '../../../store/photos/photosAction';

export const ButtonLiked = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('bearer');
  const getLikedPhoto = () => {
    navigate(`/likes`);
    dispatch(setFetchType('likes'));
    dispatch(fetchPhotos());

    axios(
      `https://api.unsplash.com/users/dashkevichas/likes?page=1&per_page=30`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then(({ data }) => console.log(data));
  };
  return (
    <button className={style.button} onClick={getLikedPhoto}>
      <span>my</span>
      <img className={style.heart} src={heart} alt='heart' />
    </button>
  );
};
