import axios, { AxiosInstance, AxiosResponse } from 'axios';
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
    // console.log('여기타니>>>', response);

    return response;
  },
  async error => {
    if (error.response.status === 401) {
      try {
        // 토큰 갱신 요청
        const refreshToken = CookieStorage.getCookie(COOKIE_REFRESH_TOKEN);
        const res = await axios.post(`${API_URL}/member/refresh_token`, {
          refresh_token: refreshToken
        });

        console.log('>>>', res);
        // 토큰 갱신 성공
        if (res.status === 200) {
          const newAccessToken = res.data.access_token;
          // 갱신된 액세스 토큰으로 요청 재시도
          error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(error.config);
        }
      } catch (refreshError) {
        console.log('>>>', refreshError);
        // 토큰 갱신 실패 혹은 다른 에러 처리
        // 토큰 갱신 실패로 인한 로그인 페이지로 이동
        const router = useRouter();
        const { logout } = useUserIdStore();
        CookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
        CookieStorage.removeCookie(COOKIE_REFRESH_TOKEN);
        logout(false);
        redirect('/');
        console.error('토큰 갱신 실패:', refreshError);
      }
    }

    // 다른 오류의 경우 기존 에러 반환
    return Promise.reject(error);
  }
);

export default axiosInstance;
