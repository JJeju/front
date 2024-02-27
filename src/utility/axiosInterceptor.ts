import axios, { AxiosInstance } from 'axios';
import { API_URL, COOKIE_ACCESS_TOKEN } from '../config/constants';
import { cookieStorage } from './cookie';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers['Accept-Language'] = 'ko_KR';
    // config.headers['Content-Type'] = 'application/json';

    const type = 'Bearer';
    const accessToken = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

    if (accessToken) {
      config.headers['Authorization'] = `${type} ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('res>>', response);
    return response;
  },
  (error) => {
    console.log('error>>', error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
