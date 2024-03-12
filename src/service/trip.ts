import { TravelCreateRq, TravelCreateRs } from '@/type/journey';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getTripRs } from '@/type/trip';

const tripApi = {
  // 여행 상품 조회
  getTripFn: async (data?: string): Promise<getTripRs[]> => {
    if (data) {
      const res = await axiosInstance.get(
        `/main/business_place?category=${data}`
      );
      return res.data.body.companyRandomList;
    } else {
      const res = await axiosInstance.get(`/main/business_place`);
      return res.data.body.companyRandomList;
    }
  },
  GetTrip: function (data?: string) {
    return useQuery({
      queryKey: ['main/business_place'],
      queryFn: () => this.getTripFn(data)
    });
  }
};

export default tripApi;
