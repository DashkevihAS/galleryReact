import style from './List.module.css';
import { PhotoCart } from './PhotoCart/PhotoCart';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  fetchPhotos,
  fetchPhotosByScroll,
} from '../../../store/photos/photosAction';
import Spinner from '../../../UI/Spinner/Spinner';
import { useAppDispatch } from '../../../store';

export const List: React.FC = () => {
  const endList = useRef<HTMLLIElement>(null);
  //@ts-ignore

  const photosData = useSelector((state) => state.photos.photos);
  const dispatch = useAppDispatch();
  //@ts-ignore

  const status = useSelector((state) => state.photos.status);
  // eslint-disable-next-line no-restricted-globals
  const code = new URLSearchParams(location.search).get('code');
  const isMounted = useRef(false);

  useEffect(() => {
    !code && dispatch(fetchPhotos());
  }, []);

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

    endList.current && observer.observe(endList.current);

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
            //@ts-ignore

            (arr, el) => (
              //@ts-ignore

              arr.find(({ id }) => el.id === id) || arr.push(el), arr
            ),
            [],
          )
          //@ts-ignore

          .map((photo) => <PhotoCart key={photo.id} photo={photo} />)}
      <li className={style.end} ref={endList} />
    </ul>
  );
};
