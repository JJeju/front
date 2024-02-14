import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import Image from 'next/image';

export default function ShowppingCart() {
  return (
    <div className='flex flex-col md:h-screen h-full'>
      <ScrollArea className='md:h-3/4 h-5/6 w-full rounded-md border'>
        {Array.from({ length: 50 }).map((_, index) => (
          <Card className='flex gap-2 items-center ' key={index}>
            <Image
              src={'/56692-O8P89L-432.jpg'}
              alt='Image'
              className='p-2 rounded-lg shadow-2xl'
              width={150}
              height={100}
            />
            <div className='flex flex-col mt-5 mb-2 mx-2 gap-1 w-full h-full'>
              <div className='flex flex-col items-start'>
                <div className='md:text-2xl text-xl font-bold'>00호텔</div>
                <div className='text-base '>주소입니다</div>
                <div className='md:text-sm text-xs pt-1'>세부내용입니다</div>
              </div>
              <div className='flex md:flex-row flex-col md:justify-between  md:items-center '>
                <div className='flex justify-end'>
                  <div className='text-base font-mono py-1'>100,000원</div>
                </div>
                <div className='flex justify-end gap-2'>
                  <Button variant='destructive' size='sm'>
                    삭제
                  </Button>
                  <Button size='sm'>결제하기</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </ScrollArea>
      <div className=' h-1/6 md:h-1/4  font-mono py-2  mt-3 border-t-2'>
        <div className='flex justify-between gap-2 '>
          <div className='md:text-2xl text-xl font-bold'>합계</div>
          <div className='md:text-2xl text-xl font-bold'>100,000원</div>
        </div>
        <div className='flex-col flex items-end py-2'>
          <div className='flex gap-2'>
            <Button variant='destructive'>장바구니 비우기</Button>
            <Button>전체 주문하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
