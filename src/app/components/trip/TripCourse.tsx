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
import { Fragment, useCallback, useEffect, useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import { DatePickerWithRange } from '../ui/datepickerwithrange';
import { imgLoader } from '@/utility/utils/imgLoader';
import tripApi from '@/service/trip';
import tripStore from '@/stores/trip';
import { formatDate } from '@/utility/hooks/comnHook';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Skeleton } from '../ui/skeleton';
import { Badge } from '../ui/badge';
import { Calendar, Calendar as CalendarIcon } from 'lucide-react';
export default function TripCourse() {
  const createTravelPK = tripStore(state => state.createTravelPK);
  const { data: courseData, isLoading } = tripApi.GetTravelCourse(1);
  const [form, setForm] = useState({
    tr_title: '',
    tr_relationship: '',
    tr_in: '',
    tr_out: ''
  });

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (courseData)
      // setItems(courseData.planList.dayPlanList.Flat());
      setItems(courseData.planList);
    setCurrentItem(
      courseData?.planList.flatMap((list: any) => list.dayPlanList)
    );
  }, [courseData]);

  const onDragEnd = useCallback(
    (result: any) => {
      const { destination, source, draggableId, type } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const newItems = [...items];
      const startListIndex = Number(source.droppableId);
      const finishListIndex = Number(destination.droppableId);
      const startList: any = newItems[startListIndex];
      const finishList: any = newItems[finishListIndex];
      const draggedItem = startList.dayPlanList[source.index];

      // Moving within the same list
      if (startListIndex === finishListIndex) {
        startList.dayPlanList.splice(source.index, 1);
        startList.dayPlanList.splice(destination.index, 0, draggedItem);
      } else {
        // Moving to a different list
        startList.dayPlanList.splice(source.index, 1);
        finishList.dayPlanList.splice(destination.index, 0, draggedItem);
      }

      setItems(newItems);
    },
    [items]
  );

  const handleReorder = (newValue: any) => {
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

  return (
    <div className='w-full'>
      <div className='grid gap-4 mt-3 '>
        <div className='flex'>
          <h3 className='text-xl font-semibold'>여행 정보</h3>
          <Button className='ml-2' size='sm'>
            여정 저장
          </Button>
        </div>
        <div className='border p-4 rounded-lg'>
          {!isLoading ? (
            <>
              <div className='grid gap-4 sm:grid-cols-2 sm:gap-8'>
                <div className='grid gap-2 '>
                  <Label
                    className='text-sm flex justify-start'
                    htmlFor='phone-1'
                  >
                    여정이름
                  </Label>
                  <Input
                    id='phone-1'
                    required
                    type='tel'
                    value={
                      isDisabled
                        ? courseData?.travelroute?.tr_title
                        : form.tr_title
                    }
                    disabled={isDisabled}
                    onChange={onChange}
                    name='tr_title'
                  />
                </div>
                <div className='grid gap-2'>
                  <Label
                    className='text-sm flex justify-start'
                    htmlFor='email-1'
                  >
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
                  <Label
                    className='text-sm flex justify-start'
                    htmlFor='email-1'
                  >
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
            </>
          ) : (
            <Skeleton className='w-full h-56' />
          )}
        </div>
      </div>
      <div className='h-[440px]'>
        <h2 className='text-xl font-semibold mt-3 text-left'>여행 일정</h2>
        <Table>
          <TableBody className='p-0'>
            {items.map((list: any, index: any) => (
              <Fragment key={list.day}>
                <Badge className='w-[140px] flex justify-center items-center mt-3 font-bold'>
                  Day {index + 1}
                  <Calendar size={15} className='pl-1 ' />
                  {list.day}
                </Badge>
                {list?.dayPlanList.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} className='text-left'>
                      일정 없음
                    </TableCell>
                  </TableRow>
                )}
                {list.dayPlanList.map((item: any, innerIndex: any) => (
                  <TableRow key={innerIndex}>
                    <TableCell className='w-[10px]'>
                      <Image
                        alt='Tour image'
                        className='rounded-md min-w-[84px] min-h-[84px] '
                        src={`http://jjeju.site/download/${item.tp_fk_company_info.c_img}`}
                        height={84}
                        width={84}
                      />
                    </TableCell>
                    <TableCell className=' text-overflow-ellipsis w-[150px] text-xs font-bold text-left'>
                      {item.tp_fk_company_info.c_name}
                    </TableCell>
                    <TableCell className=' text-overflow-ellipsis w-[200px] text-xs text-left'>
                      {item.tp_fk_company_info.c_addr}
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
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
