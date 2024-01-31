import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
export default function Product() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex space-x-2 py-2 w-[80%]'>
          <Input type='email' placeholder='검색하세요' />
          <Button type='submit'>검색</Button>
        </div>
      </div>
      <div className='flex space-x-3  justify-center items-center  my-3'>
        <Checkbox id='terms' className='w-6 h-6' />
        <label
          htmlFor='terms'
          className='text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          숙박
        </label>
        <Checkbox id='terms' className='w-6 h-6' />
        <label
          htmlFor='terms'
          className='text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          식당
        </label>
        <Checkbox id='terms' className='w-6 h-6' />
        <label
          htmlFor='terms'
          className='text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          레저
        </label>
      </div>
      <ScrollArea className='h-screen overflow-hidden rounded-md border '>
        {Array.from({ length: 50 }).map((_, index) => (
          <Card className='flex gap-2 items-center ' key={index}>
            <Image
              src={'/56692-O8P89L-432.jpg'}
              alt='Image'
              className='p-2 rounded-lg shadow-2xl'
              width={150}
              height={100}
            />
            <div className='flex flex-col mt-5 mb-2 mx-2 gap-1 w-full h-full '>
              <div className='text-2xl font-bold'>00호텔</div>
              <div className='text-base '>주소입니다</div>
              <div className='text-sm'>세부내용입니다</div>
              <div className='flex md:flex-row flex-col  md:justify-between md:items-end'>
                <div className='text-base font-mono'>100,000원</div>
                <Button>상세보기</Button>
              </div>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </>
  );
}
