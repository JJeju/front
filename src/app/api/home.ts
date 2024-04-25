import axiosInstance from '@/utility/axiosInterceptor';

export const GetMainProduct = async () => {
  const res = await axiosInstance.get(`/api/main/home/business_place`);
  return [
    ...res.data.body.leisure,
    ...res.data.body.lodgment,
    ...res.data.body.restaurant
  ];
};

export const GetMainEvent = async () => {
  const res = await axiosInstance.get(`/api/main/home/event-spot`);
  return [...res.data.body.event, ...res.data.body.spot];
};

export const GetMainReview = async () => {
  const res = await axiosInstance.get(`/api/main/public_blog`);
  return res.data.body.publicBlogList;
};

export const GetMainNotice = async () => {
  const res = await axiosInstance.get(`/api/main/home/notice`);
  return res.data.body.notice;
};
