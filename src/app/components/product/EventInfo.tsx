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

export default function Event({ pkValue }: any) {
  const { data, refetch, isFetching } = tripApi.GetProductDetail(pkValue);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [pkValue]);

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
                <AvatarImage alt='@username' src='/placeholder-user.jpg' />
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
                    <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                      <MapPin size={15} /> {data?.company.c_addr}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <Separator />
          {isFetching ? (
            <Skeleton className='h-[400px] w-[500px] rounded-xl' />
          ) : (
            <Image
              loader={({ src, width, quality }: ImageLoaderProps) =>
                imgLoader({ src, width, quality })
              }
              alt='Restaurant'
              className='overflow-hidden rounded-xl object-bottom'
              height='200'
              src={`http://14.6.54.241:8080/download/${data?.company.fileData.url}`}
              width='500'
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
          <h3 className='text-xl font-semibold'>위치보기</h3>
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
