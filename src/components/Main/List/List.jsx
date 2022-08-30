import style from './List.module.css';
import { PhotoCart } from './PhotoCart/PhotoCart';
import { usePhotos } from '../../../hooks/usePhotos';

export const List = () => {
  const [photos] = usePhotos();

  return (
    <ul className={style.wrapper}>
      {photos.map(photo => (
        <PhotoCart key={photo.id} photo={photo}/>
      ))}
    </ul>
  );
};
