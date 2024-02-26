import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DatePicker from '../ui/datepicker';

export default function BusinessApply() {
  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto'>
      <DialogTitle className='font-semibold'>사업자 전환하기</DialogTitle>
      <div className='flex justify-center'>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              명칭
            </Label>
            <Input id='name' defaultValue='' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              소재지
            </Label>
            <Input id='username' defaultValue='' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              사업자 등록번호
            </Label>
            <Input id='username' defaultValue='' className='col-span-2' />
            <Button className='w-20'>확인</Button>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              사용자명
            </Label>
            <Input id='username' defaultValue='' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              명칭
            </Label>
            <Input id='username' defaultValue='' className='col-span-3' />
          </div>
          <div className='flex justify-end'>
            <Button className='w-24' type='submit'>
              신청하기
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
