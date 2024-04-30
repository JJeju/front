'use client';
import { toast, useToast } from '@/app/components/ui/use-toast';
import Journey from '@/app/components/journey';
import useUserIdStore from '@/stores/auth';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import { ToastAction } from '@/app/components/ui/toast';
import { Button } from '@/app/components/ui/button';

export default function MainButton() {
  const { isLogin } = useUserIdStore();
  const { toast } = useToast();

  return (
    <>
      {isLogin ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg' className='md:w-40 w-32'>
              여행 코스 짜러가기
            </Button>
          </DialogTrigger>
          <Journey />
        </Dialog>
      ) : (
        <Button
          size='lg'
          className='md:w-40 w-32'
          onClick={() => {
            toast({
              title: '로그인이 필요합니다.',
              description: '로그인 후 이용해주세요.',
              action: <ToastAction altText='Try again'>확인</ToastAction>
            });
          }}
        >
          여행 코스 짜러가기
        </Button>
      )}
    </>
  );
}
