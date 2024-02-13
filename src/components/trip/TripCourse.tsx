import { DateRangePicker } from '../ui/DateRangePicker';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { ScrollArea } from '../ui/scroll-area';
import { Label } from '../ui/label';
export default function TripCourse() {
  return (
    <div className='flex flex-col w-full '>
      <p className='text-2xl font-bold p-4'>
        여행 타이틀
        <Button className='ml-2' variant='secondary'>
          여정 수정
        </Button>
        <Button className='ml-2'>여정 저장</Button>
      </p>
      <div className='w-[80%] ml-4'>
        <div className='flex items-center py-2 text-base gap-1 w-full'>
          <Label>여정</Label>
          <DateRangePicker />
        </div>
        <div className='flex items-center py-2  w-full'>
          <Label className='text-base'>인원</Label>
          <Select>
            <SelectTrigger className='w-[300px]'>
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
      </div>

      <Table>
        <TableHeader>
          <p className='text-2xl font-bold p-3 mt-4 '>1일차</p>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <p className='text-2xl font-bold p-3 mt-4'>2일차</p>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <p className='text-2xl font-bold p-3 mt-4'>3일차</p>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
