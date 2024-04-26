'use client';

import { Card, CardHeader, CardContent } from '@/app/components/ui/card';
import { ReviewRs } from '@/type/home';
import { Avatar, AvatarImage } from '@/app/components/ui/avatar';
import { motion } from 'framer-motion';
import { Badge } from '@/app/components/ui/badge';
import { ChevronRightIcon, ChevronLeftIcon, StarIcon } from 'lucide-react';
import { useState } from 'react';
import mainApi from '@/service/home';
import { useRouter } from 'next/navigation';

interface TripCourseProps {
  data: any;
}
export default function TripCourseList({ data }: TripCourseProps) {
  // const { data, isFetching } = mainApi.GetReview();

  const router = useRouter();

  return (
    <>
      <p className='text-gray-500 dark:text-gray-400'>
        {data?.length}개의 새로운 후기가 있습니다.
      </p>
      <Badge className='text-sm' onClick={() => router.push('/faq')}>
        더보기
        <ChevronRightIcon size={20} />
      </Badge>
      <div className=' grid md:grid-cols-2 grid-cols-1 gap-3 mb-20'>
        {data?.map((item: ReviewRs, index: number) => (
          <motion.div
            onClick={() => {
              router.push(`/rinfo/${item.b_pk_num}`);
            }}
            key={index}
            whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
          >
            <Card className='min-w-[220px]'>
              <CardHeader className='flex items-start pb-4'>
                <div className='flex items-center gap-4 mr-auto'>
                  <Avatar className='w-12 h-12'>
                    <AvatarImage alt='Avatar' src={'/56692-O8P89L-432.jpg'} />
                  </Avatar>
                  <div className='flex flex-col w-full'>
                    <h3 className='md:text-base text-sm text-left font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis md:w-[130px] lg:w-[230px] w-[240px]'>
                      {item.b_title}
                    </h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400 text-start'>
                      {item.b_fk_id}
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-1 pt-2  text-sm'>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < item?.b_star
                          ? 'fill-accent text-yellow-500'
                          : 'fill-accent stroke-muted-foreground '
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-500 dark:text-gray-400 px-6 pb-5 text-start'>
                  {item.b_contents}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
