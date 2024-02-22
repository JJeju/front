'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
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
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Journey from '@/components/journey';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { ChevronRightIcon, StarIcon, ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Accommodation from '@/components/product/Accommodation';
import TripReview from '@/components/tripreview/TripReview';

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/main/home/business_place')
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size='lg' className='md:w-40 w-32'>
                  여행 코스 짜러가기
                </Button>
              </DialogTrigger>
              <Journey />
            </Dialog>
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
              <Dialog>
                <DialogTrigger>
                  <div className='p-1'>
                    <motion.div
                      key={index}
                      className=''
                      whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
                    >
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
                        <div className='flex flex-col gap-2 items-start px-5 py-1 bg-opacity-80'>
                          <Badge>BEST</Badge>
                          <div className='text-2xl font-bold'>제주도</div>
                          <div className='text-base'>제주도 서귀포구</div>
                        </div>
                        <div className='flex justify-end text-gray-500 dark:text-gray-400 text-lg font-bold p-3'>
                          ₩350,000
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </DialogTrigger>
                <Accommodation />
              </Dialog>
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
                <motion.div
                  key={index}
                  className=''
                  whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
                >
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
                    <div className='flex flex-col gap-2 items-start px-5 py-1  bg-opacity-80'>
                      <Badge>BEST</Badge>
                      <div className='text-2xl font-bold'>제주도</div>
                      <div className='text-base'>제주도 서귀포구</div>
                      <div className='text-sm'>
                        여기는 제주도 입니다 오후 6시여기는 제주도 입니다 오후
                        6시여기는 제주도 입니다 오후 6시여기는 제주도 입니다
                        오후 6시여기는 제주도 입니다 오후 6시여기는 제주도
                        입니다 오후 6시
                      </div>
                    </div>
                    <div className='flex justify-end text-gray-500 dark:text-gray-400 text-lg font-bold p-3'>
                      ₩350,000
                    </div>
                  </Card>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='w-full grid items-start min-h-screen gap-4  md:gap-8'>
        <div className='space-y-2'>
          <div className='mt-24 text-2xl md:text-3xl font-bold'>
            여행코스 리뷰
          </div>
          <p className='text-gray-500 dark:text-gray-400'>
            12개의 새로운 리뷰가 있습니다.
          </p>
          <Badge className='text-sm' onClick={() => router.push('/faq')}>
            더보기
            <ChevronRightIcon size={20} />
          </Badge>
        </div>
        <div className=' grid md:grid-cols-3 grid-cols-1 gap-3'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className='p-1' key={index}>
              <motion.div
                key={index}
                className=''
                whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
              >
                <Card>
                  <Dialog>
                    <DialogTrigger>
                      <CardHeader className='flex items-start pb-4'>
                        <div className='flex items-center gap-1 mr-auto'>
                          <Avatar className='w-8 h-8'>
                            <AvatarImage
                              alt='Avatar'
                              src={'/56692-O8P89L-432.jpg'}
                            />
                          </Avatar>
                          <div className='flex flex-col w-full'>
                            <h3 className='md:text-base text-sm font-semibold overflow-hidden text-overflow-ellipsis whitespace-wrap'>
                              30대 신혼 여행
                            </h3>
                            <p className='text-xs text-gray-500 dark:text-gray-400 text-start'>
                              상구
                            </p>
                          </div>
                        </div>
                        <div className='flex items-center space-x-1 text-sm'>
                          <StarIcon className='w-4 h-4 fill-accent' />
                          <StarIcon className='w-4 h-4 fill-accent' />
                          <StarIcon className='w-4 h-4 fill-accent' />
                          <StarIcon className='w-4 h-4 fill-accent' />
                          <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className='text-sm text-gray-500 dark:text-gray-400 px-5 py-2'>
                          코스는 좋았지만, 호텔은 별로였어요.
                        </p>
                      </CardContent>
                    </DialogTrigger>
                    <TripReview />
                  </Dialog>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
        <div className='space-y-2'>
          <div className='mt-24 text-2xl md:text-3xl font-bold'>공지사항</div>
          <p className='text-gray-500 dark:text-gray-400'>
            3개의 새로운 공지사항이 있습니다.
          </p>
          <Badge className='text-sm' onClick={() => router.push('/notice')}>
            더보기
            <ChevronRightIcon size={20} />
          </Badge>
        </div>
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-3'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Card className='p-5' key={index}>
              <CardContent className='flex flex-col'>
                <h3 className='text-xl font-semibold'>
                  3월 15일 유지보수 예정
                </h3>

                <div className='text-xs'>
                  <p className='text-gray-500 dark:text-gray-400 flex py-2'>
                    2일전
                    <ChevronLeftIcon className='w-4 h-4 transform rotate-180' />
                  </p>
                </div>

                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  우리는 서버에서 예정된 유지보수를 수행할 것입니다. 그 플랫폼은
                  오전 10시부터 12시까지 일시적으로 사용할 수 없습니다
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
