import { Button } from '../ui/button';
import { DateRangePicker } from '../ui/daterangepicker';
import { DialogContent } from '../ui/dialog';
import Image from 'next/image';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  AccessibilityIcon,
  CameraIcon,
  CarIcon,
  ChefHatIcon,
  MountainSnowIcon,
  WavesIcon,
  WifiIcon,
  WindIcon,
  XIcon
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Card } from '../ui/card';
export default function Accommodation() {
  return (
    <DialogContent className='w-full md:h-[90%] h-full overflow-scroll'>
      <div className='max-w-5xl mx-auto space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            도시 전망이 멋진 디럭스 킹 룸
          </h1>
          <div className='flex items-center space-x-2 text-sm font-medium'>
            <XIcon className='w-5 h-5' />
            <XIcon className='w-5 h-5' />
            <XIcon className='w-5 h-5' />
            <XIcon className='w-5 h-5' />
            <XIcon className='w-5 h-5' />
            <span className='text-gray-500 dark:text-gray-400'>
              5.0 (1,234 리뷰)
            </span>
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Avatar className='w-10 h-10 border'>
                <AvatarImage alt='@username' src='/placeholder-user.jpg' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className='grid gap-0.5'>
              <div className='font-semibold'>캐서린이 호스팅</div>
              <div className='text-gray-500 text-sm dark:text-gray-400'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  제주 석귀포시 성산읍 일출로 284-12
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <Image
            alt='Restaurant'
            className='overflow-hidden rounded-xl object-bottom'
            height='200'
            src={'/56692-O8P89L-432.jpg'}
            width='500'
          />
          <Separator />

          <div className='prose'>
            <p>
              우리의 고요한 산중 전원으로 오신 것을 환영합니다! 산의 평화로운
              아름다움 속에 자리한 이 아늑한 집은 휴식과 모험을 위한 완벽한
              휴식처입니다.
            </p>
            <p>
              모든 창문으로부터 숨막히는 전망을 감상하세요. 평화로운 풍경을
              감상하며 아침 커피를 즐기세요. 이 산악 천국은 모험과 휴식을 동시에
              찾는 가족, 친구 및 커플들에게 완벽합니다. 지금 예약하고 산의
              마법을 경험해보세요!
            </p>
          </div>
          <Separator />
          <div className='grid gap-8'>
            <h3 className='text-xl font-semibold'>이 숙소가 제공하는 것</h3>
            <ul className='grid lg:grid-cols-2 gap-6'>
              <li className='flex gap-4'>
                <MountainSnowIcon className='w-6 h-6' />산 전망
              </li>
              <li className='flex gap-4'>
                <WavesIcon className='w-6 h-6' />
                해변 접근
              </li>
              <li className='flex gap-4'>
                <ChefHatIcon className='w-6 h-6' />
                개인 요리사
              </li>
              <li className='flex gap-4'>
                <WifiIcon className='w-6 h-6' />
                와이파이
              </li>
              <li className='flex gap-4'>
                <CarIcon className='w-6 h-6' />
                주차장
              </li>
              <li className='flex gap-4'>
                <CameraIcon className='w-6 h-6' />
                보안 카메라
              </li>
              <li className='flex gap-4'>
                <AccessibilityIcon className='w-6 h-6' />
                휠체어 이용 가능
              </li>
              <li className='flex gap-4'>
                <WindIcon className='w-6 h-6' />
                파티오
              </li>
            </ul>
            <Button className='justify-self-start' variant='outline'>
              모든 편의 시설 보기
            </Button>
          </div>
          <Separator />
          <div className='grid gap-8'>
            <h3 className='text-xl font-semibold'>예약자 정보</h3>
            <div className='border p-4 rounded-lg'>
              <form>
                <div className='grid gap-4 sm:grid-cols-2 sm:gap-8'>
                  <div className='grid gap-2'>
                    <Label className='text-sm' htmlFor='name-1'>
                      예약자 성함
                    </Label>
                    <Input id='name-1' required />
                  </div>
                  <div className='grid gap-2'>
                    <Label className='text-sm' htmlFor='phone-1'>
                      전화번호
                    </Label>
                    <Input id='phone-1' required type='tel' />
                  </div>
                  <div className='grid gap-2'>
                    <Label className='text-sm' htmlFor='phone-1'>
                      이메일
                    </Label>
                    <Input id='phone-1' required type='tel' />
                  </div>
                  <div className='grid gap-2 '>
                    <Label className='text-sm' htmlFor='email-1'>
                      차량 여부
                    </Label>
                    <Select>
                      <SelectTrigger className=''>
                        <SelectValue placeholder='' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='1'>차량</SelectItem>
                        <SelectItem value='2'>도보</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className='grid-cols-1 grid gap-4 mt-8'>
                  <div className='grid gap-2 '>
                    <Label className='text-sm' htmlFor='email-1'>
                      날짜
                    </Label>
                    <DateRangePicker className='w-full' />
                  </div>
                </div>
                <div className='relative h-14'>
                  <Button className='absolute right-0 bottom-0'>
                    객실 보기
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className='grid gap-8'>
            <h3 className='text-xl font-semibold'>객실 선택하기</h3>
            <div className='grid grid-cols-1 gap-4'>
              {Array.from({ length: 2 }).map((_, index) => (
                <Card className='' key={index}>
                  <Image
                    alt='Room 1'
                    className='object-cover rounded-lg'
                    height={400}
                    src={'/56692-O8P89L-432.jpg'}
                    style={{
                      aspectRatio: '600/400',
                      objectFit: 'cover'
                    }}
                    width={600}
                  />
                  <div className='flex gap-2 p-3  w-full justify-between'>
                    <div className='text-xl'>방 이름</div>
                    <div className='flex gap-2 '>
                      <div className='text-gray-500 dark:text-gray-400 text-lg font-bold py-1 '>
                        ₩350,000
                      </div>
                      <Button size='sm'>담기</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

// function AccessibilityIcon(
//   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
// ) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <circle cx='16' cy='4' r='1' />
//       <path d='m18 19 1-7-6 1' />
//       <path d='m5 8 3-3 5.5 3-2.36 3.5' />
//       <path d='M4.24 14.5a5 5 0 0 0 6.88 6' />
//       <path d='M13.76 17.5a5 5 0 0 0-6.88-6' />
//     </svg>
//   );
// }

// function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' />
//       <circle cx='12' cy='13' r='3' />
//     </svg>
//   );
// }

// function CarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2' />
//       <circle cx='7' cy='17' r='2' />
//       <path d='M9 17h6' />
//       <circle cx='17' cy='17' r='2' />
//     </svg>
//   );
// }

// function ChefHatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z' />
//       <line x1='6' x2='18' y1='17' y2='17' />
//     </svg>
//   );
// }

// function MountainSnowIcon(
//   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
// ) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
//       <path d='M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19' />
//     </svg>
//   );
// }

// function WavesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' />
//       <path d='M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' />
//       <path d='M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' />
//     </svg>
//   );
// }

// function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M5 13a10 10 0 0 1 14 0' />
//       <path d='M8.5 16.5a5 5 0 0 1 7 0' />
//       <path d='M2 8.82a15 15 0 0 1 20 0' />
//       <line x1='12' x2='12.01' y1='20' y2='20' />
//     </svg>
//   );
// }

// function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2' />
//       <path d='M9.6 4.6A2 2 0 1 1 11 8H2' />
//       <path d='M12.6 19.4A2 2 0 1 0 14 16H2' />
//     </svg>
//   );
// }
