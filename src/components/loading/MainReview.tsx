import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function MainReview() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card className='min-w-[220px]'>
          <CardHeader className='flex items-start pb-4'>
            <div className='flex items-center gap-4 mr-auto'>
              <Skeleton className='w-12 h-12'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage alt='Avatar' src={'/56692-O8P89L-432.jpg'} />
                </Avatar>
              </Skeleton>
              <div className='flex flex-col w-full'>
                <Skeleton className='md:text-base text-sm  h-[24px] w-[160px]' />
                <Skeleton className='text-xs  text-start' />
              </div>
            </div>
            <div className='flex items-center space-x-1 pt-2 text-sm'>
              <Skeleton className={'h-[24px] w-[96px]'} />
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className='h-[64px] w-[140px] p-5' />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
