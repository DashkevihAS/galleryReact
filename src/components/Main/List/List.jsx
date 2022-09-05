import style from './List.module.css';
import { PhotoCart } from './PhotoCart/PhotoCart';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../../../store/photos/photosAction';
import Spinner from '../../../UI/Spinner/Spinner';

export const List = () => {
  const endList = useRef(null);
  const photosData = useSelector(state => state.photos.photos);
  const status = useSelector(state => state.photos.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(photosRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <ul className={style.wrapper}>
      {status === 'loading' ?
        <Spinner /> :
        photosData && photosData.map(photo => (
          <PhotoCart key={photo.id} photo={photo}/>
        ))
      }
      <li className={style.end} ref={endList}/>
    </ul>
  );
};
