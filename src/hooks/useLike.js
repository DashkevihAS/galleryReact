import { useState } from 'react';

export const useLike = (id, isLiked) => {
  const [likeData, setLikeData] = useState([]);

  !isLiked ?
    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('bearer')}`
      },
    })
      .then(res => res.json())
      .then(data => setLikeData(data)) :

    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('bearer')}`
      },
    })
      .then(res => res.json())
      .then(data => setLikeData(data));
  return [likeData];
};
