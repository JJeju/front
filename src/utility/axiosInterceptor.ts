import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios';
import {
  API_URL,
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN
} from '../config/constants';
import { CookieStorage } from './cookie';
import useUserIdStore from '@/stores/auth';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.headers['Accept-Language'] = 'ko_KR';

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
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axiosInstance(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = CookieStorage.getCookie(COOKIE_REFRESH_TOKEN);

      try {
        const {
          data: { access_token }
        } = await axiosInstance.post(`/api/member/refresh_token`, {
          refresh_token: refreshToken
        });

        CookieStorage.setCookie(COOKIE_ACCESS_TOKEN, access_token);
        axiosInstance.defaults.headers.common['Authorization'] =
          'Bearer ' + access_token;
        processQueue(null, access_token);
        return axiosInstance(originalRequest);
      } catch (refreshError: any) {
        processQueue(refreshError, null);

        const router = useRouter();
        const { logout } = useUserIdStore();
        CookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
        CookieStorage.removeCookie(COOKIE_REFRESH_TOKEN);
        logout(false);
        redirect('/');
        console.error('토큰 갱신 실패:', refreshError);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
