import { useEffect, useState } from 'react';


export const useAuth = (token) => {
  const [authData, setAuthData] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('bearer')}`
      },
    })
      .then(res => res.json())
      .then(data => setAuthData(data));
  }, []);
  return [authData];
};
