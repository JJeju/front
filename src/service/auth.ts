import { get } from 'http';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';
import { JoinRq, authCheckRq, loginRq, loginRs } from '../type/auth';
import axios from 'axios';
// import { cookieStorage } from '../utility/cookie';
// import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from '../config/constants';

const authApi = {
  // 로그인
  loginFn: async (data: loginRq): Promise<loginRs> => {
    const res = await axiosInstance.post('/loginProc', data);

    return res.data;
  },
  PostLogin: function () {
    return useMutation({ mutationFn: this.loginFn });
  },
  // 로그아웃
  logoutFn: async (): Promise<boolean> => {
    const res = await axiosInstance.get(`/member/logout`, {});
    // cookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
    // cookieStorage.removeCookie(COOKIE_REFRESH_TOKEN);
    return res.data;
  },
  GetLogout: function () {
    return useMutation({ mutationFn: this.logoutFn });
  },
  // 회원가입
  joinFn: async (data: JoinRq): Promise<string> => {
    const res = await axiosInstance.post(`/member/insert`, data);
    return res.data;
  },
  PostJoin: function () {
    return useMutation({ mutationFn: this.loginFn });
  },
  // 리프래쉬 토큰
  refreshTokenFn: async (data: string): Promise<string> => {
    const res = await axiosInstance.post('/member/refresh_token', data);
    return res.data;
  },
  PostRefreshToken: function () {
    return useMutation({ mutationFn: this.refreshTokenFn });
  },
  // 아이디 중복확인
  idCheckFn: async (data: string): Promise<boolean> => {
    const res = await axiosInstance.get(`/member/id_check?m_username=${data}`);
    return res.data;
  },
  GetIdCheck: function () {
    return useMutation({ mutationFn: this.idCheckFn });
  },
  // 닉네임 중복 확인
  nickNameCheckFn: async (data: string): Promise<boolean> => {
    const res = await axiosInstance.get(
      `/member/nick_check?m_nickname=${data}`
    );
    return res.data;
  },
  GetNickNameCheck: function () {
    return useMutation({ mutationFn: this.nickNameCheckFn });
  },
  // 인증 메시지 전송하기
  sendAuthMessageFn: async (data: string): Promise<boolean> => {
    const res = await axiosInstance.get(`/member/send_sms?phone_num=${data}`);
    return res.data;
  },
  GetSendAuthMessage: function () {
    return useMutation({ mutationFn: this.sendAuthMessageFn });
  },
  // 인증문자 확인
  authMessageCheckFn: async (data: authCheckRq): Promise<boolean> => {
    const res = await axiosInstance.post(`/member/cert_sms`, data);
    return res.data;
  },
  PostAuthMessageCheck: function () {
    return useMutation({ mutationFn: this.authMessageCheckFn });
  }
};

export default authApi;
