import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Separator } from '../ui/separator';
import Image, { ImageLoaderProps } from 'next/image';
import { ChevronRightIcon, StarIcon, ChevronLeftIcon } from 'lucide-react';
import { MapPin, XIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Map from '../map/Map';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';
import { imgLoader } from '@/utility/utils/imgLoader';
import mypageApi from '@/service/mypage';
import { formatDate } from '@/utility/hooks/comnHook';
import { Fragment, useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Skeleton } from '../ui/skeleton';
import { Badge } from '../ui/badge';
import CourseMarker from '../map/CourseMarker';

export default function TripReview({ id }: any) {
  const { data, isFetching, refetch } = mypageApi.GetTripReviewDetail(id);
  const [markerInfo, setMarkerInfo] = useState<any>(null);

  const [isDay, setIsDay] = useState('');
  const [map, setMap] = useState(null);

  const [lat, setLat] = useState(0);

  const [lng, setLng] = useState(0);

  useEffect(() => {
    return () => {
      console.log('Component has been unmounted');

      setIsDay('');
      setMarkerInfo(null);
    };
  }, []);

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [id]);

  return (
    <DialogContent className='md:w-[1000px] w-full md:h-[90%] h-full overflow-scroll'>
      <div className='space-y-8 px-4 py-8 xl:py-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tighter'>
            {data?.blog?.b_title}
          </h1>
          <div className='flex items-center space-x-2 text-sm font-medium'>
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < data?.blog?.b_star
                    ? 'fill-accent text-yellow-500'
                    : 'fill-accent stroke-muted-foreground '
                }`}
              />
            ))}
            <span className='text-gray-500 dark:text-gray-400'>
              ({data?.blog?.b_star})
            </span>
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Avatar className='w-10 h-10 border'>
                <AvatarImage alt='@username' src='/placeholder-user.jpg' />
                <AvatarFallback>
                  {data?.blog.b_fk_id.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className='grid gap-0.5'>
              <div className='font-semibold'>{data?.blog.b_fk_id}</div>
              <div className='text-gray-500 text-sm dark:text-gray-400'>
                <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                  {formatDate(data?.blog?.b_create_dt)}
                </p>
              </div>
            </div>
          </div>
          <Separator />
          {isFetching ? (
            <Skeleton className='h-[400px] w-[500px] rounded-xl' />
          ) : (
            <Image
              loader={({ src, width, quality }: ImageLoaderProps) =>
                imgLoader({ src, width, quality })
              }
              alt='Restaurant'
              className='overflow-hidden rounded-xl object-bottom'
              height='200'
              src={`http://14.6.54.241:8080/download/${data?.mainFile.url}`}
              width='500'
            />
          )}
          <Separator />
          <Carousel
            opts={{
              align: 'start'
            }}
            className='w-full mt-5'
          >
            <CarouselContent>
              {data?.files?.map((data: any, index: number) => (
                <CarouselItem
                  key={index}
                  className='md:basis-1/3 basis-1/2 lg:basis-1/4'
                >
                  <Image
                    loader={({ src, width, quality }: ImageLoaderProps) =>
                      imgLoader({ src, width, quality })
                    }
                    alt='Restaurant'
                    className='overflow-hidden rounded-xl object-bottom'
                    height='200'
                    src={`http://14.6.54.241:8080/download/${data.url}`}
                    width='500'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Separator />
          <h2 className='text-lg font-semibold'>여행 코스</h2>
          <div className='h-[580px] w-full'>
            <div className='h-[500px] w-full'>
              <Map setMap={setMap} />
              <CourseMarker data={markerInfo} map={map} lat={lat} lng={lng} />
              {data?.planList.map((list: any, index: any) => (
                <Button
                  key={index}
                  className='m-1 text-sm'
                  size='sm'
                  onClick={() => {
                    setIsDay(index + 1);
                    setMarkerInfo(list.dayPlanList);
                  }}
                  variant={isDay === index + 1 ? 'default' : 'secondary'}
                >
                  Day{index + 1}
                </Button>
              ))}
            </div>
          </div>
          <Separator />
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>여행 일정</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>사진</TableHead>
                  <TableHead className='w-[140px]'>이름</TableHead>
                  <TableHead className='w-[150px]'>장소</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.planList.map((list: any, index: any) => (
                  <Fragment key={list.day}>
                    <Badge className='mt-2 ml-3'>Day {index + 1}</Badge>

                    {list?.dayPlanList.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3}>일정 없음</TableCell>
                      </TableRow>
                    )}
                    {list?.dayPlanList.map((item: any, innerIndex: any) => (
                      <TableRow key={innerIndex}>
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
                            className='rounded-md min-w-[64px] min-h-[64px]'
                            src={`http://14.6.54.241:8080/download/${item.tp_fk_company_info.c_img}`}
                            height={64}
                            width={64}
                          />
                        </TableCell>
                        <TableCell className='text-overflow-ellipsis w-[150px]'>
                          {item.tp_fk_company_info.c_name}
                        </TableCell>
                        <TableCell className='text-overflow-ellipsis w-[200px]'>
                          {item.tp_fk_company_info.c_addr}
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </div>

          <h2 className='text-lg font-semibold'>
            총 비용: ₩{data?.blog?.b_cost}
          </h2>
          <Separator />
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <h2 className='text-lg font-semibold'>후기</h2>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {data?.blog?.b_contents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
