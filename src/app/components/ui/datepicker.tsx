'use client';

import * as React from 'react';
import { Button } from '@/app/components/ui/button';
import { Calendar } from '@/app/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { ko } from 'date-fns/locale';
import { useEffect } from 'react';
import { DateRange } from 'react-day-picker';

export default function DatePicker({
  onDateChange
}: {
  onDateChange?: (range: Date) => void;
}) {
  const [date, setDate] = React.useState<Date>();

  useEffect(() => {
    if (onDateChange && date) {
      onDateChange(date);
    }
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[257px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? (
            format(date, 'PPP', { locale: ko })
          ) : (
            <span>생년월일을 선택해주세요</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className=' w-auto p-0'>
        <Calendar
          mode='single'
          captionLayout='dropdown-buttons'
          selected={date}
          onSelect={setDate}
          fromYear={1940}
          locale={ko}
          toYear={2030}
        />
      </PopoverContent>
    </Popover>
  );
}
