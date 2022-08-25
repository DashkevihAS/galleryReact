import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useLike } from '../../../hooks/useLike';
import { usePhoto } from '../../../hooks/usePhoto';
import style from './Photo.module.css';

export const Photo = () => {
  const { id } = useParams();
  const [photo] = usePhoto(id);
  const [isLiked, setIsLiked] = useState(false);

  const [likeData] = useLike(id);
  console.log(likeData);
  console.log('photo', photo);
  const handleLiked = () => {
    setIsLiked(!isLiked);
  };
  const handleUnLiked = () => {
    setIsLiked(!isLiked);
  };

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
              {isLiked ?
                <button
                  onClick={handleUnLiked}
                  className={style.redHeart}
                  href="">&#9829;</button> :
                <button
                  onClick={handleLiked}
                  className={style.emptyHeart}
                  href="">&#9829;</button>
              }
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
