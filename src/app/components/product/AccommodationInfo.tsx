'use client';
import { Button } from '../ui/button';
import { DialogContent } from '../ui/dialog';
import Image, { ImageLoaderProps } from 'next/image';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  AvatarImage,
  AvatarFallback,
  Avatar
} from '@/app/components/ui/avatar';
import { Separator } from '@/app/components/ui/separator';
import {
  AccessibilityIcon,
  CameraIcon,
  CarIcon,
  ChefHatIcon,
  MapPin,
  MountainSnowIcon,
  Phone,
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

import { DatePickerWithRange } from '../ui/datepickerwithrange';
import { imgLoader } from '@/utility/utils/imgLoader';
import { use, useEffect, useState } from 'react';
import tripApi from '@/service/trip';
import FixMap from '../map/FixMap';
import { Skeleton } from '../ui/skeleton';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Accommodation({ pkValue }: any) {
  const { data, refetch, isFetching } = tripApi.GetProductDetail(pkValue);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT); // Kakao.init()을 호출합니다.
      }
    };
  }, []);

  const handleShareKakao = (lat?: number, lon?: number) => {
    window.Kakao.Share?.sendDefault({
      objectType: 'location',
      address: `${data?.company.c_addr}`,
      addressTitle: `${data?.company.c_addr}`,

      content: {
        title: `${data?.company.c_name}`,
        description: `${data?.company.c_addr}`,
        imageUrl: `http://14.6.54.241:8080/download/${data?.company.fileData.url}`,
        link: {
          mobileWebUrl: `http://jjeju.site`,
          webUrl: `http://jjeju.site`
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `http://jjeju.site`,
            webUrl: `http://jjeju.site`
          }
        },
        {
          title: '위치 보기',
          link: {
            mobileWebUrl: `https://map.kakao.com/link/map/${lat},${lon}`,
            webUrl: `https://map.kakao.com/link/map/${lat},${lon}`
          }
        }
      ]
    });
  };

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [pkValue]);

  return (
    <DialogContent className=' md:w-[1000px] w-full md:h-[90%] h-full overflow-scroll'>
      <div className=' space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          {isFetching ? (
            <Skeleton className='h-[36px] w-full' />
          ) : (
            <h1 className='text-3xl font-semibold tracking-tight'>
              {data?.company.c_name}
            </h1>
          )}
          <div className='flex items-center space-x-2 text-sm font-medium'>
            {isFetching ? (
              <Skeleton className='h-[20px] w-[200px]' />
            ) : (
              <>
                <StarIcon className='w-4 h-4 fill-accent' />
                <StarIcon className='w-4 h-4 fill-accent' />
                <StarIcon className='w-4 h-4 fill-accent' />
                <StarIcon className='w-4 h-4 fill-accent' />
                <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
                <span className='text-gray-500 dark:text-gray-400'>
                  5.0 (1,234 리뷰)
                </span>
              </>
            )}
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Avatar className='w-10 h-10 border'>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className='grid gap-0.5'>
              <div className='text-gray-500 text-sm dark:text-gray-400'>
                {isFetching ? (
                  <Skeleton className='h-[40px] w-[300px]' />
                ) : (
                  <>
                    <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                      <Phone size={15} /> {data?.company.c_phone}
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400 flex  gap-1'>
                      <MapPin size={15} /> {data?.company.c_addr}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <Separator />
          {isFetching ? (
            <Skeleton className='md:h-[400px] h-[300px] w-full rounded-xl' />
          ) : (
            <Image
              alt='Restaurant'
              className='overflow-hidden rounded-xl object-bottom'
              height='200'
              src={`http://14.6.54.241:8080/download/${data?.company.fileData.url}`}
              width='450'
            />
          )}
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
                    <DatePickerWithRange className='w-full' />
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
                    loader={({ src, width, quality }: ImageLoaderProps) =>
                      imgLoader({ src, width, quality })
                    }
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
            <div className='flex items-center gap-2'>
              <h3 className='text-xl font-semibold'>위치보기</h3>
              <Button
                onClick={() =>
                  handleShareKakao(data?.company.c_lat, data?.company.c_lon)
                }
                className='hover:bg-yellow-300 bg-gray-100 '
              >
                <KakaoIcon />
              </Button>
            </div>
            <p className='text-base  dark:text-gray-400 flex items-center gap-1'>
              <MapPin size={15} /> {data?.company.c_addr}
            </p>

            <div className='h-80 w-full'>
              <FixMap
                lat={data?.company.c_lat}
                lng={data?.company.c_lon}
                setMap={setMap}
              />
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export function KakaoIcon() {
  return (
    <svg
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[24px] h-[24px]'
    >
      <title />
      <g
        data-name='kakao talk chat media social'
        id='kakao_talk_chat_media_social'
      >
        <path d='M29.88,13.06a1,1,0,0,0-1,1c0,5.42-5.78,9.83-12.88,9.83a15.91,15.91,0,0,1-2.19-.16,1,1,0,0,0-.89.34,13.88,13.88,0,0,1-4,3,8.32,8.32,0,0,0,.71-3.91,1,1,0,0,0-.56-.81c-3.75-1.83-6-4.92-6-8.28C3.12,8.63,8.9,4.22,16,4.22A14.15,14.15,0,0,1,26.87,8.79,1,1,0,1,0,28.4,7.5C25.64,4.2,21,2.22,16,2.22,7.79,2.22,1.12,7.53,1.12,14.06c0,4,2.44,7.6,6.56,9.8a8.82,8.82,0,0,1-1.29,3.91A.85.85,0,0,0,6.3,28a1.39,1.39,0,0,0,.54,1.52,1.35,1.35,0,0,0,1.52.07,18.49,18.49,0,0,0,5.72-3.8,18.71,18.71,0,0,0,1.92.11c8.21,0,14.88-5.31,14.88-11.83A1,1,0,0,0,29.88,13.06Z' />
        <path d='M10.79,17.62A1,1,0,0,0,12.08,17l1.06-2.76L14.21,17a1,1,0,0,0,.93.64,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.3l-2-5.18a1,1,0,0,0-1.87,0l-2,5.18A1,1,0,0,0,10.79,17.62Z' />
        <path d='M17.51,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,1,1h2.56a1,1,0,0,0,0-2H18.51V11.5A1,1,0,0,0,17.51,10.5Z' />
        <path d='M8.46,17.68a1,1,0,0,0,1-1V12.5h.75a1,1,0,0,0,0-2H6.71a1,1,0,0,0,0,2h.75v4.18A1,1,0,0,0,8.46,17.68Z' />
        <path d='M22.46,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,2,0v-1.2L25,17.32a1,1,0,0,0,.77.36A1,1,0,0,0,26.53,16l-2-2.34,1.8-1.41a1,1,0,0,0-1.23-1.58L23.46,12V11.5A1,1,0,0,0,22.46,10.5Z' />
      </g>
    </svg>
  );
}
