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
    const res = await axiosInstance.put(`/api/mypage/member/update`, data);
    return res.data;
  },
  PutUpdateMemberInfo: function () {
    return useMutation({ mutationFn: this.updateMemberInfoFn });
  },
  //여행 후기 조회
  getTravelReviewKey: 'mypage/travel-review',
  travelReviewFn: async (data?: TravelReviewRq): Promise<TravelReviewRs[]> => {
    const res = await axiosInstance.get(`/api/mypage/blog`, {
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
    const res = await axiosInstance.get(`/api/mypage/blog/1?b_pk_num=${data}`);
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
  },
  // 회원 프로필 조회
  getProfileKey: 'mypage/profile',
  profileFn: async (): Promise<any> => {
    const res = await axiosInstance.get(`/api/member/profile`);
    return res.data.body.memberProfile;
  },
  GetProfile: function () {
    return useQuery({
      queryKey: [this.getProfileKey],
      queryFn: () => this.profileFn(),
      select: data => {
        return data;
      }
    });
  },
  // 비밀번호 체크
  checkPasswordFn: async (data: { m_password: string }): Promise<boolean> => {
    const res = await axiosInstance.post(
      `/api/mypage/member/password/check`,
      data
    );
    return res.data.body;
  },
  PostCheckPassword: function () {
    return useMutation({ mutationFn: this.checkPasswordFn });
  },
  // 비밀번호 변경
  changePasswordFn: async (data: any): Promise<boolean> => {
    const res = await axiosInstance.put(
      `/api/mypage/member/password/update`,
      data
    );
    return res.data.body;
  },
  PostChangePassword: function () {
    return useMutation({ mutationFn: this.changePasswordFn });
  },
  // 여행 후기 상세보기
  getTripReviewDetailFn: async (data: number) => {
    const res = await axiosInstance.get(`/api/mypage/blog/${data}`);
    return res.data.body;
  },
  GetTripReviewDetail: function (data: number) {
    return useQuery({
      queryKey: ['tripReviewDetail', data],
      queryFn: () => this.getTripReviewDetailFn(data),
      enabled: !data,
      staleTime: 50000,
      gcTime: 0,
      retry: false
    });
  }
};

export default mypageApi;
