import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from '@/components/ui/card';
import Image from 'next/image';
export default function Mypage() {
  return (
    <div className='max-w-6xl mx-auto p-4 lg:px-6'>
      <div className='grid lg:grid-cols-3 lg:gap-4 xl:gap-8'>
        <div className='space-y-4 lg:col-span-2'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-semibold'>마이 페이지</h1>
            <p className='text-gray-500 dark:text-gray-400'>
              여행 코스를 작성하고 호텔을 예약할 수 있는 사이트
            </p>
          </div>
          <div className='space-y-2'>
            <Button size='sm' variant='outline'>
              예약한 호텔
            </Button>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle>회원 정보 수정</CardTitle>
                <CardDescription>
                  이름, 이메일, 휴대폰 번호를 입력해주세요.
                </CardDescription>
              </CardHeader>
              <CardContent className='p-0'>
                <Button className='w-full' size='sm'>
                  수정
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle>비밀번호 변경</CardTitle>
                <CardDescription>
                  새로운 비밀번호를 입력해주세요.
                </CardDescription>
              </CardHeader>
              <CardContent className='p-0'>
                <Button className='w-full' size='sm'>
                  변경
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-0'>
                <CardTitle>사업 승인 대기</CardTitle>
                <CardDescription>
                  사업 승인을 기다리는 중입니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className='flex items-center justify-center lg:gap-4'>
          <Image
            alt='Image'
            className='w-full rounded-xl object-cover object-center sm:hidden'
            height='400'
            src='/placeholder.svg'
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover'
            }}
            width='600'
          />
          <Image
            alt='Image'
            className='hidden w-full rounded-xl object-cover object-center lg:flex xl:hidden'
            height='400'
            src='/placeholder.svg'
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover'
            }}
            width='600'
          />
          <Image
            alt='Image'
            className='hidden w-full rounded-xl object-cover object-center xl:flex'
            height='400'
            src='/placeholder.svg'
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover'
            }}
            width='600'
          />
        </div>
      </div>
    </div>
  );
}
