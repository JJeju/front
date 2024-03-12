'use client';
import axios, { AxiosInstance } from 'axios';
import {
  API_URL,
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN
} from '../config/constants';
import { CookieStorage } from './cookie';
import authApi from '@/service/auth';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers['Accept-Language'] = 'ko_KR';
    // config.headers['Cache-Control'] = 'no-cache';
    // config.headers['Content-Type'] = 'application/json';

    const type = 'Bearer';
    const accessToken = CookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

    if (accessToken) {
      config.headers['Authorization'] = `${type} ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    // const { data } = authApi.PostRefreshToken(
    //   CookieStorage.getCookie(COOKIE_REFRESH_TOKEN)
    // );
    // console.log('>>', data);
    return response;
  },
  error => {
    console.log('error>>', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
