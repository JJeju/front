import Journey from '@/components/journey';
import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
export default function Mypage() {
  return (
    <div className='md:px-36 px-4 md:py-20 py-14 space-y-6 md:space-y-8'>
      <div className='space-y-2'>
        <div className='flex flex-col'>
          <h1 className='md:text-3xl text-2xl font-bold tracking-tight pb-4'>
            마이페이지
          </h1>
        </div>
        <div className='grid gap-4 sm:grid-cols-2'>
          <Card>
            <CardHeader className='pb-0'>
              <CardTitle>회원 정보 수정</CardTitle>
              <CardDescription>
                이름, 이메일, 휴대폰 번호를 입력해주세요.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Button className=''>수정</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-0'>
              <CardTitle>비밀번호 변경</CardTitle>
              <CardDescription>새로운 비밀번호를 입력해주세요.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Button>변경</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-0'>
              <CardTitle>사업 승인 여부</CardTitle>
              <CardDescription>사업 승인을 기다리는 중입니다.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Button variant='secondary'>대기</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-0'>
              <CardTitle>여정 불러오기</CardTitle>
              <CardDescription>내가 짠 여정을 확인해 보세요</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>불러오기</Button>
                </DialogTrigger>
                <Journey />
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex items-center justify-center lg:gap-4'></div>
    </div>
  );
}
