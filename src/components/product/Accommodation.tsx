import { Button } from '../ui/button';
import { DateRangePicker } from '../ui/daterangepicker';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog';
import Image from 'next/image';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
export default function Accommodation() {
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <div className='flex justify-center'>
          <Image
            src={'/56692-O8P89L-432.jpg'}
            alt='Image'
            className='p-2 rounded-lg shadow-2xl'
            width={250}
            height={400}
          />
        </div>
        <div className='flex flex-col p-2 justify-start items-start'>
          <DialogTitle className='text-2xl'>00호텔</DialogTitle>
          <DialogDescription>장소</DialogDescription>
        </div>
      </DialogHeader>
      <div className='grid gap-4 py-4  border-y-2'>
        <p className='text-xl font-bold'>예약 정보</p>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='name' className='text-right'>
            예약자명
          </Label>
          <Input id='name' defaultValue='' className='col-span-3' />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='name' className='text-right'>
            전화번호
          </Label>
          <Input id='name' defaultValue='' className='col-span-3' />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='username' className='text-right'>
            날짜
          </Label>
          <DateRangePicker className='w-8' />
        </div>
        <div className='flex justify-end'>
          <Button size='sm' className='w-1/4' variant='secondary'>
            확인
          </Button>
        </div>
      </div>
      <DialogFooter className='flex flex-row items-center justify-end gap-4 '>
        <div className='text-base font-mono py-1'>100,000원</div>
        <Button type='submit'>담기</Button>
      </DialogFooter>
    </DialogContent>
  );
}
