'use client';
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
import { Reorder, useDragControls } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import { DatePickerWithRange } from '../ui/datepickerwithrange';
import { imgLoader } from '@/utility/utils/imgLoader';
import tripApi from '@/service/trip';
import tripStore from '@/stores/trip';
import { formatDate } from '@/utility/hooks/comnHook';
import { set } from 'date-fns';

export default function TripCourse() {
  const createTravelPK = tripStore(state => state.createTravelPK);
  const { data: courseData, isFetching } = tripApi.GetTravelCourse(1);
  const [form, setForm] = useState({
    tr_title: '',
    tr_relationship: '',
    tr_in: '',
    tr_out: ''
  });

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  console.log('>>', items);

  useEffect(() => {
    if (courseData)
      // setItems(courseData.planList.dayPlanList.Flat());
      setItems(courseData.planList);
    setCurrentItem(
      courseData?.planList.flatMap((list: any) => list.dayPlanList)
    );
  }, [courseData]);

  // const onRemove = (item: any) => {
  //   setItems(removeItem(items, item));
  // };

  const handleReorder = (newValue: any) => {
    console.log('newValue>>', newValue);
    // setItems(newValue);
    setCurrentItem(newValue);
    // const updatedItems = items.map(group => {
    //   return group.map(item => {
    //     const newItem = newOrder.find(
    //       (newOrderItem: { id: any }) => newOrderItem.id === item.id
    //     );
    // console.log('newOrder>>', newOrder);
    // setItems(newOrder);
    // };
    // });
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = () => {
    setIsDisabled(true);
  };

  const handleDateChange = (newDateRange: any) => {
    setForm({
      ...form,
      tr_in: formatDate(newDateRange.from),
      tr_out: formatDate(newDateRange.to)
    });
  };

  if (isFetching) {
    return <div>loading...</div>;
  }
  return (
    <div className='w-full  '>
      <div className='grid gap-8 mt-4 '>
        <div className='flex gap-2'>
          <h3 className='text-2xl font-semibold'>여행 정보</h3>
          <Button className='ml-2' size='sm'>
            여정 저장
          </Button>
        </div>
        <div className='border p-4 rounded-lg'>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-8'>
            <div className='grid gap-2 '>
              <Label className='text-sm flex justify-start' htmlFor='phone-1'>
                여정이름
              </Label>
              <Input
                id='phone-1'
                required
                type='tel'
                value={
                  isDisabled ? courseData?.travelroute?.tr_title : form.tr_title
                }
                disabled={isDisabled}
                onChange={onChange}
                name='tr_title'
              />
            </div>
            <div className='grid gap-2'>
              <Label className='text-sm flex justify-start' htmlFor='email-1'>
                인원
              </Label>
              <Select
                value={
                  isDisabled
                    ? courseData.travelroute?.tr_relationship
                    : form.tr_relationship
                }
                onValueChange={value => {
                  setForm({ ...form, tr_relationship: value });
                }}
                disabled={isDisabled}
              >
                <SelectTrigger className=''>
                  <SelectValue placeholder='인원' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='혼자'>혼자</SelectItem>
                  <SelectItem value='커플'>커플</SelectItem>
                  <SelectItem value='가족'>가족</SelectItem>
                  <SelectItem value='다인'>다인</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid-cols-1 grid gap-4 mt-8'>
            <div className='grid gap-2 '>
              <Label className='text-sm flex justify-start' htmlFor='email-1'>
                날짜
              </Label>

              <DatePickerWithRange
                className='w-full'
                disabled={isDisabled}
                onDateChange={handleDateChange}
                start={courseData.travelroute?.tr_in}
                end={courseData.travelroute?.tr_out}
              />
            </div>
          </div>
          <div className='flex justify-end mt-4'>
            <Button
              className='ml-2'
              size='sm'
              variant='secondary'
              onClick={() => setIsDisabled(false)}
            >
              여정 수정
            </Button>
          </div>
        </div>
      </div>
      <div className='h-[440px]'>
        <Table>
          <TableBody>
            <TableRow className='w-full'>
              <TableHead className='w-[140px]'>사진</TableHead>
              <TableHead className='w-[140px]'>이름</TableHead>
              <TableHead className='w-[150px]'>장소</TableHead>
              <TableHead className='w-[20px]'></TableHead>
            </TableRow>
          </TableBody>
        </Table>
        <Reorder.Group
          axis='y'
          values={items} // Use the entire flattened data for reordering across days
          onReorder={handleReorder}
        >
          {courseData?.planList.map((list: any, index: number) => (
            <Fragment key={list.day}>
              <div className='text-xl pt-2 px-4 text-left font-extrabold'>
                {index}일차 - ({list.day})
              </div>
              {list.dayPlanList.map((item: any) => (
                <Reorder.Item value={currentItem} key={item} className='w-full'>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className='w-[150px] '>
                          <Image
                            loader={({
                              src,
                              width,
                              quality
                            }: ImageLoaderProps) =>
                              imgLoader({ src, width, quality })
                            }
                            alt='Tour image'
                            className='aspect-1/2 rounded-md object-cover overflow-hidden'
                            src={'/56692-O8P89L-432.jpg'}
                            height='36'
                            width='64'
                          />
                        </TableCell>
                        <TableCell className=' text-overflow-ellipsis w-[150px] '>
                          {item.tp_pk_num}
                        </TableCell>
                        <TableCell className=' text-overflow-ellipsis w-[200px]'>
                          {/* {item} */}
                        </TableCell>
                        <TableCell className='text-right'>
                          <Button
                            variant='destructive'
                            size='sm'
                            // onClick={() => onRemove(item)}
                          >
                            삭제
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Reorder.Item>
              ))}
            </Fragment>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
