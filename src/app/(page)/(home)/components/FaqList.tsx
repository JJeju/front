'use client';
import FaqDetail from '@/app/components/faq/FaqDetail';
import { Card, CardContent } from '@/app/components/ui/card';
import { formatDate } from '@/utility/hooks/comnHook';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import { motion } from 'framer-motion';
import { Badge } from '@/app/components/ui/badge';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import mainApi from '@/service/home';

interface FaqListProps {
  data?: {
    n_pk_num: string;
    n_title: string;
    n_date: string;
    n_contents: string;
  }[];
}

export default function FaqList({ data }: any) {
  // const { data, isFetching } = mainApi.GetMainNotice();
  const router = useRouter();

  const [isFaqId, setIsFaqId] = useState(0);

  return (
    <>
      <p className='text-gray-500 dark:text-gray-400'>
        {data?.length}개의 새로운 공지사항이 있습니다.
      </p>
      <Badge className='text-sm' onClick={() => router.push('/notice')}>
        더보기
        <ChevronRightIcon size={20} />
      </Badge>
      <div className=' grid md:grid-cols-2 grid-cols-1 gap-3 mb-20'>
        {data?.map((data: any, index: number) => (
          <Fragment key={index}>
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  key={index}
                  onClick={() => setIsFaqId(data.n_pk_num)}
                  className=''
                  whileTap={{ scale: 0.9 }} // 클릭하는 동안 요소의 크기를 90%로 줄입니다.
                >
                  <Card className='p-5' key={index}>
                    <CardContent className='flex flex-col'>
                      <h3 className='text-xl font-semibold text-left'>
                        {data.n_title}
                      </h3>
                      <div className='text-xs'>
                        <p className='text-gray-500 text-left dark:text-gray-400 flex py-2'>
                          {formatDate(data.n_date)}
                          <ChevronLeftIcon className='w-4 h-4 transform rotate-180' />
                        </p>
                      </div>
                      <p className='text-sm text-gray-500 text-left dark:text-gray-400'>
                        {data.n_contents}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              {isFaqId != 0 && <FaqDetail id={isFaqId} />}
            </Dialog>
          </Fragment>
        ))}
      </div>
    </>
  );
}
