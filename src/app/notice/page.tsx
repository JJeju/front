'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

import { ChevronRightIcon, StarIcon, ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Notice() {
  const router = useRouter();

  return (
    <div className='md:px-36 px-4 md:py-20 py-14 space-y-6 md:space-y-8'>
      <div className='space-y-2'>
        <div className='flex flex-col'>
          <h1 className='md:text-3xl text-2xl font-bold tracking-tight'>
            공지사항
          </h1>
          <p className='text-gray-500 dark:text-gray-400'>
            문의사항이 있으신가요? 아래에서 찾아보세요.
          </p>
        </div>
      </div>
      <div className=' grid md:grid-cols-2 grid-cols-1 gap-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className=''
            whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
