import { Key } from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export default function MainLoading() {
  return (
    <>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='w-full  mt-5'
      >
        <CarouselContent>
          {[0, 1, 2, 3, 4].map(index => (
            <CarouselItem
              key={index}
              className='md:basis-1/3 basis-1/2 lg:basis-1/5'
            >
              <Card className='w-full h-full ' key={index}>
                <CardContent className='flex items-start justify-center p-3 group '>
                  <div className='relative md:w-[200px] md:h-[220px] w-[154px] h-[154px]'>
                    <Skeleton className='w-full h-full' />
                  </div>
                </CardContent>
                <div className='flex flex-col gap-2 items-start px-5 py-1 bg-opacity-80 h-36'>
                  <Skeleton className='w-full h-4' />
                  <div className='text-left md:w-[180px] w-[140px] md:text-2xl text-base font-bold whitespace-nowrap overflow-hidden overflow-ellipsis'>
                    <Skeleton className='w-full h-7' />
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className=' md:text-base text-sm md:w-[180px] w-[140px] whitespace-nowrap overflow-hidden overflow-ellipsis'>
                      <Skeleton className='w-full h-5' />
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
