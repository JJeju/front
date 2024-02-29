// import { useState, useEffect } from 'react';
// import { cookieStorage } from '../cookie';

// export function useIsLogin() {
//   // useState의 초기 상태를 설정할 때 쿠키를 확인
//   const cookie = cookieStorage.getCookie('jeju_accs');
//   const [isLogin, setIsLogin] = useState(!!cookie);

//   useEffect(() => {
//     // 토큰값을 가져오는 로직
//     const cookie = cookieStorage.getCookie('jeju_accs');

//     // 토큰값이 존재하면 로그인 상태로 설정
//     if (cookie) {
//       setIsLogin(true);
//     } else {
//       setIsLogin(false);
//     }
//   }, [cookie]);

//   return isLogin;
// }
