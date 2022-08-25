import { useEffect, useState } from 'react';

export const useLike = (id) => {
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('bearer')}`
      },
    })
      .then(res => res.json())
      .then(data => setLikeData(data));
  }, []);
  return [likeData];
};
