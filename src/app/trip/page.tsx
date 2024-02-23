import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Product from '@/components/trip/Product';
import TripCourse from '@/components/trip/TripCourse';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import Map from '@/components/map/Map';
import { Layers3 } from 'lucide-react';
import ShowppingCart from '@/components/trip/ShowppingCart';

export default function Trip() {
  return (
    <div className='flex overflow-hidden w-screen h-screen '>
      <div className='flex-col h-full lg:w-1/3 w-1/2 mx-3 md:block hidden'>
        <Tabs defaultValue='account' className=''>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='ProductList'>상품 목록</TabsTrigger>
            <TabsTrigger value='tripcourse'>여행 코스</TabsTrigger>
            <TabsTrigger value='poket'>장바구니</TabsTrigger>
          </TabsList>
          <TabsContent value='ProductList'>
            <Product />
          </TabsContent>
          <TabsContent value='tripcourse'>
            <div className='h-[870px] overflow-scroll'>
              <TripCourse />
            </div>
          </TabsContent>
          <TabsContent value='poket'>
            <ShowppingCart />
          </TabsContent>
        </Tabs>
      </div>
      <div className='lg:w-2/3 h-full md:w-1/2 w-full'>
        <div className=' border md:h-full h-full'>
          <Map />
          <div className='md:hidden block'>
            <Drawer>
              <DrawerTrigger className='absolute bottom-5 right-5 overflow-auto z-10'>
                <Layers3
                  color='black'
                  className='bg-white rounded-full w-6 h-6'
                />
              </DrawerTrigger>
              <DrawerContent className=''>
                <DrawerHeader>
                  <Tabs defaultValue='account' className=''>
                    <TabsList className='grid w-full grid-cols-3'>
                      <TabsTrigger value='ProductList'>상품 목록</TabsTrigger>
                      <TabsTrigger value='tripcourse'>여행 코스</TabsTrigger>
                      <TabsTrigger value='poket'>장바구니</TabsTrigger>
                    </TabsList>
                    <TabsContent value='ProductList'>
                      <div className='h-[600px] '>
                        <Product />
                      </div>
                    </TabsContent>
                    <TabsContent value='tripcourse'>
                      <div className='h-[600px] overflow-scroll'>
                        <TripCourse />
                      </div>
                    </TabsContent>
                    <TabsContent value='poket'>
                      <div className='h-[600px]'>
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
