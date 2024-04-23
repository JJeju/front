import axiosInstance from '../utility/axiosInterceptor';
import { useQuery } from '@tanstack/react-query';
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from '../config/constants';
import { BestRs, EventRs, ReviewRs } from '../type/home';
import { cache } from 'react';

// 메인 페이지 Best 항목 API
const GET_MAIN_PAGE_DATA = 'main/home/business_place';
// 메인 페이지 이벤트,관광지 조회 API
const GET_MAIN_EVENT_DATA = 'main/home/event-spot';

// 메인 페이지 공지사항
const GET_MAIN_NOTICE_DATA = 'main/home/notice';

const mainApi = {
  getmainproductKey: GET_MAIN_PAGE_DATA,
  mainproductFn: async (): Promise<BestRs> => {
    const res = await axiosInstance.get(`/api/${GET_MAIN_PAGE_DATA}`);
    return res.data.body;
  },
  GetMainProduct: function () {
    return useQuery({
      queryKey: ['main', 'best'],
      queryFn: () => this.mainproductFn(),
      select: data => {
        const res = [...data.leisure, ...data.lodgment, ...data.restaurant];
        return res;
      }
      // refetchOnWindowFocus: false,
      // staleTime: 50000
    });
  },
  getmaineventKey: GET_MAIN_EVENT_DATA,
  maineventFn: cache(async (): Promise<EventRs> => {
    const res = await axiosInstance.get(`/api/${GET_MAIN_EVENT_DATA}`);
    return res.data.body;
  }),
  GetMainEvent: function () {
    return useQuery({
      queryKey: [this.getmaineventKey],
      queryFn: () => this.maineventFn(),
      select: data => {
        const res = [...data.event, ...data.spot];
        return res;
      }
      // refetchOnWindowFocus: false,
      // staleTime: 50000
    });
  },
  getmainnoticeKey: GET_MAIN_NOTICE_DATA,
  mainnoticeFn: async (): Promise<any> => {
    const res = await axiosInstance.get(`/api/${GET_MAIN_NOTICE_DATA}`);
    return res.data.body.notice;
  },
  GetMainNotice: function () {
    return useQuery({
      queryKey: [this.getmainnoticeKey],
      queryFn: () => this.mainnoticeFn(),
      refetchOnWindowFocus: false,
      staleTime: 50000
    });
  },
  // 후기글 조회
  getReviewKey: 'main/public_blog',
  reviewFn: async (): Promise<ReviewRs[]> => {
    const res = await axiosInstance.get(`/api/main/public_blog`);
    return res.data.body.publicBlogList;
  },
  GetReview: function () {
    return useQuery({
      queryKey: [this.getReviewKey],
      queryFn: () => this.reviewFn(),
      refetchOnWindowFocus: false,
      staleTime: 50000
    });
  }
};
export default mainApi;
