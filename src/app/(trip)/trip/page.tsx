'use client';
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/app/components/ui/tabs';
import Product from '@/app/components/trip/Product';
import TripCourse, { ItripType } from '@/app/components/trip/TripCourse';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/app/components/ui/drawer';
import Map from '@/app/components/map/Map';
import { Layers3 } from 'lucide-react';
import ShowppingCart from '@/app/components/trip/ShowppingCart';
import tripStore from '@/stores/trip';
import tripApi from '@/service/trip';
import Markers from '@/app/components/map/Markers';
import { getTripRs } from '@/type/trip';
import CourseMarker from '@/app/components/map/CourseMarker';
import { Button } from '@/app/components/ui/button';

export default function Trip() {
  const [category, setCategory] = useState<string>('');
  const { createTravelPK } = tripStore();
  const [tabValue, setTabValue] = useState('ProductList');
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  // day 버튼
  const [isDay, setIsDay] = useState(0);
  // 여정 정보
  const [markerInfo, setMarkerInfo] = useState<any>(null);

  const { data, isFetching } = tripApi.GetTrip(category);

  const { data: courseData, isLoading } =
    tripApi.GetTravelCourse(createTravelPK);

  useEffect(() => {
    if (tabValue === 'tripcourse') {
      setMarkerInfo(null);
      setIsDay(0);
    }
  }, [tabValue]);

  const handlerCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <div className='flex overflow-hidden w-screen h-screen '>
      <div className='flex-col h-full md:w-1/2 lg:w-1/3 w-1/3 mx-3 md:block hidden'>
        <Tabs
          defaultValue='account'
          className=''
          value={tabValue}
          onValueChange={val => setTabValue(val)}
        >
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='ProductList'>상품 목록</TabsTrigger>
            <TabsTrigger value='tripcourse'>여행 코스</TabsTrigger>
            <TabsTrigger value='poket'>장바구니</TabsTrigger>
          </TabsList>
          <TabsContent value='ProductList'>
            <Product
              data={data}
              handlerCategory={handlerCategory}
              isFetching={isFetching}
            />
          </TabsContent>
          <TabsContent value='tripcourse'>
            <div className=' overflow-scroll  h-[85vh]'>
              <TripCourse courseData={courseData} isLoading={isLoading} />
            </div>
          </TabsContent>
          <TabsContent value='poket'>
            <ShowppingCart />
          </TabsContent>
        </Tabs>
      </div>
      <div className=' h-full md:w-2/3  w-full'>
        <div className=' border md:h-full h-full'>
          <Map setMap={setMap} data={data} />
          {tabValue === 'ProductList' && (
            <Markers
              data={data}
              map={map}
              setCurrentStore={setCurrentStore}
              currentStore={currentStore}
              category={category}
            />
          )}
          {tabValue === 'tripcourse' && (
            <>
              <CourseMarker data={markerInfo} map={map} />
              <div className='fixed top-20 mx-2 rounded-md shadow-md z-20 bg-slate-200'>
                <div className='flex flex-wrap justify-center'>
                  {courseData?.planList?.map((list: any, index: any) => (
                    <Button
                      key={index}
                      className='m-1 text-center text-sm'
                      size='sm'
                      onClick={() => {
                        setIsDay(index + 1);
                        setMarkerInfo(list.dayPlanList);
                      }}
                      variant={isDay === index + 1 ? 'default' : 'secondary'}
                    >
                      Day {index + 1}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
          <div className='md:hidden block'>
            <Drawer>
              <DrawerTrigger className='absolute bottom-5 right-5 overflow-auto z-10'>
                <div className='rounded-sm bg-yellow-300 w-8 h-8 resize'>
                  <Layers3
                    color='black'
                    className='bg-white rounded-full w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  />
                </div>
              </DrawerTrigger>
              <DrawerContent className=''>
                <DrawerHeader>
                  <Tabs
                    defaultValue='account'
                    className=''
                    value={tabValue}
                    onValueChange={val => setTabValue(val)}
                  >
                    <TabsList className='grid w-full grid-cols-3'>
                      <TabsTrigger value='ProductList'>상품 목록</TabsTrigger>
                      <TabsTrigger value='tripcourse'>여행 코스</TabsTrigger>
                      <TabsTrigger value='poket'>장바구니</TabsTrigger>
                    </TabsList>
                    <TabsContent value='ProductList'>
                      <div className='h-[500px]'>
                        <Product
                          data={data}
                          handlerCategory={handlerCategory}
                          isFetching={isFetching}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value='tripcourse'>
                      <div className='h-[500px] overflow-scroll'>
                        <TripCourse
                          courseData={courseData}
                          isLoading={isLoading}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value='poket'>
                      <div className='h-[500px]'>
                        <ShowppingCart />
                      </div>
                    </TabsContent>
                  </Tabs>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
