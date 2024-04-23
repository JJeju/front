import {
  Dispatch,
  SetStateAction,
  use,
  useCallback,
  useEffect,
  useState
} from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Accommodation from '../product/AccommodationInfo';
import { Dialog, DialogTrigger } from '../ui/dialog';
import Restaurant from '../product/RestaurantInfo';

interface MarkerProps {
  map: any;
  data: any;
  setCurrentStore: Dispatch<SetStateAction<any>>;
  currentStore: any;
  category?: string;
}
export default function Markers({
  map,
  data,
  setCurrentStore,
  currentStore,
  category
}: MarkerProps) {
  const [open, setOpen] = useState(false);

  const [markers, setMarkers] = useState<any>([]);

  const [isWindow, setIsWindow] = useState(false);

  const [pkValue, setPkValue] = useState({
    pk: '',
    category: ''
  });
  const [currentCustomOverlay, setCurrentCustomOverlay] = useState<any>(null);

  // 모바일 디바이스 체크
  useEffect(() => {
    if (!isMobileDevice()) {
      setIsWindow(true);
    }
  }, []);

  // 마커 로드
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
        markers.push(marker);
        var content = document.createElement('div');
        var maxDiv = document.createElement('div');
        maxDiv.className = 'max-w-48 w-36 shadow-lg bg-white rounded-2xl z-20';

        var img = document.createElement('img');
        img.className = 'w-full h-28 rounded-2xl';
        img.src = 'http://14.6.54.241:8080/download/' + store.fileData.url;
        img.alt = '상품 이미지';
        maxDiv.appendChild(img);

        var div = document.createElement('div');
        div.className = 'px-2 py-4';

        var boldDiv = document.createElement('div');
        boldDiv.className =
          'font-bold text-sm mb-2 whitespace-normal overflow-auto text-black';
        boldDiv.appendChild(document.createTextNode(store.c_name));
        div.appendChild(boldDiv);

        var p = document.createElement('p');
        p.className = 'text-gray-700 text-xs whitespace-normal overflow-auto';
        p.appendChild(document.createTextNode(store.c_addr));
        div.appendChild(p);

        var button = document.createElement('button');
        button.className = 'bg-[#FACC15] text-black text-sm w-16 h-7 mt-2';
        button.appendChild(document.createTextNode('상세보기'));
        button.onclick = function () {
          setOpen(true);
          handleDialog();
        };
        div.appendChild(button);

        maxDiv.appendChild(div);
        content.appendChild(maxDiv);
        // 마커 클릭시 인포윈도우
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.3,
          yAnchor: 1.2,
          zIndex: 1
        });

        // 선택된 가게 저장
        window.kakao.maps.event.addListener(map, 'dragstart', () => {
          // 이동 시작 시 CustomOverlay 숨기기
          if (currentCustomOverlay) {
            currentCustomOverlay.setMap(null);
          }
        });

        window.kakao.maps.event.addListener(marker, 'click', function () {
          setPkValue({
            pk: store.c_pk_num,
            category: store.c_category
          });
          // 이전 CustomOverlay가 있으면 제거
          if (currentCustomOverlay) {
            currentCustomOverlay.setMap(null);
          }

          if (customOverlay.getMap() !== null) {
            customOverlay.setMap(null);
          } else {
            customOverlay.setMap(map);
          }

          setCurrentCustomOverlay(customOverlay);
          setCurrentStore(store);
        });
      });
      return () => {
        markers.forEach((marker: any) => {
          marker.setMap(null);
        });
      };
    }
  }, [map, data, currentCustomOverlay, setCurrentStore]);

  // 다이얼로그 핸들러
  function handleDialog() {
    switch (pkValue.category) {
      case '숙박':
        return <Accommodation pkValue={pkValue.pk} />;
      case '식당':
        return <Restaurant pkValue={pkValue.pk} />;
      case '레저':
        return <Restaurant pkValue={pkValue.pk} />;
      default:
    }
  }

  // 마커 로드
  useEffect(() => {
    loadKakaMarkers();
  }, [map, loadKakaMarkers]);

  // 마커 초기화
  useEffect(() => {
    markers.forEach((marker: any) => {
      marker.setMap(null);
    });
    loadKakaMarkers();
  }, [data]);

  // 모바일 디바이스 체크
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(!open);
        }}
      >
        {handleDialog()}
      </Dialog>
    </>
  );
}
