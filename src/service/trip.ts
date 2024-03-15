import { TravelCreateRq, TravelCreateRs } from '@/type/journey';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getTripRs } from '@/type/trip';

const tripApi = {
  // 여행 상품 조회
  getTripFn: async (data?: string): Promise<getTripRs[]> => {
    const res = await axiosInstance.get(
      data
        ? `/api/main/business_place?category=${data}`
        : `/api/main/business_place`
    );
    return res.data.body.companyRandomList;
  },
  GetTrip: function (data?: string) {
    return useQuery({
      queryKey: ['trip'],
      queryFn: () => this.getTripFn(data),
      refetchOnWindowFocus: false,
      staleTime: 50000
    });
  }
};

export default tripApi;
