'use client';
import { DateRangePicker } from '../ui/daterangepicker';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Label } from '../ui/label';
import { Reorder, motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import Image from 'next/image';

export default function TripCourse() {
  const [items, setItems] = useState([[0, 1, 2, 3], [4, 5], [6], [7]]);
  console.log('', items);

  const onRemove = (item: any) => {
    setItems(removeItem(items, item));
  };

  function removeItem<T>([...arr]: T[], item: T) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
    return arr;
  }

  return (
    <div className='w-full h-full '>
      <div className='grid gap-8 mt-4'>
        <div className='flex gap-2'>
          <h3 className='text-2xl font-semibold'>여행 정보</h3>
          <Button className='ml-2' size='sm'>
            여정 저장
          </Button>
        </div>
        <div className='border p-4 rounded-lg'>
          <form>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-8'>
              <div className='grid gap-2 '>
                <Label className='text-sm flex justify-start' htmlFor='phone-1'>
                  여정이름
                </Label>
                <Input id='phone-1' required type='tel' />
              </div>
              <div className='grid gap-2'>
                <Label className='text-sm flex justify-start' htmlFor='email-1'>
                  인원
                </Label>
                <Select>
                  <SelectTrigger className=''>
                    <SelectValue placeholder='인원수' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='grid-cols-1 grid gap-4 mt-8'>
              <div className='grid gap-2 '>
                <Label className='text-sm flex justify-start' htmlFor='email-1'>
                  날짜
                </Label>
                <DateRangePicker className='w-full' />
              </div>
            </div>
            <div className='flex justify-end mt-4'>
              <Button className='ml-2' size='sm' variant='secondary'>
                여정 수정
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Reorder.Group axis='y' values={items} onReorder={setItems}>
        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className='w-full'>
                <TableRow>
                  <TableHead className='w-[100px]'>사진</TableHead>
                  <TableHead className='w-[140px]'>이름</TableHead>
                  <TableHead className='w-[150px]'>장소</TableHead>
                  {/* <TableHead className='w-[120px]'>삭제</TableHead> */}
                </TableRow>
              </TableHeader>
              {items.map((list, index) => (
                <>
                  <h1 className='text-2xl pt-2 px-4' key={index}>
                    {index}일차
                  </h1>
                  {list.map((item: any, index) => (
                    <Reorder.Item value={item} key={index} className='w-full'>
                      <TableCell>
                        <Image
                          alt='Tour image'
                          className='aspect-1/2 rounded-md object-cover overflow-hidden'
                          src={'/56692-O8P89L-432.jpg'}
                          height='36'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className=' text-overflow-ellipsis '>
                        제주도 휴가 패키지
                      </TableCell>
                      <TableCell className=' text-overflow-ellipsis '>
                        제주dssdsdsddssdds도
                      </TableCell>
                      <TableCell className='text-right'>
                        <Button
                          variant='destructive'
                          size='sm'
                          onClick={() => onRemove(item)}
                        >
                          삭제
                        </Button>
                      </TableCell>
                    </Reorder.Item>
                  ))}
                </>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Reorder.Group>
    </div>
  );
}
