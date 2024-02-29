import { get } from 'http';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';
import { JoinRq, loginRq, loginRs } from '../type/auth';
import axios from 'axios';
// import { cookieStorage } from '../utility/cookie';
// import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from '../config/constants';

// 로그인
const POST_LOGIN = 'loginProc';

// 리프래쉬 토큰
const POST_REFRESH_TOKEN = 'member/refresh_token';

// 로그아웃
const GET_LOGOUT = 'member/logout';

// 회원가입
const POST_JOIN = 'member/insert';

const authApi = {
  postloginkey: POST_LOGIN,
  loginFn: async (data: loginRq): Promise<loginRs> => {
    const res = await axiosInstance.post(`/${POST_LOGIN}`, data);

    return res.data;
  },
  PostLogin: function () {
    return useMutation({ mutationFn: this.loginFn });
  },
  postlogoutkey: GET_LOGOUT,
  logoutFn: async (): Promise<any> => {
    const res = await axiosInstance.get(`/member/logout`, {});
    // cookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
    // cookieStorage.removeCookie(COOKIE_REFRESH_TOKEN);
    return res.data;
  },
  GetLogout: function () {
    return useMutation({ mutationFn: this.logoutFn });
  },
  //     postrefreshTokenkey: POST_REFRESH_TOKEN,
  //     refreshTokenFn: async (data: string): Promise<[]> => {
  //         const res = await axiosInstance.post('/member/refresh_token', data);
  //         return res.data;
  joinFn: async (data: JoinRq): Promise<string> => {
    const res = await axiosInstance.post(`/${POST_JOIN}`, data);
    return res.data;
  },
  PostJoin: function () {
    return useMutation({ mutationFn: this.loginFn });
  }
};

export default authApi;
