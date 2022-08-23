import {
  API_URL_TOKEN,
  REDIRECT_URI,
  SECRET_KEY,
  ACCESS_KEY,
  GRANT_TYPE,
  CODE
} from './const';

const url = new URL(API_URL_TOKEN);

url.searchParams.append('client_id', ACCESS_KEY);
url.searchParams.append('client_secret', SECRET_KEY);
url.searchParams.append('redirect_uri', REDIRECT_URI);
url.searchParams.append('code', CODE);
url.searchParams.append('grant_type', GRANT_TYPE);

export const urlTokenParam = `${url.searchParams.toString()}`;

// {
//   'client_id': 'RsAgvX7aIapnoALkfM5cAHXoNWhn1ujD6V-soXcFTQE',
//   'client_secret': '131x1DILF_Lpoqf-z5xU9PTsYtU6f3Z1wCcul7scOTM',
//   'redirect_uri': 'http://192.168.100.4:3000/',
//   code,
//   'grant_type': 'authorization_code',
// }
