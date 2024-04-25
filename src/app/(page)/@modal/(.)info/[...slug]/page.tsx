import AccommodationInfo from '@/app/components/product/AccommodationInfo';
import RestaurantInfo from '@/app/components/product/RestaurantInfo';
import SportInfo from '@/app/components/product/SportInfo';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import SpotInfo from '@/app/components/product/SpotInfo';
import EventInfo from '@/app/components/product/EventInfo';
import { use, useEffect, useState } from 'react';
import InfoModal from '../../components/InfoModal';

export default function Page({ params }: { params: { slug: any } }) {
  return <InfoModal params={params} />;
}
