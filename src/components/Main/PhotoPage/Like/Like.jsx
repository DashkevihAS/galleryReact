import React, { useState } from 'react';
import style from './Like.module.css';
import PropTypes from 'prop-types';


export const Like = ({ photo }) => {
  const id = photo.id;
  const [likeData, setLikeData] = useState([]);
  const token = localStorage.getItem('bearer');

  const newPhoto = {
    ...photo, ...likeData.photo
  };
  const isLiked = newPhoto.liked_by_user;

  const handleLike = () => {
    !isLiked ?
    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => setLikeData(data)) :

    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => setLikeData(data));
  };

  return (
    <div className={style.photoLike}>
      {!token ?
        <button
          className={style.hearthWithoutAuth}
          href="">&#9829;</button> :
      newPhoto.liked_by_user ?
        <button
          onClick={handleLike}
          className={style.redHeart}
          href="">&#9829;</button> :
        <button
          onClick={handleLike}
          className={style.emptyHeart}
          href="">&#9829;</button>
      }
      <span>{newPhoto.likes}</span>
    </div>
  );
};

Like.propTypes = {
  id: PropTypes.string,
  photo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ])
};
