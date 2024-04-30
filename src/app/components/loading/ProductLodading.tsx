import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function ProductLodading() {
  return (
    <>
      {[0, 1, 2, 3, 4].map(index => (
        <Card className='flex gap-2 items-center w-auto' key={index}>
          <Skeleton className='p-2 rounded-lg shadow-2xl max-h-[150px] md:max-h-[150px]  min-w-[110px] md:w-[200px] min-h-[150px]' />
          <div className='flex flex-col mt-5 mb-2 mx-2 gap-1  h-full w-full'>
            <div className='flex flex-col items-start'>
              <Skeleton className='w-full h-7' />

              <div className='flex p-1 w-full'>
                <Skeleton className='w-full h-7   ' />
              </div>
              <Skeleton className='w-16 h-7' />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
