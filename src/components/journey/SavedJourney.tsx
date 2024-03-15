'use client';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DatePicker from '../ui/datepicker';
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
import journeyApi from '@/service/journey';
import { DateRangePicker } from '../ui/daterangepicker';

export default function SavedJourney() {
  const router = useRouter();

  const { data } = journeyApi.GetJourney(false);

  return (
    <ScrollArea className=' md:h-[260px] h-[600px] rounded-md border'>
      {data?.map((item, index) => (
        <Card className='p-2 ' key={index}>
          <div className='grid gap-4 py-4 pr-6'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                여정이름
              </Label>
              <Input
                id='name'
                defaultValue={item.tr_title}
                className='col-span-3'
                disabled
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                인원
              </Label>
              <Select disabled>
                <SelectTrigger className='col-span-3'>
                  <SelectValue placeholder={item.tr_relationship} />
                </SelectTrigger>
              </Select>
            </div>

            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                날짜
              </Label>
              <DateRangePicker
                className='col-span-3 w-full'
                disabled
                start={item.tr_in}
                end={item.tr_out}
              />
            </div>
            <div className='flex justify-end'>
              <Button className='w-24' onClick={() => router.push('/trip')}>
                여정 불러오기
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </ScrollArea>
  );
}
