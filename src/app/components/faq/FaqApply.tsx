import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { DialogContent, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';

export default function FaqApply() {
  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto'>
      <DialogTitle className='font-semibold'>문의하기</DialogTitle>
      <div className='flex justify-center'>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              문의 제목
            </Label>
            <Input id='name' defaultValue='' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              이메일
            </Label>
            <Input id='username' defaultValue='' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              문의내용
            </Label>

            <Textarea
              className='col-span-3'
              id='message'
              placeholder='Message'
            />
          </div>

          <div className='flex justify-end'>
            <Button className='w-24' type='submit'>
              문의하기
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
