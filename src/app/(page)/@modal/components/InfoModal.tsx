'use client';
import AccommodationInfo from '@/app/components/product/AccommodationInfo';
import RestaurantInfo from '@/app/components/product/RestaurantInfo';
import SportInfo from '@/app/components/product/SportInfo';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import SpotInfo from '@/app/components/product/SpotInfo';
import EventInfo from '@/app/components/product/EventInfo';
import { use, useEffect, useState } from 'react';

export default function InfoModal({ params }: { params: { slug: any } }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // 페이지 언마운트시 url 메인페이지로 변경
    // if (!open) window.history.pushState(null, '', '/');
  }, [open]);

  console.log('>>>>', params.slug[0]);

  const handlerComponent = () => {
    switch (decodeURIComponent(params.slug[1])) {
      case '숙박':
        return <AccommodationInfo pkValue={params.slug[0]} />;
      case '식당':
        return <RestaurantInfo pkValue={params.slug[0]} />;
      case '레저':
        return <SportInfo pkValue={params.slug[0]} />;
      case '이벤트':
        return <EventInfo pkValue={params.slug[0]} />;
      case '관광지':
        return <SpotInfo pkValue={params.slug[0]} />;
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        {handlerComponent()}
      </Dialog>
    </>
  );
}
