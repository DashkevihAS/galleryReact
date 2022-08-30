import { useEffect, useState } from 'react';
import { ACCESS_KEY } from '../api/const';

export const usePhoto = (id) => {
  const [photo, setPhoto] = useState([]);
  const token = localStorage.getItem('bearer');

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
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setPhoto(data));
  }, []);
  return [photo];
};

