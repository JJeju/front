'use client';
import { MapPin, Phone, StarIcon, XIcon } from 'lucide-react';
import Image, { ImageLoaderProps } from 'next/image';
import { DialogContent } from '../ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { imgLoader } from '@/utility/utils/imgLoader';
import tripApi from '@/service/trip';
import { useEffect, useState } from 'react';
import FixMap from '../map/FixMap';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Restaurant({ pkValue }: any) {
  const { data, refetch, isFetching } = tripApi.GetProductDetail(pkValue);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        console.log('sdfsdf>>');
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT); // Kakao.init()을 호출합니다.
      }
    };
  }, []);

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [pkValue]);

  const handleShareKakao = (lat?: number, lon?: number) => {
    console.log('>>>', lat, lon);
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

  return (
    <DialogContent className=' md:w-[1000px] w-full md:h-[90%] h-full overflow-scroll'>
      <div className='max-w-5xl mx-auto space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          {isFetching ? (
            <Skeleton className='h-[36px]  w-[200px]' />
          ) : (
            <h1 className='text-3xl font-semibold tracking-tighter '>
              {data?.company.c_name}
            </h1>
          )}
          <div className='flex items-center space-x-2 text-sm font-medium'>
            {isFetching ? (
              <Skeleton className='h-[20px] md:w-[200px] w-full' />
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
                  <Skeleton className='h-[40px] md:w-[300px] w-full' />
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
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <h2 className='text-lg font-semibold'>소개</h2>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                우아한 장식, 유명인 출연, 맛있는 요리로 유명합니다.
              </p>
            </div>
            <div className='grid gap-1'>
              <h2 className='text-lg font-semibold'>영업 시간</h2>
              <div className='grid gap-0.5 text-sm text-gray-500 md:grid-cols-2 dark:text-gray-400'>
                <span>월 - 금: 오전 11:30 - 오후 2:30</span>
                <span>토 - 일: 오후 5:00 - 오후 10:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <h2 className='text-xl font-semibold'>메뉴</h2>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              메뉴는 매일 변경될 수 있습니다.
            </p>
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
        <Separator />
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <h2 className='text-xl font-semibold'>리뷰</h2>
            <div className='grid gap-0.5 text-sm text-gray-500 md:grid-cols-2 dark:text-gray-400'>
              <div className='flex items-center space-x-2'>
                <XIcon className='w-5 h-5' />
                <span className='font-medium'>John Doe</span>
              </div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                멋진 경험이었습니다! 음식은 놀라운 맛이었고 직원들도 매우
                친절했습니다.
              </p>
              <div className='flex items-center space-x-2'>
                <XIcon className='w-5 h-5' />
                <span className='font-medium'>Alice Smith</span>
              </div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                The Ivy에서 멋진 시간을 보냈습니다. 분위기는 매력적하고 음식은
                정말 맛있습니다. 이 장소를 강력히 추천합니다.
              </p>
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
