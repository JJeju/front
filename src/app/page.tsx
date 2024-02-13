'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    axios
      .get('http://localhost:8080/main/home/business_place')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main className='flex flex-col p-3 justify-between md:p-20 '>
      <div className='grid w-full place-items-center bg-cover bg-center  md:text-3xl text-base gap-5'>
        <div className='z-0 flex flex-col md:items-center md:justify-center gap-4 p-1 md:flex-row-reverse'>
          <Image
            src={'/56692-O8P89L-432.jpg'}
            alt='Image'
            className='object-cover rounded-lg shadow-2xl'
            width={400}
            height={300}
          />
          <div className='md:text-3xl font-bold flex flex-col md:p-6 px-3 gap-3 '>
            제주도의 모든 여행코스를 한눈에 보고,
            <br />
            나만의 여행코스를 짤 수 있는 여행 플랫폼입니다.
            <Button
              size='lg'
              className='md:w-40 w-32'
              onClick={() => router.push('/trip')}
            >
              여행 코스 짜러가기
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-24 text-2xl md:text-3xl font-bold'>
        지금 인기있는 상품
      </div>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='w-full  mt-5'
      >
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='md:basis-1/2 basis-1/2 lg:basis-1/4'
            >
              <div className='p-1'>
                <Card className=' w-full md:h-auto '>
                  <CardContent className='flex  items-start justify-center p-3  group'>
                    <Image
                      src={'/56692-O8P89L-432.jpg'}
                      alt='Image'
                      className='rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500'
                      width={400}
                      height={300}
                    />
                  </CardContent>
                  <div className='flex flex-col gap-2 items-start px-5 py-1 bg-white bg-opacity-80'>
                    <Badge>BEST</Badge>
                    <div className='text-2xl font-bold'>제주도</div>
                    <div className='text-base'>제주도 서귀포구</div>
                  </div>
                  <div className=' flex justify-end py-5 pr-5 text-base  font-mono'>
                    100,000원
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className='mt-24 text-2xl md:text-3xl font-bold'>
        지금 인기있는 관광지
      </div>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='w-full  mt-5'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
              <div className='p-1'>
                <Card className=' w-full md:h-auto '>
                  <CardContent className='flex  items-start justify-center p-3  group'>
                    <Image
                      src={'/56692-O8P89L-432.jpg'}
                      alt='Image'
                      className='rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500'
                      width={400}
                      height={300}
                    />
                  </CardContent>
                  <div className='flex flex-col gap-2 items-start px-5 py-1 bg-white bg-opacity-80'>
                    <Badge>BEST</Badge>
                    <div className='text-2xl font-bold'>제주도</div>
                    <div className='text-base'>제주도 서귀포구</div>
                    <div className='text-sm'>
                      여기는 제주도 입니다 오후 6시여기는 제주도 입니다 오후
                      6시여기는 제주도 입니다 오후 6시여기는 제주도 입니다 오후
                      6시여기는 제주도 입니다 오후 6시여기는 제주도 입니다 오후
                      6시
                    </div>
                  </div>
                  <div className=' flex justify-end py-5 pr-5 text-base  font-mono'>
                    100,000원
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
