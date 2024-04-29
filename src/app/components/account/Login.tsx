'use client';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import authApi from '@/service/auth';
import { CookieStorage } from '@/utility/cookie';
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from '@/config/constants';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import useUserIdStore from '@/stores/auth';
import { useRouter } from 'next/navigation';
import { useIsLoggedIn } from '@/utility/hooks/useIsLogin';
import { ToastAction } from '@/app/components/ui/toast';
import { useToast } from '@/app/components/ui/use-toast';

export default function Login() {
  const [form, setForm] = useState({ username: '영빡이', password: '1234' });
  const isLoggedIn = useIsLoggedIn();
  const { toast } = useToast();

  const { isLogin, login } = useUserIdStore();

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
          return (
            <>
              {toast({
                variant: 'destructive',
                title: '오류',
                description: '아이디 혹은 비밀번호를 확인해주세요.',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>
          );
        }
        if (data.token) {
          CookieStorage.setCookie(COOKIE_ACCESS_TOKEN, data.token.accessToken);
          CookieStorage.setCookie(
            COOKIE_REFRESH_TOKEN,
            data.token.refreshToken
          );
          login(true);
          dialogClose();
          return (
            <>
              {toast({
                title: '성공',
                description: '환영합니다! 로그인이 완료되었습니다',

                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>
          );
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
          className='col-span-3'
          value={form.password}
          onChange={onChange}
          name='password'
          type='password'
        />
      </div>

      <div className='flex justify-end'>
        <Button className='w-24' type='submit' onClick={() => onSubmit()}>
          로그인
        </Button>
      </div>
    </div>
  );
}
