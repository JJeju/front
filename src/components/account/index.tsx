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
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DatePicker from '../ui/datepicker';

export default function Account() {
  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto'>
      <DialogTitle>제주제주</DialogTitle>
      <div className='flex justify-center'>
        <Tabs defaultValue='account' className='w-[350px]'>
          <TabsList className='grid w-full grid-cols-2 mt-8 '>
            <TabsTrigger value='account'>로그인</TabsTrigger>
            <TabsTrigger value='password'>회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  아이디
                </Label>
                <Input id='name' defaultValue='' className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  비밀번호
                </Label>
                <Input id='username' defaultValue='' className='col-span-3' />
              </div>
              <div className='flex justify-end'>
                <Button className='w-24' type='submit'>
                  로그인
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='password'>
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
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
  );
}
