import { useState } from 'react';
import { CookieStorage } from '../cookie';
import { COOKIE_ACCESS_TOKEN } from '@/config/constants';

// 로그인 상태를 확인하는 커스텀 훅
export function useIsLoggedIn() {
  // 쿠키에서 토큰 값을 가져와서 로그인 상태를 확인
  const token = CookieStorage.getCookie(COOKIE_ACCESS_TOKEN);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  return isLoggedIn;
}
