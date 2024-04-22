import axios from 'axios';

interface directionsApiProps {
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
const REST_API_KEY = '7af3cfca89dab5d089efcd8851ff1cbe';

export const KakaoDirectionsApi = async (params: directionsApiProps) => {
  try {
    const origin = `${params.origin.x},${params.origin.y}`;
    const destination = `${params.destination.x},${params.destination.y}`;

    const response = await axios.get(
      'https://apis-navi.kakaomobility.com/v1/directions',
      {
        params: {
          ...params,
          origin: origin,
          destination: destination
        },
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`
        }
      }
    );
    // 요청 성공 시 응답 데이터 반환
    return response.data.routes[0];
  } catch (error) {
    // 요청 실패 시 에러 처리
    console.error('에러 발생:', error);
    // 에러를 호출한 쪽으로 전파하거나 다른 처리를 수행할 수 있습니다.
    throw error;
  }
};

export const KakaoWaypointApi = async (params: directionsApiProps) => {
  try {
    const response = await axios.post(
      'https://apis-navi.kakaomobility.com/v1/waypoints/directions',
      params,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`
        }
      }
    );
    // 요청 성공 시 응답 데이터 반환
    console.log('>>', response);
    return response.data.routes[0];
  } catch (error) {
    // 요청 실패 시 에러 처리
    console.error('에러 발생:', error);
    // 에러를 호출한 쪽으로 전파하거나 다른 처리를 수행할 수 있습니다.
    throw error;
  }
};
