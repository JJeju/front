import dayjs from 'dayjs';

// 날짜 문자열을 받아서 Day.js 객체로 변환하고, 원하는 형식으로 포맷팅하는 함수
export const formatDate = (dateString: string) => {
  const date = dayjs(dateString).format('YYYY-MM-DD');
  return date;
};

// 숫자를 받아서 3자리마다 콤마를 찍어주는 함수
export const numberWithCommas = (x?: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
