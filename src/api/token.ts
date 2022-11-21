import {
  API_URL_TOKEN,
  REDIRECT_URI,
  SECRET_KEY,
  ACCESS_KEY,
  GRANT_TYPE,
} from './const';

export const getTokenUrl = (code: string) => {
  const url = new URL(API_URL_TOKEN);

  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('client_secret', SECRET_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code', code);
  url.searchParams.append('grant_type', GRANT_TYPE);

  return `${API_URL_TOKEN}${url.searchParams.toString()}`;
};

export const setToken = (token: string) => {
  localStorage.setItem('bearer', token);
};
export const delToken = () => {
  setToken('');
};
