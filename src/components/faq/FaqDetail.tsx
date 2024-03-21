'use client';
import { MapPin, StarIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import { DialogContent } from '../ui/dialog';
import Map from '../map/Map';
import Script from 'next/script';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { imgLoader } from '@/utility/utils/imgLoader';
import tripApi from '@/service/trip';
import { useEffect } from 'react';
import faqApi from '@/service/faq';
import { formatDate } from '@/utility/hooks/comnHook';

export default function FaqDetail({ id }: any) {
  const { data, refetch } = faqApi.GetFaqDetail(id);
  console.log('>>>', data);
  return (
    <DialogContent className=' md:w-[1000px] w-full md:h-[80%] h-full overflow-scroll'>
      <div className='max-w-5xl space-y-8 px-12 py-8 xl:py-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tighter '>
            {data?.co_title}
          </h1>
        </div>
        <div className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Avatar className='w-10 h-10 border'>
                <AvatarImage alt='@username' src='/placeholder-user.jpg' />
                <AvatarFallback>{data?.co_fk_id.slice(0, 2)}</AvatarFallback>
              </Avatar>
            </div>
            <div className='grid gap-0.5'>
              <div className='font-semibold'>{data?.co_fk_id}</div>
              <div className='text-gray-500 text-sm dark:text-gray-400'>
                {formatDate(data?.co_create_dt)}
              </div>
            </div>
          </div>

          <Separator />
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <h2 className='text-2xl font-semibold mt-8'>문의 내용</h2>
              <p className='text-lg text-gray-500 pt-4 dark:text-gray-400'>
                {data?.co_contents}
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <h2 className='text-xl font-semibold'>답변</h2>
            {data?.co_check ? (
              <p className='text-lg text-gray-500 dark:text-gray-400'>
                {data?.co_check}
              </p>
            ) : (
              <p className='text-lg text-gray-500 dark:text-gray-400'>
                답변이 대기중입니다.
              </p>
            )}
            {/* <div className='grid gap-0.5 text-sm text-gray-500 md:grid-cols-2 dark:text-gray-400'>
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
          </div> */}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
