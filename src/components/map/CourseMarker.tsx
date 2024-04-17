import {
  Dispatch,
  SetStateAction,
  use,
  useCallback,
  useEffect,
  useState
} from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Accommodation from '../product/Accommodation';
import { Dialog, DialogTrigger } from '../ui/dialog';
import Restaurant from '../product/Restaurant';

interface MarkerProps {
  map: any;
  data: any;
  category?: string;
}
export default function CourseMarker({ map, data }: MarkerProps) {
  const [open, setOpen] = useState(false);

  const [markers, setMarkers] = useState<any>([]);

  const [currentCustomOverlay, setCurrentCustomOverlay] = useState<any>(null);

  const [clickLine, setClickLine] = useState<any>(null);

  const loadKakaMarkers = useCallback(() => {
    if (map) {
      data?.map((store: any, index: number) => {
        const imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
        const imageSize = new window.kakao.maps.Size(40, 40);
        const imageOption = {
          spriteSize: new window.kakao.maps.Size(36, 691),
          spriteOrigin: new window.kakao.maps.Point(0, index * 46 + 10),
          offset: new window.kakao.maps.Point(13, 37)
        };
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const markerPosition = new window.kakao.maps.LatLng(
          store?.tp_fk_company_info.c_lat,
          store?.tp_fk_company_info.c_lon
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage
        });
        marker.setMap(map);
        markers.push(marker);

        const content = `<div class="max-w-48 w-36  shadow-lg bg-white rounded-2xl">
          <img class="w-full h-28 rounded-2xl" src=http://14.6.54.241:8080/download/${store.tp_fk_company_info.c_img} alt="상품 이미지">
          <div class="px-2 py-4">
            <div class="font-bold text-sm mb-2 whitespace-normal overflow-auto text-black">${store.tp_fk_company_info.c_name}</div>
            <p class="text-gray-700 text-xs whitespace-normal overflow-auto">
            ${store.tp_fk_company_info.c_addr}
            </p>
          </div>
       </div>`;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.3,
          yAnchor: 1.2,
          zIndex: 1
        });

        window.kakao.maps.event.addListener(map, 'dragstart', () => {
          if (currentCustomOverlay) {
            currentCustomOverlay.setMap(null);
          }
        });

        window.kakao.maps.event.addListener(marker, 'click', function () {
          if (currentCustomOverlay) {
            currentCustomOverlay.setMap(null);
          }

          if (customOverlay.getMap() !== null) {
            customOverlay.setMap(null);
          } else {
            customOverlay.setMap(map);
          }

          setCurrentCustomOverlay(customOverlay);
          setOpen(true);
        });
      });

      const markerPositions = data?.map(
        (store: any) =>
          new window.kakao.maps.LatLng(
            store.tp_fk_company_info?.c_lat,
            store.tp_fk_company_info?.c_lon
          )
      );

      const line = new window.kakao.maps.Polyline({
        map: map,
        path: markerPositions,
        strokeWeight: 3,
        strokeColor: '#db4040',
        strokeOpacity: 1,
        strokeStyle: 'solid'
      });

      setClickLine(line);

      // if (clickLine) clickLine.setPath(markerPositions);
    }
  }, [map, data, currentCustomOverlay]);

  useEffect(() => {
    loadKakaMarkers();
  }, [map, loadKakaMarkers]);

  useEffect(() => {
    markers.forEach((marker: any) => {
      marker.setMap(null);
    });

    if (clickLine) {
      console.log('여기타니??');
      clickLine.setMap(null);
      setClickLine(null);
    }

    loadKakaMarkers();
  }, [data]);

  return (
    <>
      {/* <Dialog open={open} onOpenChange={() => setOpen(!open)}>
          {currentStore?.c_category === '숙박' ? (
            <Accommodation />
          ) : (
            <Restaurant />
          )}
        </Dialog> */}
    </>
  );
}
