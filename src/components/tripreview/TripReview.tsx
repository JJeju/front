import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Separator } from '../ui/separator';
import Image from 'next/image';
import { ChevronRightIcon, StarIcon, ChevronLeftIcon } from 'lucide-react';
import { MapPin, XIcon } from 'lucide-react';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '../ui/avatar';
import Map from '../map/Map';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';

export default function TripReview() {
  return (
    <DialogContent className='w-screen  md:h-[90%] h-full overflow-scroll'>
      <div className='space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tighter '>
            20대 추천
          </h1>
          <div className='flex items-center space-x-2 text-sm font-medium'>
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-accent' />
            <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
            <span className='text-gray-500 dark:text-gray-400'>
              5.0 (1,234 리뷰)
            </span>
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Avatar className='w-10 h-10 border'>
                <AvatarImage alt='@username' src='/placeholder-user.jpg' />
                <AvatarFallback>상구</AvatarFallback>
              </Avatar>
            </div>
            <div className='grid gap-0.5'>
              <div className='font-semibold'>상구</div>
              <div className='text-gray-500 text-sm dark:text-gray-400'>
                <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                  <MapPin size={15} /> 제주 석귀포시 성산읍 일출로 284-12
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div className='h-[500px] w-full'>
            <Map />
          </div>
          <Separator />
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>여행 일정</h2>

            {/* <h2 className='text-lg font-semibold mt-4'>1일차</h2> */}

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>사진</TableHead>
                  <TableHead className='w-[140px]'>이름</TableHead>
                  <TableHead className='w-[150px]'>장소</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <h1 className='text-2xl pt-2 '>1일차</h1>
                <TableRow>
                  <TableCell className='px-0 py-2'>
                    <Image
                      alt='Tour image'
                      className='aspect-1/2 rounded-md object-cover overflow-hidden'
                      src={'/56692-O8P89L-432.jpg'}
                      height='36'
                      width='64'
                    />
                  </TableCell>
                  <TableCell className=' text-overflow-ellipsis px-0 py-2'>
                    제주도 휴가 패키지
                  </TableCell>
                  <TableCell className=' text-overflow-ellipsis px-0 py-2'>
                    제주 석귀포시 성산읍 일출로 284-12
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='px-0 py-2'>
                    <Image
                      alt='Tour image'
                      className='aspect-1/2 rounded-md object-cover overflow-hidden'
                      src={'/56692-O8P89L-432.jpg'}
                      height='36'
                      width='64'
                    />
                  </TableCell>
                  <TableCell className=' text-overflow-ellipsis px-0 py-2'>
                    제주도 휴가 패키지
                  </TableCell>
                  <TableCell className=' text-overflow-ellipsis px-0 py-2'>
                    제주 석귀포시 성산읍 일출로 284-12
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <h2 className='text-lg font-semibold'>후기</h2>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                우아한 장식, 유명인 출연, 맛있는 요리로 유명합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
