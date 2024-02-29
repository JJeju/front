'use client';
import AccountInfomation from '@/components/mypage/AccountInfomation';
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
import BusinessApply from '@/components/mypage/BusinessApply';
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
                이름, 이메일, 휴대폰 번호, 비밀번호 변경 가능 합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Dialog>
                <DialogTrigger>
                  <Button className=''>수정</Button>
                </DialogTrigger>
                <AccountInfomation />
              </Dialog>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-0'>
              <CardTitle>구매 내역</CardTitle>
              <CardDescription>구매하신 목록 입니다.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Button>확인</Button>
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
          <Card>
            <CardHeader className='pb-0'>
              {/* <CardTitle>사업 승인 여부</CardTitle>
              <CardDescription>사업 승인을 기다리는 중입니다.</CardDescription> */}
              <CardTitle>사업 전환하기</CardTitle>
              <CardDescription>사업장 전환 해 보세요.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-end py-4 px-6'>
              <Dialog>
                <DialogTrigger>
                  {/* <Button variant='secondary'>대기</Button> */}
                  <Button>신청</Button>
                </DialogTrigger>
                <BusinessApply />
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex items-center justify-center lg:gap-4'></div>
    </div>
  );
}
