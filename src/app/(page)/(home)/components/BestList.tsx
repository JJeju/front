'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/app/components/ui/carousel';
import { motion } from 'framer-motion';
import { Badge } from '@/app/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Suspense, useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import mainApi from '@/service/home';
import MainLoading from '@/app/components/loading/MainLoading';
import { useRouter } from 'next/navigation';
interface BestProductProps {
  data?: any;
  isFetching?: boolean;
}
type data = {
  c_pk_cnum: string;
  c_fk_id: string;
  c_cnum: number;
  c_name: string;
  c_phone: string;
  c_category: string;
  c_addr: string;
  c_contents: string;
  c_condition: string;
  c_pk_num: string;
  c_check: string;
  c_img: string;
  c_type: string;
  c_price: string;
};

export default function BestProduct({ data }: BestProductProps) {
  // const { data, isFetching } = mainApi.GetMainProduct();

  const router = useRouter();

  return (
    <>
      {/* {isFetching && <MainLoading />} */}
      <Suspense fallback={<MainLoading />}>
        <Carousel
          opts={{
            align: 'start'
          }}
          className='w-full mt-5 '
        >
          <CarouselContent>
            {data?.map((data: data, index: number) => (
              <CarouselItem
                key={index}
                className='md:basis-1/3 basis-1/2 lg:basis-1/5'
              >
                <motion.div
                  key={index}
                  className=''
                  onClick={() => {
                    router.push(`/info/${data.c_pk_num}/${data.c_category}`);
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card className='h-auto'>
                    <CardContent className='flex justify-center p-3 '>
                      <div className='w-full'>
                        <Image
                          src={`http://14.6.54.241:8080/download/${data.c_img}`}
                          alt='Image'
                          className='rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 max-h-[150px] md:max-h-[200px] md:min-h-[200px] min-h-[150px]'
                          width={320}
                          height={250}
                        />
                      </div>
                    </CardContent>
                    <div className='flex flex-col gap-1 items-start px-3 md:px-5 bg-opacity-80 h-36'>
                      <div className='flex gap-1'>
                        <Badge>BEST</Badge>
                        <Badge variant='outline'>{data.c_category}</Badge>
                      </div>
                      <div className='text-left w-full text-base font-bold whitespace-nowrap overflow-hidden overflow-ellipsis'>
                        {data.c_name}
                      </div>
                      <div className='flex items-center w-full'>
                        <MapPin size={15} />
                        <div className=' text-sm whitespace-nowrap overflow-hidden overflow-ellipsis'>
                          {data.c_addr}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Suspense>
    </>
  );
}
