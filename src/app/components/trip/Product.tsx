import { Button, buttonVariants } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Checkbox } from '@/app/components/ui/checkbox';
import Image, { ImageLoaderProps } from 'next/image';
import { Dialog, DialogTrigger } from '../ui/dialog';
import Accommodation from '../product/AccommodationInfo';
import Restaurant from '../product/RestaurantInfo';
import Map from '../map/Map';
import tripApi from '@/service/trip';
import { imgLoader } from '@/utility/utils/imgLoader';
import { Fragment, useState } from 'react';
import { MapPin } from 'lucide-react';

const items = [
  {
    id: '숙박',
    label: '숙박'
  },

  {
    id: '식당',
    label: '식당'
  },
  {
    id: '레저',
    label: '레저'
  },
  {
    id: '관광지',
    label: '관광지'
  },
  {
    id: '찜',
    label: '찜'
  }
] as const;

export default function Product({ data, handlerCategory }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [pkValue, setPkValue] = useState({
    pk: '',
    category: ''
  });
  const [checkboxValue, setCheckboxValue] = useState('');
  const [search, setSearch] = useState('');

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleCheckboxChange = (value: string) => {
    setCheckboxValue(value);
    handlerCategory(value);
  };

  const handleDialog = () => {
    switch (pkValue.category) {
      case '숙박':
        return <Accommodation pkValue={pkValue.pk} />;
      case '식당':
        return <Restaurant pkValue={pkValue.pk} />;
      case '레저':
        return <Restaurant pkValue={pkValue.pk} />;
      default:
    }
  };

  return (
    <>
      <div className='h-full md:h-screen'>
        <div className='flex justify-center'>
          <div className='flex space-x-2 py-2 w-[80%]'>
            <Input
              type='email'
              placeholder='검색하세요'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button type='submit'>검색</Button>
          </div>
        </div>
        <div className='flex space-x-2  justify-center items-center  my-3'>
          {items.map((item, index) => (
            <Fragment key={index}>
              <Checkbox
                id={item.id}
                className='md:w-6 md:h-6 w-5 h-5'
                value={checkboxValue}
                checked={checkboxValue?.includes(item.id)}
                onCheckedChange={checkd => {
                  !checkd
                    ? handleCheckboxChange('')
                    : handleCheckboxChange(item.id);
                }}
              />
              <label
                htmlFor={item.id}
                className='md:text-lg text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {item.label}
              </label>
            </Fragment>
          ))}
        </div>
        <ScrollArea
          id='scrollarea'
          className='md:h-3/4 h-5/6  rounded-md border'
        >
          {data?.map((item: any, index: number) => (
            <Card className='flex gap-2 items-center w-auto' key={index}>
              <div className=''>
                <Image
                  src={`http://14.6.54.241:8080/download/${item.fileData.url}`}
                  alt='사진 없음'
                  className='p-2 rounded-lg shadow-2xl max-h-[150px] md:max-h-[150px]  min-w-[110px] md:w-[200px] min-h-[150px]'
                  width={200}
                  height={150}
                />
              </div>
              <div className='flex flex-col mt-5 mb-2 mx-2 gap-1  h-full w-full'>
                <div className='flex flex-col items-start'>
                  <div className='text-left md:text-lg text-base font-bold  whitespace-nowrap overflow-hidden overflow-ellipsis '>
                    {item.c_name}
                  </div>
                  <div className='py-1'>
                    <Badge variant={'secondary'}>{item.c_category}</Badge>
                  </div>
                  <div className='flex  w-full'>
                    <MapPin size={14} />
                    <div className='text-sm text-left  '>{item.c_addr}</div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className='flex items-center gap-2'>
                      <Button
                        size='sm'
                        className='w-22'
                        onClick={() =>
                          setPkValue({
                            pk: item.c_pk_num as string,
                            category: item.c_category as string
                          })
                        }
                      >
                        상세보기
                      </Button>
                    </div>
                  </DialogTrigger>
                  {handleDialog()}
                </Dialog>
              </div>
            </Card>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
