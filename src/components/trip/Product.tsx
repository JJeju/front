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
import tripApi from '@/service/trip';
export default function Product({ data }: any) {
  console.log('>>', data);
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
        <ScrollArea
          id='scrollarea'
          className='md:h-3/4 h-5/6  rounded-md border '
        >
          {data?.map((item: any, index: number) => (
            <Card className='flex gap-2 items-center w-auto' key={index}>
              <div className='relative  md:w-[200px] w-[170px] h-[150px]'>
                <Image
                  src={`http://14.6.54.241:8080/download/${item.c_img}`}
                  alt='사진 없음'
                  className='p-2 rounded-lg shadow-2xl'
                  layout='fill'
                  objectFit='cover'
                  // width={100}
                  // height={200}
                />
              </div>
              <div className='flex flex-col mt-5 mb-2 mx-2 gap-1  h-full w-[200px] lg:w-[250px] md:w-[250px] '>
                <div className='flex flex-col items-start'>
                  <div className='text-left md:text-2xl text-xl font-bold  whitespace-nowrap overflow-hidden overflow-ellipsis w-[200px] lg:w-[250px] md:w-[250px]'>
                    {item.c_name}
                  </div>
                  <div className='pt-1'>
                    <Badge variant={'secondary'}>{item.c_category}</Badge>
                  </div>
                  <div className='text-sm text-left whitespace-nowrap overflow-hidden overflow-ellipsis w-[200px] lg:w-[250px] md:w-[250px]'>
                    {item.c_addr}
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className='flex items-center gap-2'>
                      <Button size='sm' className='w-22'>
                        상세보기
                      </Button>
                    </div>
                  </DialogTrigger>

                  {item.c_category === '숙박' ? (
                    <Accommodation />
                  ) : (
                    <>
                      <Restaurant />
                    </>
                  )}
                </Dialog>
              </div>
            </Card>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
