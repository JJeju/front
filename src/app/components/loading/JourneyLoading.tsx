import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function JourneyLoading() {
  return (
    <Card className='p-2 '>
      <div className='grid gap-4 py-4 pr-6'>
        <Skeleton className='w-full h-10' />
      </div>
      <div className='grid gap-4 py-4 pr-6'>
        <Skeleton className='w-full h-10' />
      </div>{' '}
      <div className='grid gap-4 py-4 pr-6'>
        <Skeleton className='w-full h-10' />
      </div>
    </Card>
  );
}
