'use client';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Label } from '../ui/label';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { DatePickerWithRange } from '../ui/datepickerwithrange';
import tripApi from '@/service/trip';
import tripStore from '@/stores/trip';
import { formatDate } from '@/utility/hooks/comnHook';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Skeleton } from '../ui/skeleton';
import { Badge } from '../ui/badge';
import { TripCourseRs } from '@/type/trip';

export interface ItripType {
  dayPlanList: [
    {
      tp_pk_num: number;
      tp_fk_tnum: number;
      tp_fk_company_info: {
        c_pk_num: number;
        c_cnum: string;
        c_fk_id: string;
        c_name: string;
        c_phone: string;
        c_category: string;
        c_addr: string;
        c_condition: string;
        c_check: string;
        c_img: string;
        c_type: string;
        c_lat: number;
        c_lon: number;
        c_file_group_no: number;
      };
      tp_item_category: string;
      tp_plan_start_date_time: string;
      tp_plan_end_date_time: string;
      tp_rm: string;
      create_dt: string;
      update_dt: string;
    }
  ];
  day: string;
}
export default function TripCourse({
  courseData,
  isLoading
}: {
  courseData?: TripCourseRs;
  isLoading: boolean;
}) {
  const [form, setForm] = useState({
    tr_title: '',
    tr_relationship: '',
    tr_in: '',
    tr_out: ''
  });

  const [TripData, setTripData] = useState<ItripType[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (courseData) setTripData(courseData.planList);
  }, [courseData]);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (newDateRange: any) => {
    setForm({
      ...form,
      tr_in: formatDate(newDateRange.from),
      tr_out: formatDate(newDateRange.to)
    });
  };

  const onDragEnd = (result: any, TripData: any, setTripData: any) => {
    console.log('result>>', result);
    console.log('TripData>>', TripData);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = TripData[source.droppableId];

      const destColumn = TripData[destination.droppableId];
      const sourceItems = [...sourceColumn.dayPlanList];
      const destItems = [...destColumn.dayPlanList];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setTripData({
        ...TripData,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = TripData[source.droppableId];
      console.log('sourceColumn>>', column);
      const copiedItems = [...column.dayPlanList];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setTripData({
        ...TripData,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
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
                        ? courseData?.travelroute?.tr_relationship
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
                    start={courseData?.travelroute?.tr_in}
                    end={courseData?.travelroute?.tr_out}
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
        <DragDropContext
          onDragEnd={result => {
            onDragEnd(result, TripData, setTripData);
          }}
        >
          <Table>
            <TableBody className='p-0'>
              {Object.entries(TripData).map(
                ([columnId, column]: [string, any], index: any) => {
                  return (
                    <Droppable key={columnId} droppableId={column.day}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <Fragment key={column.day}>
                            <Badge className='w-[140px] flex justify-center items-center mt-3 font-bold'>
                              Day {index + 1} {column.day}
                            </Badge>
                            {column?.dayPlanList.length === 0 && (
                              <TableRow>
                                <TableCell colSpan={3} className='text-left'>
                                  일정 없음
                                </TableCell>
                              </TableRow>
                            )}
                            {column.dayPlanList.map(
                              (item: any, innerIndex: any) => (
                                <TableRow key={innerIndex}>
                                  <Draggable
                                    key={item.tp_pk_num}
                                    draggableId={item.tp_pk_num.toString()}
                                    index={innerIndex}
                                  >
                                    {provided => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
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
                                          >
                                            삭제
                                          </Button>
                                        </TableCell>
                                      </div>
                                    )}
                                  </Draggable>
                                </TableRow>
                              )
                            )}
                          </Fragment>
                        </div>
                      )}
                    </Droppable>
                  );
                }
              )}
            </TableBody>
          </Table>
        </DragDropContext>
      </div>
    </div>
  );
}
