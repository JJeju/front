import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  PurchaseHistoryRq,
  PurchaseHistoryRs,
  TravelReviewDetailRs,
  TravelReviewRq,
  TravelReviewRs,
  UpdateMemberRq
} from '@/type/mypage';

const mypageApi = {
  // 구매내역 조회
  getPurchaseHistoryKey: 'mypage/purchase-history',
  purchaseHistoryFn: async (
    data: PurchaseHistoryRq
  ): Promise<PurchaseHistoryRs[]> => {
    const res = await axiosInstance.get(`/mypage/deal?category`, {
      params: {
        data
      }
    });
    return res.data.body;
  },
  GetPurchaseHistory: function (data: PurchaseHistoryRq) {
    return useQuery({
      queryKey: [this.getPurchaseHistoryKey],
      queryFn: () => [this.purchaseHistoryFn(data)],
      select: data => {
        return data;
      }
    });
  },
  // 회원 정보 수정
  updateMemberInfoFn: async (data: UpdateMemberRq): Promise<boolean> => {
    const res = await axiosInstance.put(`/mypage/member`, data);
    return res.data;
  },
  PutUpdateMemberInfo: function () {
    return useMutation({ mutationFn: this.updateMemberInfoFn });
  },
  //여행 후기 조회
  getTravelReviewKey: 'mypage/travel-review',
  travelReviewFn: async (data?: TravelReviewRq): Promise<TravelReviewRs[]> => {
    const res = await axiosInstance.get(`/mypage/blog`, {
      params: {
        data
      }
    });
    return res.data.body.blog;
  },
  GetTravelReview: function (data?: TravelReviewRq) {
    return useQuery({
      queryKey: [this.getTravelReviewKey],
      queryFn: () => this.travelReviewFn(data),
      select: data => {
        return data;
      }
    });
  },
  // 여행 후기 상세보기
  getTravelReviewDetailKey: 'mypage/travel-review-detail',
  travelReviewDetailFn: async (
    data?: number
  ): Promise<TravelReviewDetailRs> => {
    const res = await axiosInstance.get(`/mypage/blog/1?b_pk_num=${data}`);
    return res.data.body;
  },
  GetTravelReviewDetail: function (data?: number) {
    return useQuery({
      queryKey: [this.getTravelReviewDetailKey],
      queryFn: () => this.travelReviewDetailFn(data),
      select: data => {
        return data;
      }
    });
  }
};

export default mypageApi;
