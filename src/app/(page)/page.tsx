import Image, { ImageLoaderProps } from 'next/image';
import { Suspense } from 'react';
import mainApi from '@/service/home';
import { imgLoader } from '@/utility/utils/imgLoader';
import MainLoading from '@/app/components/loading/MainLoading';
import MainReview from '@/app/components/loading/MainReview';
import BestList from './(home)/components/BestList';
import EventList from './(home)/components/EventList';
import TripCourseList from './(home)/components/TripCourseList';
import FaqList from './(home)/components/FaqList';
import MainButton from './(home)/components/MainButton';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query';
import axiosInstance from '@/utility/axiosInterceptor';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['main', 'best'],
    queryFn: GetMainProduct
  });

  await queryClient.prefetchQuery({
    queryKey: ['main', 'event'],
    queryFn: GetMainEvent
  });

  await queryClient.prefetchQuery({
    queryKey: ['main', 'review'],
    queryFn: GetMainReview
  });

  await queryClient.prefetchQuery({
    queryKey: ['main', 'notice'],
    queryFn: GetMainNotice
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className='flex flex-col px-3 justify-between md:px-20 '>
      <div className='grid w-full place-items-center bg-cover bg-center  md:text-3xl text-base gap-5'>
        <div className='z-0 flex flex-col md:items-center md:justify-center gap-4 p-1 md:flex-row-reverse'>
          <Image
            src={'/56692-O8P89L-432.jpg'}
            alt='Image'
            className=' rounded-lg shadow-2xl'
            width={330}
            height={200}
          />
          <div className='md:text-3xl font-bold flex flex-col md:p-6 px-3 gap-3 '>
            제주도의 모든 여행코스를 한눈에 보고,
            <br />
            나만의 여행코스를 짤 수 있는 여행 플랫폼입니다.
            <MainButton />
          </div>
        </div>
      </div>
      <div className='mt-24 text-2xl md:text-3xl font-bold'>
        지금 인기있는 상품
      </div>
      <HydrationBoundary state={dehydratedState}>
        <Suspense fallback={<MainLoading />}>
          <BestList data={dehydratedState.queries[0].state.data} />
        </Suspense>
      </HydrationBoundary>
      <div className='mt-24 text-2xl md:text-3xl font-bold'>
        지금 인기있는 관광지
      </div>
      <Suspense fallback={<MainLoading />}>
        <EventList data={dehydratedState.queries[1].state.data} />
      </Suspense>
      <div className='w-full grid items-start md:gap-8 mb-12'>
        <div className='space-y-2'>
          <div className='md:mt-24 mt-20  text-2xl md:text-3xl font-bold'>
            여행 후기
          </div>
          <Suspense fallback={<MainReview />}>
            <TripCourseList data={dehydratedState.queries[2].state.data} />
          </Suspense>
        </div>

        <div className='space-y-2'>
          <div className='md:mt-24 mt-20 text-2xl md:text-3xl font-bold'>
            공지사항
          </div>
          <Suspense fallback={<MainReview />}>
            <FaqList data={dehydratedState.queries[3].state.data} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export const GetMainProduct = async () => {
  const res = await axiosInstance.get(`/api/main/home/business_place`);
  return [
    ...res.data.body.leisure,
    ...res.data.body.lodgment,
    ...res.data.body.restaurant
  ];
};

export const GetMainEvent = async () => {
  const res = await axiosInstance.get(`/api/main/home/event-spot`);
  return [...res.data.body.event, ...res.data.body.spot];
};

export const GetMainReview = async () => {
  const res = await axiosInstance.get(`/api/main/public_blog`);
  return res.data.body.publicBlogList;
};

export const GetMainNotice = async () => {
  const res = await axiosInstance.get(`/api/main/home/notice`);
  return res.data.body.notice;
};
