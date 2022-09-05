import style from './Like.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { likeRequestAsync } from '../../../../store/photoPage/photoPageAction';
import { photosUpdate } from '../../../../store/photos/photosSlice';


export const Like = () => {
  const { id } = useParams();
  const photo = useSelector(state => state.photo.photo);
  const token = localStorage.getItem('bearer');
  const dispatch = useDispatch();

  return (
    <div className={style.photoLike}>
      {!token ?
        <button
          className={style.hearthWithoutAuth}
          href="">&#9829;</button> :
      photo.liked_by_user ?
        <button
          onClick={() => {
            dispatch(likeRequestAsync(id));
            dispatch(photosUpdate());
          }}
          className={style.redHeart}
          href="">&#9829;
        </button> :
        <button
          onClick={() => {
            dispatch(likeRequestAsync(id));
            dispatch(photosUpdate());
          }}
          className={style.emptyHeart}
          href="">&#9829;</button>
      }
      <span>{photo.likes}</span>
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