'use client';
import { Card, CardContent } from '@/app/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/app/components/ui/carousel';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import { imgLoader } from '@/utility/utils/imgLoader';
import { motion } from 'framer-motion';
import { ChevronRightIcon, MapPin } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Suspense, useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';

import { useRouter } from 'next/navigation';
import mainApi from '@/service/home';
import MainLoading from '@/app/components/loading/MainLoading';

export default function EventProduct({ data }: any) {
  // const { data, isFetching } = mainApi.GetMainEvent();
  const router = useRouter();

  return (
    <>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='w-full  mt-5'
      >
        <CarouselContent>
          {data?.map((data: any, index: number) => (
            <CarouselItem
              key={index}
              className='md:basis-1/3 basis-1/2 lg:basis-1/5'
            >
              <div className=''>
                <motion.div
                  key={index}
                  className=''
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    router.push(
                      `/info/${data.data.s_img ?? data.data.e_img}/${
                        data.data.s_img ?? data.data.e_img
                      }`
                    );
                  }}
                >
                  <Card>
                    <CardContent className='flex  items-start justify-center p-3  group'>
                      <div className='w-full'>
                        <Image
                          src={
                            data.e_img
                              ? `http://jjeju.site/download/${data.e_img}`
                              : `http://jjeju.site/download/${data.s_img}`
                          }
                          alt='Image'
                          className='rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 max-h-[150px] md:max-h-[200px] md:min-h-[200px] min-h-[150px]'
                          width={320}
                          height={250}
                        />
                      </div>
                    </CardContent>
                    <div className='flex flex-col gap-1 items-start px-3 md:px-5  bg-opacity-80 h-36'>
                      <div className='flex gap-1'>
                        <Badge variant='destructive'>BEST</Badge>
                        <Badge variant={'outline'}>
                          {data.e_pk_enum ? '이벤트' : '관광지'}
                        </Badge>
                      </div>

                      <div className='text-left w-full text-base font-bold whitespace-nowrap overflow-hidden overflow-ellipsis'>
                        {data.e_title ?? data.s_tittle}
                      </div>
                      <div className='flex items-center w-full'>
                        <MapPin size={15} />
                        <div className='text-left text-sm  whitespace-nowrap overflow-hidden overflow-ellipsis'>
                          {data.e_addr ?? data.s_addr}
                        </div>
                      </div>
                      <div className=' text-sm h-[60px] overflow-hidden overflow-ellipsis'>
                        {data.e_info ?? data.s_info}
                      </div>
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
    </>
  );
}
