import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { usePhoto } from '../../../hooks/usePhoto';
import style from './Photo.module.css';

export const Photo = () => {
  const { id } = useParams();
  const [photo] = usePhoto(id);
  return (
    <div className={style.photoPage}>
      {!Array.isArray(photo) &&
        <>
          <img
            className={style.image}
            src={photo.urls.full} alt={photo.alt_description}
          />
          <div className={style.photoInfo}>
            <a
              className={style.author}
              href={photo.user.links.self}>{photo.user.name}
            </a>
            <time
              className={style.date}
              dateTime={photo.created_at}
            >
              {photo.created_at.substring(0, 10)}
            </time>
            <div className={style.photoLike}>
              <button className={style.emptyHeart} href="">&#9829;</button>
              <button className={style.redHeart} href="">&#9829;</button>
              <span>{photo.likes}</span>
            </div>
          </div>
          <Link className={style.back} to='/'>
            На главную
          </Link>
        </>
      }
    </div>
  );
};
