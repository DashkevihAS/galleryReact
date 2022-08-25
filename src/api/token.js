import { useEffect, useState } from 'react';
import {
  API_URL_TOKEN,
  REDIRECT_URI,
  SECRET_KEY,
  ACCESS_KEY,
  GRANT_TYPE,
} from './const';

export const getTokenUrl = (code) => {
  const url = new URL(API_URL_TOKEN);

  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('client_secret', SECRET_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code', code);
  url.searchParams.append('grant_type', GRANT_TYPE);

  return `${API_URL_TOKEN}${url.searchParams.toString()}`;
};

export const setToken = (token, code) => {
  localStorage.setItem('bearer', token);
  localStorage.setItem('authCode', code);
};

export const getToken = () => {
  const code = new URLSearchParams(location.search)
    .get('code');
  const [tokenData, setTokenData] = useState({});

  const tokenUrl = getTokenUrl(code);

  if (!code) return;

  if (code !== localStorage.getItem('authCode')) {
    localStorage.removeItem('bearer');
  }

  if (localStorage.getItem('bearer')) {
    return (localStorage.getItem('bearer'));
  }

  useEffect(() => {
    fetch(tokenUrl, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => setTokenData(data));
  }, []);
  const token = tokenData.access_token;

  token && setToken(token, code);

  return token;
};
