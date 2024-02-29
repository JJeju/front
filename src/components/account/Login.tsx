'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import authApi from '@/service/auth';
import { CookieStorage } from '@/utility/cookie';
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from '@/config/constants';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import useUserIdStore from '@/store/auth';
import { useRouter } from 'next/navigation';
import { useIsLoggedIn } from '@/utility/hooks/useIsLogin';
export default function Login() {
  const [form, setForm] = useState({ username: 'lkd9125', password: '1234' });
  const [errorType, setErrorType] = useState(false);
  const isLoggedIn = useIsLoggedIn();

  const { isLogin, setUserId } = useUserIdStore();

  const router = useRouter();

  const mutateLogin = authApi.PostLogin();
  const { isError, error, mutate } = mutateLogin;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const dialogClose = () => {
    document.getElementById('closeDialog')?.click();
  };

  const onSubmit = () => {
    mutate(form, {
      onSuccess: data => {
        if (
          data.desc === 'User Not Found' ||
          data.desc === 'PassWord Not Match'
        ) {
          setErrorType(true);
          setTimeout(() => {
            setErrorType(false);
          }, 3000);
        }
        if (data.token) {
          CookieStorage.setCookie(COOKIE_ACCESS_TOKEN, data.token.accessToken);
          CookieStorage.setCookie(
            COOKIE_REFRESH_TOKEN,
            data.token.refreshToken
          );
          setUserId(true);
          dialogClose();
        }
      }
    });

    if (isError) {
      console.log('error');
    }
  };

  return (
    <div className='grid gap-4 py-4'>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          아이디
        </Label>
        <Input
          id='name'
          defaultValue=''
          className='col-span-3'
          value={form.username}
          onChange={onChange}
          name='username'
          type='id'
        />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          비밀번호
        </Label>
        <Input
          id='password'
          defaultValue=''
          className='col-span-3'
          value={form.password}
          onChange={onChange}
          name='password'
          type='password'
        />
      </div>
      {errorType ? (
        <Alert variant='destructive' className='animate-fadeInOut'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>아이디 혹은 비밀번호를 확인해주세요.</AlertTitle>
        </Alert>
      ) : null}
      <div className='flex justify-end'>
        <Button className='w-24' type='submit' onClick={() => onSubmit()}>
          로그인
        </Button>
      </div>
    </div>
  );
}
