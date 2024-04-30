'use client';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/app/components/ui/card';
import { useRouter } from 'next/navigation';

import { ChevronRightIcon, StarIcon, ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import noticeApi from '@/service/notice';
import { formatDate } from '@/utility/hooks/comnHook';
import useUserIdStore from '@/stores/auth';
import FaqDetail from '@/app/components/faq/FaqDetail';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import { Fragment, useState } from 'react';
import { NoticeRs } from '@/type/notice';
export default function Notice() {
  const router = useRouter();
  const [isFaqId, setIsFaqId] = useState(0);

  const { data: NoticeData, isFetching: noticeFetching } =
    noticeApi.GetNotice();

  return (
    <div className='md:px-36 px-4 md:py-20 py-14 space-y-6 md:space-y-8'>
      <div className='space-y-2'>
        <div className='flex flex-col'>
          <h1 className='md:text-3xl text-2xl font-bold tracking-tight'>
            공지사항
          </h1>
          <p className='text-gray-500 dark:text-gray-400'>
            공지사항을 아래에서 찾아보세요.
          </p>
        </div>
      </div>
      <div className=' grid md:grid-cols-2 grid-cols-1 gap-3'>
        {NoticeData?.map((item: NoticeRs, index: number) => (
          <Fragment key={index}>
            <Dialog>
              <DialogTrigger>
                <motion.div
                  key={index}
                  onClick={() => setIsFaqId(item.n_pk_num)}
                  className=''
                  whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
                >
                  <Card className='p-5' key={index}>
                    <CardContent className='flex flex-col'>
                      <h3 className='text-xl font-semibold text-left'>
                        {item.n_title}
                      </h3>
                      <div className='text-xs'>
                        <p className='text-gray-500 text-left dark:text-gray-400 flex py-2'>
                          {formatDate(item.n_date)}
                          <ChevronLeftIcon className='w-4 h-4 transform rotate-180' />
                        </p>
                      </div>

                      <p className='text-sm text-left text-gray-500 dark:text-gray-400'>
                        {item.n_contents}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <FaqDetail id={isFaqId} />
            </Dialog>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
