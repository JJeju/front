import React from 'react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Product from '@/components/trip/Product';

export default function Trip() {
  return (
    <div className='flex overflow-hidden  w-screen h-screen'>
      <div className='flex flex-col h-full md:w-1/3 w-2/3  mx-3'>
        <Tabs defaultValue='account' className=''>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='account'>상품 목록</TabsTrigger>
            <TabsTrigger value='password'>여행 코스</TabsTrigger>
            <TabsTrigger value='poket'>장바구니</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <Product />
          </TabsContent>
        </Tabs>
      </div>
      <div className='md:w-2/3  h-full w-full'>
        <div className='p-4 border h-full'>여행 지도</div>
      </div>
    </div>
  );
}
