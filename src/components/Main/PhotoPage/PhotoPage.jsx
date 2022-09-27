import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Like } from './Like/Like';
import style from './Photo.module.css';
import Spinner from '../../../UI/Spinner/Spinner';
import { fetchPhoto } from '../../../store/photoPage/photoPageAction';
import { Error } from '../Error/Error';

export const Photo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo.photo);
  const status = useSelector((state) => state.photo.status);

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id]);
  return (
    <div className={style.photoPage}>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <Error />
      ) : (
        !Array.isArray(photo) && (
          <>
            <img
              className={style.image}
              src={photo.urls.full}
              alt={photo.alt_description}
            />
            <div className={style.photoInfo}>
              <a className={style.author} href={photo.user.links.html}>
                {photo.user.name}
              </a>
              <time className={style.date} dateTime={photo.created_at}>
                {photo.created_at.substring(0, 10)}
              </time>
              <Like id={id} photo={photo} />
            </div>
            <Link className={style.back} to='/'>
              На главную
            </Link>
          </>
        )
      )}
    </div>
  );
};
