'use client';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DatePicker from '../ui/datepicker';
import { DateRangePicker } from '../ui/daterangepicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { useRouter } from 'next/navigation';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

export default function Journey() {
  const router = useRouter();

  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto '>
      <DialogTitle className='font-semibold'>J E J U</DialogTitle>
      <div className='flex justify-center'>
        <Tabs defaultValue='account' className='w-[390px]'>
          <TabsList className='grid w-full grid-cols-2 mt-8 '>
            <TabsTrigger value='account'>새 여정</TabsTrigger>
            <TabsTrigger value='password'>여정 불러오기</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <div className='grid gap-4 py-4 pr-5'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  여정이름
                </Label>
                <Input id='name' defaultValue='' className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  인원
                </Label>
                <Select>
                  <SelectTrigger className='col-span-3'>
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

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  날짜
                </Label>
                <DateRangePicker className='col-span-3 w-full' />
              </div>
              <div className='flex justify-end'>
                <Button
                  className='w-24'
                  type='submit'
                  onClick={() => router.push('/trip')}
                >
                  여정 저장
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='password'>
            <ScrollArea className='md:h-[260px] h-[600px] rounded-md border'>
              {Array.from({ length: 7 }).map((_, index) => (
                <Card className='p-2 ' key={index}>
                  <div className='grid gap-4 py-4 pr-6'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='name' className='text-right'>
                        여정이름
                      </Label>
                      <Input id='name' defaultValue='' className='col-span-3' />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='name' className='text-right'>
                        인원
                      </Label>
                      <Select>
                        <SelectTrigger className='col-span-3'>
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

                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='username' className='text-right'>
                        날짜
                      </Label>
                      <DateRangePicker className='col-span-3 w-full' />
                    </div>
                    <div className='flex justify-end'>
                      <Button
                        className='w-24'
                        // type='submit'
                        onClick={() => router.push('/trippage')}
                      >
                        여정 불러오기
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
  );
}
