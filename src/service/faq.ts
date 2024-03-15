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
  }
};

export default faqApi;
