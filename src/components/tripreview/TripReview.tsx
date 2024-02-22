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
import {
  ChevronRightIcon,
  StarIcon,
  ChevronLeftIcon,
  Table
} from 'lucide-react';
import { MapPin, XIcon } from 'lucide-react';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '../ui/avatar';
import Map from '../map/Map';
import {
  TableBody,
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
          </div>

          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <h2 className='text-lg font-semibold'>소개</h2>
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
