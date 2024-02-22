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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DatePicker from '../ui/datepicker';

export default function NoticeInfo() {
  return (
    <DialogContent className='w-full md:h-[90%] h-full overflow-scroll'>
      <div className='max-w-5xl mx-auto space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tighter '>레스토랑</h1>
        </div>
      </div>
      <div className='grid gap-4'>
        <div className='flex items-center gap-4'>
          <div className='grid gap-0.5'>
            <div className='font-semibold'>캐서린이 호스팅</div>
            <div className='text-gray-500 text-sm dark:text-gray-400'>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                제주 석귀포시 성산읍 일출로 284-12
              </p>
            </div>
          </div>
        </div>

        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>소개</h2>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              우아한 장식, 유명인 출연, 맛있는 요리로 유명합니다.
            </p>
          </div>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>영업 시간</h2>
            <div className='grid gap-0.5 text-sm text-gray-500 md:grid-cols-2 dark:text-gray-400'>
              <span>월 - 금: 오전 11:30 - 오후 2:30</span>
              <span>토 - 일: 오후 5:00 - 오후 10:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <h2 className='text-xl font-semibold'>메뉴</h2>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            메뉴는 매일 변경될 수 있습니다.
          </p>
        </div>
      </div>
    </DialogContent>
  );
}
