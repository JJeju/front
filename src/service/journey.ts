import { TravelCreateRq, TravelCreateRs } from '@/type/journey';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';

const journeyApi = {
  // 여정 생성
  createJourneyFn: async (data: TravelCreateRq): Promise<any> => {
    const res = await axiosInstance.post('/travel/insert', data);
    return res.data.body;
  },
  PostCreateJourney: function () {
    return useMutation({ mutationFn: this.createJourneyFn });
  },
  // 여정 조회
  getJourneyFn: async (data?: boolean): Promise<TravelCreateRs[]> => {
    const res = await axiosInstance.get(`/mypage/travel?tr_tf=${data}`);
    return res.data.body.travel;
  },
  GetJourney: function (data?: boolean) {
    return useQuery({
      queryKey: ['getjourney'],
      queryFn: () => this.getJourneyFn(data)
    });
  }
};

export default journeyApi;
