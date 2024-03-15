'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { useState, useEffect } from 'react';
import { ko } from 'date-fns/locale';

export default function DateRangePicker({
  className,
  disabled,
  start,
  end,
  onDateChange
}: React.HTMLAttributes<HTMLDivElement> & { start?: any } & { end?: any } & {
  disabled?: boolean;
  onDateChange?: (range: DateRange) => void;
}) {
  const [date, setDate] = useState<DateRange | undefined>();

  useEffect(() => {
    if (onDateChange && date) {
      onDateChange(date);
    }
  }, [date?.from, date?.to]);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            disabled={disabled}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              className,
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {disabled ? (
              <>
                {format(start, 'PPP', { locale: ko })} -
                {format(end, 'PPP', { locale: ko })}
              </>
            ) : date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'PPP', { locale: ko })} -
                  {format(date.to, 'PPP', { locale: ko })}
                </>
              ) : (
                format(date.from, 'PPP', { locale: ko })
              )
            ) : (
              <span>날짜를 선택 해 주세요</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={ko}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
