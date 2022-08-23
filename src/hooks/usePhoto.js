import { useEffect, useState } from 'react';
import { ACCESS_KEY } from '../api/const';

export const usePhoto = (id) => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => setPhoto(data));
  }, []);
  return [photo];
};
