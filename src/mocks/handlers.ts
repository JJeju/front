import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/abc', () => {
    return HttpResponse.json({
      status: 200,

      res: [
        {
          dayPlanList: [
            {
              tp_pk_num: 21,
              tp_fk_tnum: 1,
              pk: '1',
              tp_fk_company_info: {
                c_pk_num: 1,
                c_cnum: '1121363079',
                c_fk_id: 'lkd9125',
                c_name: '인스밀',
                c_phone: '050713525661',
                c_category: '식당',
                c_addr: '제주 서귀포시 대정읍 일과대수로27번길 22 1층',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655429412797.jpg',
                c_type: '일식',
                c_lat: 33.2384787715141,
                c_lon: 126.229230662407,
                c_file_group_no: 8
              },
              tp_item_category: '레저',
              tp_plan_start_date_time: '2024-01-02T08:00:00',
              tp_plan_end_date_time: '2024-01-03T10:00:00',
              tp_rm: '바뀜 ㅋzz',
              create_dt: '2024-02-29T14:06:02',
              update_dt: '2024-02-29T14:45:22'
            },
            {
              tp_pk_num: 25,
              tp_fk_tnum: 1,
              pk: '2',
              tp_fk_company_info: {
                c_pk_num: 7,
                c_cnum: '2148863581',
                c_fk_id: '영빡이',
                c_name: '제주도파티애월 한담누리',
                c_phone: '050350512727',
                c_category: '숙박',
                c_addr: '제주특별자치도 제주시 애월읍 일주서로 6158',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655443311684.png',
                c_type: '호텔',
                c_lat: 33.4592739520701,
                c_lon: 126.31238355628,
                c_file_group_no: 14
              },
              tp_item_category: '숙박',
              tp_plan_start_date_time: '2024-01-02T16:00:00',
              tp_plan_end_date_time: '2024-01-03T08:00:00',
              tp_rm: '',
              create_dt: '2024-03-03T18:22:14'
            },
            {
              tp_pk_num: 44,
              tp_fk_tnum: 1,
              pk: '3',
              tp_fk_company_info: {
                c_pk_num: 5,
                c_cnum: '2068689631',
                c_fk_id: 'lkd9125',
                c_name: '새별ATV',
                c_phone: '0647928283',
                c_category: '레저',
                c_addr: '제주특별자치도 제주시 한림읍 금악리 산 31-2',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655423282832.jpeg',
                c_type: '실외스포츠',
                c_lat: 33.3496487834802,
                c_lon: 126.360348578212,
                c_file_group_no: 12
              },
              tp_item_category: '레저',
              tp_plan_start_date_time: '2024-01-02T16:00:00',
              tp_plan_end_date_time: '2024-01-05T08:00:00',
              tp_rm: '',
              create_dt: '2024-03-13T15:45:29'
            }
          ],
          day: '2024-01-02'
        },
        {
          dayPlanList: [
            {
              tp_pk_num: 25,
              tp_fk_tnum: 1,
              pk: '4',
              tp_fk_company_info: {
                c_pk_num: 7,
                c_cnum: '2148863581',
                c_fk_id: '영빡이',
                c_name: '제주도파티애월 한담누리',
                c_phone: '050350512727',
                c_category: '숙박',
                c_addr: '제주특별자치도 제주시 애월읍 일주서로 6158',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655443311684.png',
                c_type: '호텔',
                c_lat: 33.4592739520701,
                c_lon: 126.31238355628,
                c_file_group_no: 14
              },
              tp_item_category: '숙박',
              tp_plan_start_date_time: '2024-01-02T16:00:00',
              tp_plan_end_date_time: '2024-01-03T08:00:00',
              tp_rm: '',
              create_dt: '2024-03-03T18:22:14'
            },
            {
              tp_pk_num: 21,
              tp_fk_tnum: 1,
              pk: '5',
              tp_fk_company_info: {
                c_pk_num: 1,
                c_cnum: '1121363079',
                c_fk_id: 'lkd9125',
                c_name: '인스밀',
                c_phone: '050713525661',
                c_category: '식당',
                c_addr: '제주 서귀포시 대정읍 일과대수로27번길 22 1층',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655429412797.jpg',
                c_type: '일식',
                c_lat: 33.2384787715141,
                c_lon: 126.229230662407,
                c_file_group_no: 8
              },
              tp_item_category: '레저',
              tp_plan_start_date_time: '2024-01-02T08:00:00',
              tp_plan_end_date_time: '2024-01-03T10:00:00',
              tp_rm: '바뀜 ㅋzz',
              create_dt: '2024-02-29T14:06:02',
              update_dt: '2024-02-29T14:45:22'
            }
          ],
          day: '2024-01-03'
        },
        {
          dayPlanList: [],
          day: '2024-01-04'
        },
        {
          dayPlanList: [
            {
              tp_pk_num: 22,
              tp_fk_tnum: 1,
              pk: '6',
              tp_fk_company_info: {
                c_pk_num: 2,
                c_cnum: '1208643350',
                c_fk_id: 'lkd9125',
                c_name: '생각하는정원',
                c_phone: '0647723701',
                c_category: '레저',
                c_addr: '제주시 한경면 녹차분재로 675',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655426171915.jpeg',
                c_type: '실외스포츠',
                c_lat: 33.3255844945227,
                c_lon: 126.255005128834,
                c_file_group_no: 9
              },
              tp_item_category: '레저',
              tp_plan_start_date_time: '2024-01-05T08:00:00',
              tp_plan_end_date_time: '2024-01-06T10:00:00',
              tp_rm: '바뀜 ㅋ',
              create_dt: '2024-02-29T14:06:02',
              update_dt: '2024-02-29T14:45:22'
            },
            {
              tp_pk_num: 44,
              tp_fk_tnum: 1,
              pk: '7',
              tp_fk_company_info: {
                c_pk_num: 5,
                c_cnum: '2068689631',
                c_fk_id: 'lkd9125',
                c_name: '새별ATV',
                c_phone: '0647928283',
                c_category: '레저',
                c_addr: '제주특별자치도 제주시 한림읍 금악리 산 31-2',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655423282832.jpeg',
                c_type: '실외스포츠',
                c_lat: 33.3496487834802,
                c_lon: 126.360348578212,
                c_file_group_no: 12
              },
              tp_item_category: '레저',
              tp_plan_start_date_time: '2024-01-02T16:00:00',
              tp_plan_end_date_time: '2024-01-05T08:00:00',
              tp_rm: '',
              create_dt: '2024-03-13T15:45:29'
            }
          ],
          day: '2024-01-05'
        },
        {
          dayPlanList: [
            {
              tp_pk_num: 22,
              tp_fk_tnum: 1,
              pk: '8',
              tp_fk_company_info: {
                c_pk_num: 2,
                c_cnum: '1208643350',
                c_fk_id: 'lkd9125',
                c_name: '생각하는정원',
                c_phone: '0647723701',
                c_category: '레저',
                c_addr: '제주시 한경면 녹차분재로 675',
                c_condition: '1',
                c_check: '1',
                c_img: 'legacy_company/1655426171915.jpeg',
                c_type: '실외스포츠',
                c_lat: 33.3255844945227,
                c_lon: 126.255005128834,
                c_file_group_no: 9
              },
              tp_item_category: '레저',
              tp_plan_start_date_time: '2024-01-05T08:00:00',
              tp_plan_end_date_time: '2024-01-06T10:00:00',
              tp_rm: '바뀜 ㅋ',
              create_dt: '2024-02-29T14:06:02',
              update_dt: '2024-02-29T14:45:22'
            }
          ],
          day: '2024-01-06'
        },
        {
          dayPlanList: [],
          day: '2024-01-07'
        },
        {
          dayPlanList: [],
          day: '2024-01-08'
        },
        {
          dayPlanList: [],
          day: '2024-01-09'
        }
      ]
    });
  })
];
