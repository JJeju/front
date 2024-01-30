'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ko } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import axios from 'axios';

interface Props {
  className?: string;
}

export default function DatePicker({ className }: Props) {
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    fetch('http://localhost:8080/main/home/business_place')
      .then(response => console.log(response))
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[260px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? (
            format(date, 'PPP', { locale: ko })
          ) : (
            <span>날짜를 선택 해 주세요</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={ko}
        />
      </PopoverContent>
    </Popover>
  );
}
