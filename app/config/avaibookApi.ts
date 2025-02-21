import axios from 'axios';

export const avaibookApi = axios.create({
  baseURL: 'https://api.avaibook.com/api/owner',
  headers: {
    'Content-Type': 'application/json',
    'X-AUTH-TOKEN': process.env.NEXT_PUBLIC_X_AUTH_TOKEN,
    Accept: 'application/json',
  },
});
