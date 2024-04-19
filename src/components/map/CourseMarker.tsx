import {
  Dispatch,
  SetStateAction,
  use,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useToast } from '../ui/use-toast';
import { KakaoDirectionsApi, KakaoWaypointApi } from '@/service/kakao';

interface MarkerProps {
  map: any;
  data: any;
  category?: string;
  lat?: number | null;
  lng?: number | null;
}

interface kakaoProps {
  origin: {
    x: string;
    y: string;
  };
  destination: {
    x: string;
    y: string;
  };
  waypoints: [
    {
      x: string;
      y: string;
    }
  ]; // 배열을 파이프(|)로 구분된 문자열로 변환
  priority: string;
  car_fuel: string;
  car_hipass: boolean;
  alternatives: boolean;
  road_details: boolean;
}
export default function CourseMarker({ map, data, lat, lng }: MarkerProps) {
  const [open, setOpen] = useState(false);

  // 마커
  const [markers, setMarkers] = useState<any>([]);

  // 마커 클릭시 나타나는 커스텀 오버레이
  const [currentCustomOverlay, setCurrentCustomOverlay] = useState<any>(null);

  // 마커 위치 선 저장용
  const [markerPositions, setMarkerPositions] = useState<any>([]);

  // 선 저장용
  const [clickline, setClickline] = useState<any | null>(null);

  // 키로수
  const [distanceOverlay, setDistanceOverlay] = useState<any | null>([]);

  const { toast } = useToast();

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

      // clickLine.setMap(null);
    }
  }, [map, data, currentCustomOverlay]);

  useEffect(() => {
    loadKakaMarkers();
  }, [map, loadKakaMarkers]);

  // function deleteClickLine() {
  //   clickline.setMap(null);
  //   clickline = null;
  // }

  useEffect(() => {
    // 기존에 그렸던 선이 있다면 지도에서 제거
    if (clickline) {
      clickline.setMap(null);
      setClickline(null);
    }
    console.log('distanceOverlay>>>', distanceOverlay);
    if (distanceOverlay.length > 0) {
      distanceOverlay.map((di: any) => {
        di.setMap(null);
      });
      setDistanceOverlay([]);
    }

    // 새로운 선 그리기

    if (markerPositions?.length > 1) {
      const origin = {
        x: markerPositions[0].La,
        y: markerPositions[0].Ma
      };

      const destination = {
        x: markerPositions[markerPositions.length - 1].La,
        y: markerPositions[markerPositions.length - 1].Ma
      };

      let waypoints = [];
      if (markerPositions.length > 2) {
        waypoints = markerPositions
          .slice(1, markerPositions.length - 1)
          .map((point: { La: any; Ma: any }, index: any) => {
            return {
              name: `name${index}`,
              x: point.La,
              y: point.Ma
            };
          });
      }

      // GET 요청에 필요한 쿼리 파라미터
      const params: kakaoProps = {
        origin: origin,
        destination: destination,
        waypoints: waypoints, // 배열을 파이프(|)로 구분된 문자열로 변환
        priority: 'RECOMMEND',
        car_fuel: 'GASOLINE',
        car_hipass: false,
        alternatives: false,
        road_details: false
      };

      const fetchAndDrawLine = async () => {
        const line = await fetchData(params);

        const newClickline = new window.kakao.maps.Polyline({
          map: map,
          path: line.line,
          strokeWeight: 3,
          strokeColor: '#db4040',
          strokeOpacity: 1,
          strokeStyle: 'solid'
        });

        var carTimes = calculateTravelTime(line.road);

        let distance = line.road.map(
          (data: { distance: any }) => data.distance
        );

        console.log('>>', distance);

        line.road.map((data: any, index: number) => {
          let content = getTimeHTML(data.distance, data.duration);

          const newDistance = new window.kakao.maps.CustomOverlay({
            map: map, // 커스텀오버레이를 표시할 지도입니다
            content: content, // 커스텀오버레이에 표시할 내용입니다
            position: markerPositions[index + 1], // 커스텀오버레이를 표시할 위치입니다.
            xAnchor: 0,
            yAnchor: 0,
            zIndex: 1
          });

          setDistanceOverlay((prevDistanceOverlay: any) => [
            ...prevDistanceOverlay,
            newDistance
          ]);
        });

        // 새로 그린 선을 상태로 저장
        setClickline(newClickline);
      };
      fetchAndDrawLine();
    }
  }, [markerPositions, map]);

  useEffect(() => {
    markers.forEach((marker: any) => {
      marker.setMap(null);
    });

    if (data?.length > 0) {
      const lats = data?.map((coord: any) => coord.tp_fk_company_info?.c_lat); // 위도
      const lngs = data?.map((coord: any) => coord.tp_fk_company_info?.c_lon); // 경도

      // 경도와 위도의 평균 값을 계산합니다.
      const avgLat =
        lats.reduce((acc: any, lat: any) => acc + lat, 0) / lats.length;
      const avgLng =
        lngs.reduce((acc: any, lng: any) => acc + lng, 0) / lngs.length;

      map.setCenter(new window.kakao.maps.LatLng(avgLat, avgLng));
    } else if (map && data?.length <= 0) {
      noData();
    }

    setMarkerPositions(
      data?.map(
        (store: any) =>
          new window.kakao.maps.LatLng(
            store.tp_fk_company_info?.c_lat,
            store.tp_fk_company_info?.c_lon
          )
      )
    );
    loadKakaMarkers();
  }, [data]);

  const fetchData = async (params: any) => {
    try {
      const data: any =
        markerPositions.length > 2
          ? await KakaoWaypointApi(params)
          : await KakaoDirectionsApi(params);

      const linePath: any[] = [];

      data.sections?.forEach((list: any) => {
        list.roads.forEach((router: { vertexes: any[] }) => {
          router.vertexes.forEach((vertex: any, index: number) => {
            if (index % 2 === 0) {
              linePath.push(
                new window.kakao.maps.LatLng(
                  router.vertexes[index + 1],
                  router.vertexes[index]
                )
              );
            }
          });
        });
      });

      return { line: linePath, road: data.sections }; // linePath를 반환하여 호출한 쪽에서 결과를 사용할 수 있도록 함
    } catch (error) {
      console.error('에러 발생:', error);
      // 에러를 호출한 쪽으로 전파하거나 다른 처리를 수행할 수 있습니다.
      throw error;
    }
  };

  const calculateTravelTime = (list: any) => {
    let totalTravelTimeSeconds = 0;

    list.forEach((road: any) => {
      // 각 도로별로 차로 소요 시간을 계산하여 총 여행 시간에 더합니다
      road.roads.forEach((road: any) => {
        // 도로 길이와 교통 정보 속도를 기반으로 차로 소요 시간을 계산합니다
        const roadLength = road.distance;
        const trafficSpeedKmh = road.traffic_speed;
        const trafficSpeedMs = trafficSpeedKmh * (1000 / 3600); // km/h를 m/s로 변환
        const travelTimeSeconds = roadLength / trafficSpeedMs;

        totalTravelTimeSeconds += travelTimeSeconds;
      });

      // 총 여행 시간을 시간과 분으로 변환합니다
    });
    const hours = Math.floor(totalTravelTimeSeconds / 3600);
    const minutes = Math.floor((totalTravelTimeSeconds % 3600) / 60);
    return { hours, minutes };
  };

  const getTimeHTML = (distance: number, carTimes: any) => {
    // 거리를 미터에서 킬로미터로 변환합니다
    const distanceKm = distance / 1000;

    let carHour = '',
      carMin = '';
    const hours = Math.floor(carTimes / 3600);
    const minutes = Math.floor((carTimes % 3600) / 60);

    // 계산한 자동차 이동 시간이 60분보다 크면 시간으로 표시합니다

    carHour =
      '<span class="number font-bold text-[#ee6152]">' + hours + '</span>시간 ';

    carMin =
      '<span class="number font-bold text-[#ee6152]">' + minutes + '</span>분 ';

    // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
    const walkTime = (distanceKm / 4) * 60; // 걷는 시간 (분)
    const walkHour = Math.floor(walkTime / 60); // 시간
    const walkMin = Math.floor(walkTime % 60); // 분

    // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
    const bicycleTime = (distanceKm / 16) * 60; // 자전거 이동 시간 (분)
    const bicycleHour = Math.floor(bicycleTime / 60); // 시간
    const bicycleMin = Math.floor(bicycleTime % 60); // 분

    // 거리와 도보 시간, 자전거 시간, 자동차 시간을 가지고 HTML Content를 만들어 리턴합니다
    let content = '<ul class="shadow-lg bg-white rounded-2xl p-2">';
    content += '    <li>';
    content +=
      '        <span class="label">총거리 : </span><span class="number font-bold text-[#ee6152]">' +
      distanceKm.toFixed(2) + // 소수점 두 자리까지 표시
      '</span>km';
    content += '    </li>';
    content += '    <li>';
    content +=
      '        <span class="label">도보 : </span><span class="number font-bold text-[#ee6152]">' +
      walkHour +
      '</span>시간 <span class="number font-bold text-[#ee6152]">' +
      walkMin +
      '</span>분';
    content += '    </li>';
    content += '    <li>';
    content +=
      '        <span class="label">자전거 : </span><span class="number font-bold text-[#ee6152]">' +
      bicycleHour +
      '</span>시간 <span class="number font-bold text-[#ee6152]">' +
      bicycleMin +
      '</span>분';
    content += '    </li>';
    content += '    <li>';
    content +=
      '        <span class="label">자동차 : </span>' + carHour + carMin;
    content += '    </li>';
    content += '</ul>';

    return content;
  };

  const noData = () => {
    return (
      <>
        {toast({
          description: '선택된 여정이 없습니다.'
        })}
      </>
    );
  };

  return <></>;
}
