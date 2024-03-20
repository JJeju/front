import { useEffect, useState } from 'react';
import { CookieStorage } from '../cookie';
import { COOKIE_ACCESS_TOKEN } from '@/config/constants';

// 로그인 상태를 확인하는 커스텀 훅
export function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 쿠키에서 토큰 값을 가져와서 로그인 상태를 확인
    const token = CookieStorage.getCookie('jeju_accs');

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [CookieStorage.getCookie('jeju_accs')]);

  return isLoggedIn;
}
