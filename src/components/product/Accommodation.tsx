'use client';
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
  MapPin,
  MountainSnowIcon,
  StarIcon,
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
import Map from '../map/Map';
import Script from 'next/script';
declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  lat?: string | null;
  lng?: string | null;
  zoom?: number | null;
}
const EDFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

export default function Accommodation() {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map2');
      const options = {
        center: new window.kakao.maps.LatLng(EDFAULT_LAT, DEFAULT_LNG),
        level: 3
      };
      const map = new window.kakao.maps.Map(container, options);
      return map;
    });
  };
  return (
    <DialogContent className=' md:w-[1000px] w-full md:h-[90%] h-full overflow-scroll'>
      <div className=' space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            도시 전망이 멋진 디럭스 킹 룸
          </h1>
          <div className='flex items-center space-x-2 text-sm font-medium'>
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
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
                <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                  <MapPin size={15} /> 제주 석귀포시 성산읍 일출로 284-12
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
          <div className='grid gap-4'>
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
          <div className='grid gap-4'>
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
          <div className='grid gap-3'>
            <h3 className='text-xl font-semibold'>위치보기</h3>
            <p className='text-base  dark:text-gray-400 flex items-center gap-1'>
              <MapPin size={15} /> 제주 석귀포시 성산읍 일출로 284-12
            </p>
            <div className='h-80 w-full'>
              <Script
                strategy='afterInteractive'
                type='text/javascript'
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
                onReady={loadKakaoMap}
              />
              <div id='map2' className='w-full h-full'></div>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
