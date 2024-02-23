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
  const [items, setItems] = useState([[0, 1, 2, 3], [4, 5], [6], [7], [8]]);
  console.log('', items);

  const onRemove = (item: any) => {
    setItems(removeItem(items, item));
  };

  function removeItem<T>([...arr]: T[], item: T) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
    return arr;
  }

  const handleReorder = (newOrder: any[]) => {
    // This is a simplified example. You might need to adjust the logic based on your exact data structure.
    const isSameGroup = (draggedItem: any, targetItem: { group: any }) => {
      // Assuming each item has a group property that can be used to identify the group
      return draggedItem.group === targetItem.group;
    };

    // Assuming newOrder is an array of items with their new positions
    const updatedItems = items.map(group => {
      return group.map(item => {
        // Find the item in the newOrder array that matches the current item
        const newItem = newOrder.find(
          (newOrderItem: { id: any }) => newOrderItem.id === item.id
        );
        if (newItem && isSameGroup(item, newItem)) {
          // If the item is in the same group, update its position
          return newItem;
        }
        // If the item is not in the same group or not found, keep the original item
        return item;
      });
    });

    setItems(updatedItems);
  };

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
      <Reorder.Group
        axis='y'
        values={items.flat()}
        onReorder={handleReorder}
        layoutScroll
      >
        <Table>
          <TableBody>
            <TableHeader className='w-full'>
              <TableRow className='w-full'>
                <TableHead className='w-[140px]'>사진</TableHead>
                <TableHead className='w-[140px]'>이름</TableHead>
                <TableHead className='w-[150px]'>장소</TableHead>
                <TableHead className='w-[20px]'></TableHead>
              </TableRow>
            </TableHeader>
            {items.map((list, index) => (
              <>
                <h1 className='text-2xl pt-2 px-4' key={index}>
                  {index}일차
                </h1>
                {list.map((item: any, index) => (
                  <TableRow key={index}>
                    <Reorder.Item value={item} key={index} className='w-full'>
                      <TableCell className='  w-[150px] '>
                        <Image
                          alt='Tour image'
                          className='aspect-1/2 rounded-md object-cover overflow-hidden'
                          src={'/56692-O8P89L-432.jpg'}
                          height='36'
                          width='64'
                        />
                      </TableCell>
                      <TableCell className=' text-overflow-ellipsis w-[150px] '>
                        제주도 휴가 패키지
                      </TableCell>
                      <TableCell className=' text-overflow-ellipsis w-[200px]'>
                        {item}
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
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </Reorder.Group>
    </div>
  );
}
