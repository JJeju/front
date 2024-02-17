import { DateRangePicker } from '../ui/daterangepicker';
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
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Label } from '../ui/label';
export default function TripCourse() {
  return (
    <div className='w-full h-full '>
      <div className='grid gap-8 mt-4'>
        <div className='flex gap-2'>
          <h3 className='text-2xl font-semibold'>여행 정보</h3>
          <Button className='ml-2' size='sm'>
            여정 저장
          </Button>
        </div>
        <div className='border p-4 rounded-lg'>
          <form>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-8'>
              <div className='grid gap-2 '>
                <Label className='text-sm flex justify-start' htmlFor='phone-1'>
                  여정이름
                </Label>
                <Input id='phone-1' required type='tel' />
              </div>
              <div className='grid gap-2'>
                <Label className='text-sm flex justify-start' htmlFor='email-1'>
                  인원
                </Label>
                <Select>
                  <SelectTrigger className=''>
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
            <div className='grid-cols-1 grid gap-4 mt-8'>
              <div className='grid gap-2 '>
                <Label className='text-sm flex justify-start' htmlFor='email-1'>
                  날짜
                </Label>
                <DateRangePicker className='w-full' />
              </div>
            </div>
            <div className='flex justify-end mt-4'>
              <Button className='ml-2' size='sm' variant='secondary'>
                여정 수정
              </Button>
            </div>
          </form>
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
