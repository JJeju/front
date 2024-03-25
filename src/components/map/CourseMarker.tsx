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
  setCurrentStore: Dispatch<SetStateAction<any>>;
  currentStore: any;
  category?: string;
}
export default function CourseMarker({
  map,
  data,
  setCurrentStore,
  currentStore,
  category
}: MarkerProps) {
  const [open, setOpen] = useState(false);

  const [markers, setMarkers] = useState<any>([]);

  const loadKakaMarkers = useCallback(() => {
    if (map) {
      data?.map((store: any) => {
        const imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
        const imageSize = new window.kakao.maps.Size(40, 40);
        const imageOption = {
          spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new window.kakao.maps.Point(0, 2 * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new window.kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        };
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const markerPosition = new window.kakao.maps.LatLng(
          store?.c_lat,
          store?.c_lon
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage
        });
        marker.setMap(map);
        markers.push(marker);

        const content = `<div class="max-w-48 w-36  shadow-lg bg-white rounded-2xl">
          <img class="w-full h-28 rounded-2xl" src=http://14.6.54.241:8080/download/${store.fileData.url} alt="상품 이미지">
          <div class="px-2 py-4">
            <div class="font-bold text-sm mb-2 whitespace-normal overflow-auto text-black">${store.c_name}</div>
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

  useEffect(() => {
    markers.forEach((marker: any) => {
      marker.setMap(null);
    });
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
