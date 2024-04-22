import Cookies from 'js-cookie';

const CookieStorageBuilder = (cookies: any) => ({
  setCookie: (key: string, value: string, options?: any) =>
    cookies.set(key, value, {
      path: '/',
      secure: process.env.NODE_ENV === 'production' ? false : false,
      sameSite: 'Lax',
      ...options
    }),
  getCookie: (key: string) => cookies.get(key),
  removeCookie: (key: string) => cookies.remove(key, { path: '/' })
});

export const CookieStorage = CookieStorageBuilder(Cookies);
