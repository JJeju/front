import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '../ui/card';

export default function MainSkeleton() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex items-center space-x-4'>
      <Card className=' w-full md:h-auto '>
        <CardContent className='flex  items-start justify-center p-3  group'>
          <Skeleton className='h-[200px] w-[300px] rounded-lg' />
        </CardContent>
        <div className='flex flex-col gap-2 items-start px-5 py-1 bg-opacity-80'>
          <Skeleton className='h-4 w-[200px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
        <Skeleton className='h-4 w-[200px]' />
      </Card>
    </div>
  );
}
