import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  API_URL,
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN
} from '../config/constants';
import { CookieStorage } from './cookie';
import authApi from '@/service/auth';
import { on } from 'events';
import useUserIdStore from '@/stores/auth';
import { useRouter } from 'next/router';

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

    return response;
  },
  async error => {
    const router = useRouter();
    const { status } = error.response as AxiosResponse;
    if (status === 401) {
      try {
        const res = await axios.post(
          `${API_URL}/member/refresh_token`, // token refresh api
          { refresh_token: CookieStorage.getCookie(COOKIE_REFRESH_TOKEN) }
        );
      } catch (error) {
        const { setIsLogin } = useUserIdStore();

        CookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
        CookieStorage.removeCookie(COOKIE_REFRESH_TOKEN);

        setIsLogin(false);
        router.push('/');
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
