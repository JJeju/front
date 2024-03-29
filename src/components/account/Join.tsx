'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DatePicker from '../ui/datepicker';
import { Button } from '@/components/ui/button';
import { useToast } from '../ui/use-toast';
import { JoinRq } from '@/type/auth';
import { useState } from 'react';
import authApi from '@/service/auth';
import { ToastAction } from '../ui/toast';
import { formatDate } from '@/utility/hooks/comnHook';
import { Dialog, DialogTrigger } from '../ui/dialog';
import AuthPhone from './AuthPhone';
export default function Join() {
  const [formValue, setFormValue] = useState({
    m_username: '',
    m_pass: '',
    m_name: '',
    m_gender: '',
    m_nickname: '',
    m_birth: '',
    m_phone: '',
    m_addr: '',
    m_email: '',
    isPhone: false,
    isUserName: false,
    isNickName: false
  });
  const { toast } = useToast();

  const mutateJoin = authApi.PostJoin();
  const { isError, error, mutate } = mutateJoin;

  const muateIdCheck = authApi.GetIdCheck();

  const mutateNickCheck = authApi.GetNickNameCheck();

  const GetSendAuthMessage = authApi.GetSendAuthMessage();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleDateChange = (newDateRange: any) => {
    setFormValue({
      ...formValue,
      m_birth: formatDate(newDateRange)
    });
  };

  const handleIdCheck = () => {
    if (formValue.m_username === '') {
      return (
        <>
          {toast({
            variant: 'destructive',
            title: '오류',
            description: '아이디를 입력해주세요.',
            action: <ToastAction altText='Try again'>확인</ToastAction>
          })}
        </>
      );
    } else {
      muateIdCheck.mutate(formValue.m_username, {
        onSuccess: data => {
          if (!data) {
            return (
              <>
                {toast({
                  variant: 'destructive',
                  title: '오류',
                  description: '아이디가 중복됩니다.',
                  action: <ToastAction altText='Try again'>확인</ToastAction>
                })}
              </>
            );
          } else if (data) {
            setFormValue({
              ...formValue,
              isUserName: true
            });
            <>
              {toast({
                title: '성공',
                description: '사용가능한 아이디입니다',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>;
          }
        }
      });
    }
  };

  const onSubmit = () => {
    mutate(formValue, {
      onSuccess: data => {
        if (!data) {
          return (
            <>
              {toast({
                variant: 'destructive',
                title: '오류',
                description: '회원 정보를 확인해주세요',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>
          );
        } else {
          return (
            <>
              {toast({
                title: '성공',
                description: '회원가입에 성공 하였습니다.',

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

  const handleNickCheck = () => {
    if (formValue.m_nickname === '') {
      return (
        <>
          {toast({
            variant: 'destructive',
            title: '오류',
            description: '닉네임을 입력해주세요.',
            action: <ToastAction altText='Try again'>확인</ToastAction>
          })}
        </>
      );
    } else {
      mutateNickCheck.mutate(formValue.m_nickname, {
        onSuccess: data => {
          if (!data) {
            return (
              <>
                {toast({
                  variant: 'destructive',
                  title: '오류',
                  description: '닉네임이 중복됩니다.',
                  action: <ToastAction altText='Try again'>확인</ToastAction>
                })}
              </>
            );
          } else if (data) {
            setFormValue({
              ...formValue,
              isNickName: true
            });
            <>
              {toast({
                title: '성공',
                description: '사용가능한 닉네임 입니다',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>;
          }
        }
      });
    }
  };

  const handleAUth = () => {
    GetSendAuthMessage.mutate(formValue.m_phone, {
      onSuccess: data => {
        if (!data) {
          return (
            <>
              {toast({
                variant: 'destructive',
                title: '오류',
                description: '인증번호 발송에 실패했습니다.',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>
          );
        } else {
          return (
            <>
              {toast({
                title: '성공',
                description: '인증번호가 발송되었습니다.',
                action: <ToastAction altText='Try again'>확인</ToastAction>
              })}
            </>
          );
        }
      }
    });
  };

  return (
    <div className='grid gap-4 py-4'>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          아이디
        </Label>
        <Input
          id='name'
          name='m_username'
          defaultValue=''
          onChange={onChange}
          className='col-span-2'
        />
        <Button className='w-20' onClick={() => handleIdCheck()}>
          중복체크
        </Button>
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          이름
        </Label>
        <Input
          id='name'
          name='m_name'
          defaultValue=''
          className='col-span-3'
          onChange={onChange}
        />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          닉네임
        </Label>
        <Input
          id='m_nickname'
          type='text'
          defaultValue=''
          name='m_nickname'
          onChange={onChange}
          className='col-span-2'
        />
        <Button className='w-20' onClick={() => handleNickCheck()}>
          중복체크
        </Button>
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='m_birth' className='text-right'>
          생년월일
        </Label>
        <DatePicker onDateChange={handleDateChange} />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          이메일
        </Label>
        <Input
          id='email'
          type='email'
          defaultValue=''
          name='m_email'
          onChange={onChange}
          className='col-span-3'
        />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          비밀번호
        </Label>
        <Input
          id='username'
          type='password'
          defaultValue=''
          name='m_password'
          onChange={onChange}
          className='col-span-3'
        />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          전화번호
        </Label>
        <Input
          id='m_phone'
          type='text'
          defaultValue=''
          name='m_phone'
          onChange={onChange}
          className='col-span-2'
          placeholder='010-0000-0000'
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button className='w-20' onClick={() => handleAUth()}>
              인증발송
            </Button>
          </DialogTrigger>
          <AuthPhone />
        </Dialog>
      </div>

      <div className='flex justify-end'>
        <Button className='w-24' type='submit' onClick={() => onSubmit()}>
          회원가입
        </Button>
      </div>
    </div>
  );
}
