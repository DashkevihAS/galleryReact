import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { photoRequestAsync } from '../../../store/photoPage/photoPageAction';
import { Like } from './Like/Like';
import style from './Photo.module.css';

export const Photo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const photoData = useSelector(state => state.photo.photo);

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, []);

  return (
    <div className={style.photoPage}>
      {!Array.isArray(photoData) &&
        <>
          <img
            className={style.image}
            src={photoData.urls.full} alt={photoData.alt_description}
          />
          <div className={style.photoInfo}>
            <a
              className={style.author}
              href={photoData.user.links.html}>{photoData.user.name}
            </a>
            <time
              className={style.date}
              dateTime={photoData.created_at}
            >
              {photoData.created_at.substring(0, 10)}
            </time>
            <Like id={id} photo={photoData}/>
          </div>
          <Link className={style.back} to='/'>
            На главную
          </Link>
        </>
      }
    </div>
  );
};
