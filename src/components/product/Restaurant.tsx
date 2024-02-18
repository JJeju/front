'use client';
import { XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { DialogContent } from '../ui/dialog';
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

const DEFAULT_ZOOM = 3;

export default function Restaurant() {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(EDFAULT_LAT, DEFAULT_LNG),
        level: 3
      };
      const map = new window.kakao.maps.Map(container, options);
      return map;
    });
  };

  return (
    <DialogContent className='w-full md:h-[90%] h-full overflow-scroll'>
      <div className='grid gap-6 lg:gap-12'>
        <div className='container px-4 py-8 xl:py-8 max-w-5xl mx-auto space-y-8'>
          <div className='flex flex-col  space-y-2'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-semibold tracking-tighter '>
                레스토랑
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
              <Image
                alt='Restaurant'
                className='overflow-hidden rounded-xl object-bottom'
                height='200'
                src={'/56692-O8P89L-432.jpg'}
                width='500'
              />
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
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <h2 className='text-xl font-semibold'>위치</h2>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                제주 석귀포시 성산읍 일출로 284-12
              </p>
            </div>
          </div>
          <div className='h-80 w-full'>
            <Map />
          </div>
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
      </div>
    </DialogContent>
  );
}
