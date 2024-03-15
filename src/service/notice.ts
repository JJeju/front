import { NoticeRs } from '@/type/notice';
import axiosInstance from '../utility/axiosInterceptor';
import { useMutation, useQuery } from '@tanstack/react-query';

const noticeApi = {
  // 공지사항 조회
  getNoticeKey: 'main/home/notice',
  noticeFn: async (): Promise<NoticeRs[]> => {
    const res = await axiosInstance.get(`/api/service-center/notice`);
    return res.data.body.notice;
  },
  GetNotice: function () {
    return useQuery({
      queryKey: [this.getNoticeKey],
      queryFn: () => this.noticeFn(),
      refetchOnWindowFocus: false
    });
  }
};

export default noticeApi;
