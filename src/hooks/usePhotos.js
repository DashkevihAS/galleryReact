import { useEffect, useState } from 'react';
import { ACCESS_KEY } from '../api/const';

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  if (!localStorage.getItem('bearer')) {
    useEffect(() => {
      fetch('https://api.unsplash.com/photos?per_page=30&order_by=popular', {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        }
      })
        .then(res => res.json())
        .then(data => setPhotos(data));
    }, []);
    return [photos];
  }
  useEffect(() => {
    fetch('https://api.unsplash.com/photos?per_page=30&order_by=popular', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('bearer')}`
      }
    })
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);
  console.log('token');
  return [photos];
};

