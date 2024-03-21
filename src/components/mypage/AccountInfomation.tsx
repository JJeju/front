import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DatePicker from '../ui/datepicker';
import mypageApi from '@/service/mypage';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';

export default function AccountInfomation() {
  const { toast } = useToast();

  const [form, setForm] = useState({
    email: '',
    password: '',
    new_password: '',
    m_password: ''
  });
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);

  const { data } = mypageApi.GetProfile();
  const mutatePasswordCheck = mypageApi.PostCheckPassword();
  const mutateUpdateProfile = mypageApi.PutUpdateMemberInfo();
  const mutateUpdatePassword = mypageApi.PostChangePassword();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePasswordCheck = () => {
    if (form.m_password === '') {
      return (
        <>
          {toast({
            variant: 'destructive',
            title: '오류',
            description: '비밀번호를 입력해주세요.',
            action: <ToastAction altText='Try again'>확인</ToastAction>
          })}
        </>
      );
    } else {
      mutatePasswordCheck.mutate(
        { m_password: form.m_password },
        {
          onSuccess: data => {
            if (data) {
              <>
                {toast({
                  title: '확인',
                  description: '비밀번호가 확인되었습니다.',
                  action: <ToastAction altText='Try again'>확인</ToastAction>
                })}
              </>;
              setIsPasswordDisabled(false);
            } else {
              <>
                {toast({
                  variant: 'destructive',
                  title: '오류',
                  description: '비밀번호가 일치하지 않습니다.',
                  action: <ToastAction altText='Try again'>확인</ToastAction>
                })}
              </>;
            }
          }
        }
      );
    }
  };

  const handleSubmit = () => {
    if (form.new_password !== form.password) {
      return (
        <>
          {toast({
            variant: 'destructive',
            title: '오류',
            description: '비밀번호가 일치하지 않습니다.',
            action: <ToastAction altText='Try again'>확인</ToastAction>
          })}
        </>
      );
    } else if (form.email === '') {
      return (
        <>
          {toast({
            variant: 'destructive',
            title: '오류',
            description: '이메일을 입력해주세요.',
            action: <ToastAction altText='Try again'>확인</ToastAction>
          })}
        </>
      );
    } else {
      mutateUpdatePassword.mutate(form, {
        onSuccess: data => {
          if (data) {
            mutateUpdateProfile.mutate(
              { m_email: form.email, m_birth: '' },
              {
                onSuccess: data => {
                  if (data) {
                    <>
                      {toast({
                        title: '성공',
                        description: '회원 정보가 변경되었습니다.',
                        action: (
                          <ToastAction altText='Try again'>확인</ToastAction>
                        )
                      })}
                    </>;
                  } else {
                    <>
                      {toast({
                        variant: 'destructive',
                        title: '오류',
                        description: '회원 정보 변경에 실패하였습니다.',
                        action: (
                          <ToastAction altText='Try again'>확인</ToastAction>
                        )
                      })}
                    </>;
                  }
                }
              }
            );
          } else {
            <>
              {toast({
                variant: 'destructive',
                title: '오류',
                description: '회원 정보 변경에 실패하였습니다.',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>;
          }
        }
      });
    }
  };

  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto'>
      <DialogTitle className='font-semibold'>J E J U</DialogTitle>
      <div className='flex justify-center'>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              아이디
            </Label>
            <Input
              id='name'
              defaultValue=''
              className='col-span-3'
              disabled
              value={data?.username}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='m_birth' className='text-right'>
              생년월일
            </Label>
            <Input
              id='birth'
              defaultValue=''
              className='col-span-3'
              disabled
              value={data?.birth}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              이메일
            </Label>
            <Input
              id='username'
              className='col-span-2'
              name='email'
              disabled={isEmailDisabled}
              value={isEmailDisabled ? data?.email : form.email}
              onChange={e => onChange(e)}
            />
            <Button className='w-20' onClick={() => setIsEmailDisabled(false)}>
              변경
            </Button>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              전화번호
            </Label>
            <Input
              id='username'
              defaultValue=''
              value={data.phone}
              disabled
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              기존 비밀번호
            </Label>
            <Input
              id='username'
              type='password'
              name='m_password'
              className='col-span-2'
              value={form.m_password}
              onChange={onChange}
            />
            <Button className='w-20' onClick={() => handlePasswordCheck()}>
              확인
            </Button>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              새 비밀번호
            </Label>
            <Input
              id='username'
              defaultValue=''
              className='col-span-3'
              type='password'
              disabled={isPasswordDisabled}
              value={form.new_password}
              onChange={onChange}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              비밀번호 확인
            </Label>
            <Input
              id='username'
              defaultValue=''
              className='col-span-3'
              type='password'
              disabled={isPasswordDisabled}
              value={form.password}
              onChange={onChange}
            />
          </div>
          <div className='flex justify-end'>
            <Button
              className='w-24'
              type='submit'
              onClick={() => handleSubmit()}
            >
              수정하기
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
