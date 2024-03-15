import {
  Dispatch,
  SetStateAction,
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
  setCurrentStore: Dispatch<SetStateAction<any>>;
  currentStore: any;
}
export default function Markers({
  map,
  data,
  setCurrentStore,
  currentStore
}: MarkerProps) {
  const [open, setOpen] = useState(false);

  const loadKakaMarkers = useCallback(() => {
    if (map) {
      data?.map((store: any) => {
        // const imageSrc =
        //   store.c_category === '식당'
        //     ? '/Restaurant Icon.png'
        //     : store.c_category === '숙박'
        //     ? '/Store Icon .png'
        //     : '/Airport Map Pin.png';
        // const imageSize = new window.kakao.maps.Size(40, 40);
        // imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        // const markerImage = new window.kakao.maps.MarkerImage(
        // imageSrc,
        // imageSize
        // imageOption
        // );

        const markerPosition = new window.kakao.maps.LatLng(
          store?.c_lat,
          store?.c_lon
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition
          // image: markerImage
        });
        marker.setMap(map);

        marker.setMap(map);

        const content = `<div class="max-w-48 w-36 overflow-hidden shadow-lg bg-white rounded-2xl">
        <img class="w-full h-28" src=http://14.6.54.241:8080/download/${store.c_img} alt="상품 이미지">
        <div class="px-2 py-4">
          <div class="font-bold text-sm mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">${store.c_name}</div>
          <p class="text-gray-700 text-xs whitespace-normal overflow-auto">
          ${store.c_addr}
          </p>
        </div>
     </div>`;

        // 마커 클릭시 인포윈도우
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.3,
          yAnchor: 1.2
        });

        // const tempDiv = document.createElement('div');
        // tempDiv.innerHTML = content;

        // const closeBtn = tempDiv.querySelector('.close');
        // console.log('>>>', closeBtn);
        // closeBtn?.addEventListener('click', () => {
        //   customOverlay.setMap(null);
        // });

        // JavaScript function to close the overlay
        const closeOverlay = () => {
          customOverlay.setMap(null);
        };

        // // 마우스 오버시 인포윈도우
        window.kakao.maps.event.addListener(marker, 'mouseover', function () {
          customOverlay.setMap(map);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', function () {
          customOverlay.setMap(null);
        });

        function isMobileDevice() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        }

        // 선택된 가게 저장
        window.kakao.maps.event.addListener(marker, 'click', function () {
          if (isMobileDevice()) {
            if (currentStore?.c_pk_num === store.c_pk_num) {
              customOverlay.setMap(null);
            } else customOverlay.setMap(map);
          }

          // }
          setCurrentStore(store);

          // customOverlay.setMap(map);
          setOpen(true);
        });
      });
    }
  }, [map, data]);

  useEffect(() => {
    loadKakaMarkers();
  }, [map, loadKakaMarkers]);

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
