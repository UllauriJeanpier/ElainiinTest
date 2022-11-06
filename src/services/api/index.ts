import axios from 'axios';
import { CONFIG } from '../../utils/config';

const pokeApi = axios.create({
  baseURL: CONFIG.API.url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // timeout: 60000,
  timeout: 1000,
  timeoutErrorMessage:
    'Hubo un problema en la conexión por favor vuelva a intentarlo',
});

pokeApi.interceptors.response.use(
  async response => response,
  async error => {
    return Promise.reject({
      code: error.code,
      message: error.message,
    });
  }
);

export default pokeApi;
