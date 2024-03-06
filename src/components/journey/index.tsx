'use client';

import { DialogContent, DialogTitle } from '@/components/ui/dialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import NewJourney from './NewJourney';
import SavedJourney from './SavedJourney';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Journey({ isTab }: { isTab?: string }) {
  return (
    <DialogContent className='w-full md:w-auto h-full md:h-auto '>
      <DialogTitle className='font-semibold'>J E J U</DialogTitle>
      <div className='flex justify-center'>
        <Tabs
          defaultValue={isTab === 'save' ? 'savedjourney' : 'account'}
          className='w-[390px]'
        >
          <TabsList className='grid w-full grid-cols-2 mt-8 '>
            <TabsTrigger value='newjourney'>새 여정</TabsTrigger>
            <TabsTrigger value={'savedjourney'}>여정 불러오기</TabsTrigger>
          </TabsList>
          <TabsContent value='newjourney'>
            <NewJourney />
          </TabsContent>
          <TabsContent value='savedjourney'>
            <SavedJourney />
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
  );
}
