import { useEffect, useState } from 'react';
import { ACCESS_KEY } from '../api/const';

export const usePhoto = (id) => {
  const [photo, setPhoto] = useState([]);

  if (!localStorage.getItem('bearer')) {
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
  }
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('bearer')}`
      }
    })
      .then(res => res.json())
      .then(data => setPhoto(data));
  }, []);
  console.log('token photo');
  return [photo];
};

