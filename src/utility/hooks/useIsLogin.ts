import { useEffect, useState } from 'react';
import { CookieStorage } from '../cookie';
import { COOKIE_ACCESS_TOKEN } from '@/config/constants';

export function useIsLoggedIn() {
  // useState 초기화시 쿠키 확인
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 쿠키에서 토큰 값을 가져와서 로그인 상태를 확인
    const token = CookieStorage.getCookie('jeju_accs');

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return isLoggedIn;
}
