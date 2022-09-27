import style from './List.module.css';
import { PhotoCart } from './PhotoCart/PhotoCart';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPhotos,
  fetchPhotosByScroll,
} from '../../../store/photos/photosAction';
import Spinner from '../../../UI/Spinner/Spinner';

export const List = () => {
  const endList = useRef(null);
  const photosData = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.photos.status);
  const token = localStorage.getItem('bearer');
  const code = new URLSearchParams(location.search).get('code');
  const isMounted = useRef(false);
  isMounted.current = false;

  useEffect(() => {
    !code && dispatch(fetchPhotos(token));
  }, [token]);

  useEffect(() => {
    if (!photosData) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !code && isMounted.current) {
          dispatch(fetchPhotosByScroll());
        }
        isMounted.current = true;
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <ul className={style.wrapper}>
      {status === 'loading' && <Spinner />}
      {photosData &&
        photosData
          .reduce(
            (arr, el) => (
              arr.find(({ id }) => el.id === id) || arr.push(el), arr
            ),
            [],
          )
          .map((photo) => <PhotoCart key={photo.id} photo={photo} />)}
      <li className={style.end} ref={endList} />
    </ul>
  );
};
