import { FaqRs } from '@/type/faq';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';

const faqApi = {
  // FAQ 조회
  getFaqKey: 'service-center/qa',
  faqFn: async (): Promise<FaqRs[]> => {
    const res = await axiosInstance.get(`/api/service-center/qa`);
    return res.data.body.complaint;
  },
  GetFaq: function () {
    return useQuery({
      queryKey: [this.getFaqKey],
      queryFn: () => this.faqFn(),
      refetchOnWindowFocus: false
    });
  },
  // 내 문의 내역 조회
  getMyFaqKey: 'service-center/my-qa',
  myFaqFn: async (): Promise<FaqRs[]> => {
    const res = await axiosInstance.get(`/api/service-center/qa/my-list`);
    return res.data.body.complaint;
  },
  GetMyFaq: function () {
    return useQuery({
      queryKey: [this.getMyFaqKey],
      queryFn: () => this.myFaqFn(),
      refetchOnWindowFocus: false
    });
  },
  // FAQ 상세 조회
  getFaqDetailKey: 'service-center/qa/detail',
  faqDetailFn: async (data?: number) => {
    const res = await axiosInstance.get(
      `/api/service-center/qa/detail/${data}`
    );
    return res.data.body;
  },
  GetFaqDetail: function (data?: number) {
    return useQuery({
      queryKey: [this.getFaqDetailKey, data],
      queryFn: () => this.faqDetailFn(data),
      refetchOnWindowFocus: false,
      enabled: false,
      // staleTime: 50000,
      retry: false
    });
  }
};

export default faqApi;
