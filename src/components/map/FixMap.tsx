'use client';
/** global kakao */
import Script from 'next/script';
import {
  Dispatch,
  SetStateAction,
  use,
  useLayoutEffect,
  useState
} from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
  lat?: number | null;
  lng?: number | null;
  zoom?: number | null;
  data?: any;
}
const EDFAULT_LAT = 33.450701;
const DEFAULT_LNG = 126.570222;

export default function Map({ lat, lng, zoom, setMap, data }: MapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map2');
      const options = {
        center: new window.kakao.maps.LatLng(
          lat ?? EDFAULT_LAT,
          lng ?? DEFAULT_LNG
        ),
        level: 5,
        draggable: false, // Disable map dragging
        scrollwheel: false, // Disable zooming with scroll wheel
        disableDoubleClickZoom: true // Disable zooming with double click
      };

      const markerPosition = new window.kakao.maps.LatLng(lat, lng);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition
        // image: markerImage
      });

      const map = new window.kakao.maps.Map(container, options);

      marker.setMap(map);
      setMap(map);
    });
  };

  useLayoutEffect(() => {
    if (lat || lng) {
      loadKakaoMap();
    }
  }, [lat, lng]);
  return (
    <>
      <Script
        strategy='afterInteractive'
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id='map2' className='w-full h-full'></div>
    </>
  );
}
