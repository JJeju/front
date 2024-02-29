import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DatePicker from '../ui/datepicker';
import { Button } from '@/components/ui/button';
export default function Join() {
  return (
    <div className='grid gap-4 py-4'>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          아이디
        </Label>
        <Input id='name' defaultValue='' className='col-span-3' />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          이름
        </Label>
        <Input id='name' defaultValue='' className='col-span-3' />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          생년월일
        </Label>
        <DatePicker />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          이메일
        </Label>
        <Input id='username' defaultValue='' className='col-span-3' />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          비밀번호
        </Label>
        <Input id='username' defaultValue='' className='col-span-3' />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          비밀번호확인
        </Label>
        <Input id='username' defaultValue='' className='col-span-3' />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='username' className='text-right'>
          성별
        </Label>
        <Input id='username' defaultValue='' className='col-span-3' />
      </div>
      <div className='flex justify-end'>
        <Button className='w-24' type='submit'>
          회원가입
        </Button>
      </div>
    </div>
  );
}
