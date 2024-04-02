import { TravelCreateRq, TravelCreateRs } from '@/type/journey';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getTripRs, getTripDetailRs } from '@/type/trip';

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
      queryKey: ['trip', data],
      queryFn: () => this.getTripFn(data),
      refetchOnWindowFocus: false,
      staleTime: 50000
    });
  },
  // 여정 상세 보기
  getTripDetailFn: async (data: number) => {
    const res = await axiosInstance.get(`/api/mypage/travel/${data}`);
    return res.data.body.travel;
  },
  GetTripDetail: function (data: number) {
    return useQuery({
      queryKey: ['tripDetail'],
      queryFn: () => this.getTripDetailFn(data),
      enabled: !!data,
      refetchOnWindowFocus: false,
      staleTime: 50000,
      retry: 1
    });
  },
  // 상품 상세보기
  getProductDetailFn: async (data: number): Promise<getTripDetailRs> => {
    const res = await axiosInstance.get(`/api/main/business_item?cnum=${data}`);
    return res.data.body;
  },
  GetProductDetail: function (data: number) {
    return useQuery({
      queryKey: ['productDetail'],
      queryFn: () => this.getProductDetailFn(data),
      refetchOnWindowFocus: false
      // staleTime: 50000,
      // retry: 1
    });
  },
  // 상품 아이템 상세보기
  getProductItemFn: async (data: {
    pk: number;
    category: string;
  }): Promise<getTripDetailRs> => {
    const res = await axiosInstance.get(
      `/api/main/item_infomation?itemNumber=${data.pk}`
    );
    return res.data.body;
  },
  GetProductItem: function (data: { pk: number; category: string }) {
    return useQuery({
      queryKey: ['productItem', data.pk, data.category],
      queryFn: () => this.getProductItemFn(data),
      enabled: !!data.category && !!data.pk,
      refetchOnWindowFocus: false
      // staleTime: 50000,
      // retry: 1
    });
  },
  // 여행 코스 조회
  getTravelCourseFn: async (data: number) => {
    const res = await axiosInstance.get(`/api/travel/plan/select/${data}`);
    return res.data.body;
  },
  GetTravelCourse: function (data: number) {
    return useQuery({
      queryKey: ['travelCourse', data],
      queryFn: () => this.getTravelCourseFn(data),
      enabled: !!data,
      refetchOnWindowFocus: false
    });
  }
};

export default tripApi;
