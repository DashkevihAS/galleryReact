import style from './Like.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { photosUpdate } from '../../../../store/photos/photosSlice';
import { fetchLike } from '../../../../store/photoPage/photoPageAction';
import { useAppDispatch } from '../../../../store';

export const Like = () => {
  const { id } = useParams();
  //@ts-ignore

  const photo = useSelector((state) => state.photo.photo);
  const token = localStorage.getItem('bearer');
  const dispatch = useAppDispatch();
  //@ts-ignore

  const like = useSelector((state) => state.photo.like);

  return (
    <div className={style.photoLike}>
      {!token ? (
        <button className={style.hearthWithoutAuth}>&#9829;</button>
      ) : photo.liked_by_user ? (
        <button
          onClick={() => {
            //@ts-ignore
            dispatch(fetchLike(id));
            dispatch(photosUpdate());
          }}
          className={style.redHeart}
        >
          &#9829;
        </button>
      ) : (
        <button
          onClick={() => {
            //@ts-ignore

            dispatch(fetchLike(id));
            dispatch(photosUpdate());
          }}
          className={style.emptyHeart}
        >
          &#9829;
        </button>
      )}
      <span>{token ? photo.likes : like}</span>
    </div>
  );
};
