import { DialogContent, DialogTitle } from '@/components/ui/dialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Login from './Login';
import Join from './Join';

export default function Account() {
  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto'>
      <DialogTitle className='font-semibold'>J E J U</DialogTitle>
      <div className='flex justify-center'>
        <Tabs defaultValue='account '>
          <TabsList className='grid w-full grid-cols-2 mt-8  '>
            <TabsTrigger value='login'>로그인</TabsTrigger>
            <TabsTrigger value='join'>회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <Login />
          </TabsContent>
          <TabsContent value='join'>
            <Join />
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
  );
}
