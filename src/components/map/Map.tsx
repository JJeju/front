'use client';
/** global kakao */
import Script from 'next/script';
import { Dispatch, SetStateAction } from 'react';
import { KAKAO_MAP } from '@/config/constants';
declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
  lat?: string | null;
  lng?: string | null;
  zoom?: number | null;
  data?: any;
}
const EDFAULT_LAT = 33.450701;
const DEFAULT_LNG = 126.570222;

const DEFAULT_ZOOM = 3;

export default function Map({ lat, lng, zoom, setMap, data }: MapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(
          lat ?? EDFAULT_LAT,
          lng ?? DEFAULT_LNG
        ),
        level: zoom ?? 9
      };
      const map = new window.kakao.maps.Map(container, options);
      setMap(map);
    });
  };

  return (
    <>
      <Script
        strategy='afterInteractive'
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id='map' className='w-full h-full'></div>
    </>
  );
}
