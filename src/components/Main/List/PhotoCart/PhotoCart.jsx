import React from 'react';
import style from './PhotoCart.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import heart from '../../../../UI/heart_PNG51258.png';
import { getLikeCount } from '../../../../store/photoPage/photoPageSlice';
import { useDispatch } from 'react-redux';

export const PhotoCart = ({ photo }) => {
  const dispatch = useDispatch();
  return (
    <>
      {photo.urls.thumb ?
        <li className={style.photoCart}>
          <Link
            onClick={() => dispatch(getLikeCount(photo.likes))}
            className={style.linkPost}
            to={`/${photo.id}`}></Link>
          <img
            src={photo.urls.thumb}
            alt={photo.alt_description}
            width={200} height={300} />
          <a
            className={style.author}
            href={photo.user.links.html}>{photo.user.name}
          </a>
          <time
            className={style.date}
            dateTime={photo.created_at}
          >
            {photo.created_at.substring(0, 10)}
          </time>
          <div className={style.like}>
            <img className={style.heart} src={heart} alt="" />
            <span>{photo.likes}</span>
          </div>
        </li> : null
      }
    </>
  );
};


PhotoCart.propTypes = {
  photo: PropTypes.object,
};
