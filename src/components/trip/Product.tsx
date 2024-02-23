import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Dialog, DialogTrigger } from '../ui/dialog';
import Accommodation from '../product/Accommodation';
import Restaurant from '../product/Restaurant';
import Map from '../map/Map';
export default function Product() {
  return (
    <>
      <div className='h-full md:h-screen'>
        <div className='flex justify-center'>
          <div className='flex space-x-2 py-2 w-[80%]'>
            <Input type='email' placeholder='검색하세요' />
            <Button type='submit'>검색</Button>
          </div>
        </div>
        <div className='flex space-x-2  justify-center items-center  my-3'>
          <Checkbox id='terms' className='md:w-6 md:h-6 w-5 h-5' />
          <label
            htmlFor='terms'
            className='md:text-lg text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            숙박
          </label>
          <Checkbox id='terms' className='md:w-6 md:h-6 w-5 h-5' />
          <label
            htmlFor='terms'
            className='md:text-lg text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            식당
          </label>
          <Checkbox id='terms' className='md:w-6 md:h-6 w-5 h-5' />
          <label
            htmlFor='terms'
            className='md:text-lg text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            레저
          </label>
          <Checkbox id='terms' className='md:w-6 md:h-6 w-5 h-5' />
          <label
            htmlFor='terms'
            className='md:text-lg text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            관광지
          </label>
          <Checkbox id='terms' className='md:w-6 md:h-6 w-5 h-5' />
          <label
            htmlFor='terms'
            className='md:text-lg text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            찜
          </label>
        </div>
        <ScrollArea className='md:h-3/4 h-5/6  rounded-md border '>
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
                <div className='flex flex-col items-start'>
                  <div className='md:text-2xl text-xl font-bold '>00호텔</div>
                  <div className='text-base '>주소입니다</div>
                  <div className='md:text-sm text-xs pt-1'>세부내용입니다</div>
                </div>
                <div className='flex md:flex-row flex-col md:justify-between  md:items-center '>
                  <div className='text-gray-500 dark:text-gray-400 text-lg font-bold py-1 md:block hidden'>
                    ₩350,000
                  </div>
                  <div className='flex justify-between items-end gap-2 '>
                    <div className='text-gray-500 dark:text-gray-400 text-lg font-bold py-1 md:hidden block '>
                      ₩350,000
                    </div>
                    <Dialog>
                      <DialogTrigger>
                        <Button size='sm' className='w-22'>
                          상세보기
                        </Button>
                      </DialogTrigger>

                      {index / 2 === 0 ? (
                        <Accommodation />
                      ) : (
                        <>
                          <Restaurant />
                        </>
                      )}
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
