interface getTripRs {
  c_pk_num: number;
  c_cnum: string;
  c_fk_id: string;
  c_name: string;
  c_phone: string;
  c_category: string;
  c_addr: string;
  c_condition: string;
  c_check: string;
  c_img: string;
  c_type: string;
  c_lat: number;
  c_lon: number;
  fileData: {
    idx: number;
    file_group_no: number;
    url: string;
    file_ori_nm: string;
    file_sys_nm: string;
    extension: string;
    description: string;
    file_size: number;
    file_size_unit: string;
    create_dt: string;
  };
}
interface getTripDetailRs {
  company: {
    c_addr: string;
    c_category: string;
    c_cnum: string;
    c_lat: number;
    c_lon: number;
    c_name: string;
    c_phone: string;
    c_pk_num: number;
    c_type: string;
    fileData: {
      create_dt: string;
      description: string;
      extension: string;
      file_group_no: number;
      file_ori_nm: string;
      file_size: number;
      file_size_unit: string;
      file_sys_nm: string;
      idx: number;
      url: string;
    };
  };
  companyFileList: [];
  companyItemList: [];
}

interface TripCourseRs {
  planList: {
    dayPlanList: [
      {
        tp_pk_num: number;
        tp_fk_tnum: number;
        tp_fk_company_info: {
          c_pk_num: number;
          c_cnum: string;
          c_fk_id: string;
          c_name: string;
          c_phone: string;
          c_category: string;
          c_addr: string;
          c_condition: string;
          c_check: string;
          c_img: string;
          c_type: string;
          c_lat: number;
          c_lon: number;
          c_file_group_no: number;
        };
        tp_item_category: string;
        tp_plan_start_date_time: string;
        tp_plan_end_date_time: string;
        tp_rm: string;
        create_dt: string;
        update_dt: string;
      }
    ];
    day: string;
  }[];
  planItemList: [
    {
      tp_pk_num: number;
      tp_fk_tnum: number;
      tp_fk_company_num: number;
      tp_item_category: string;
      tp_plan_start_date_time: string;
      tp_plan_end_date_time: string;
      tp_rm: string;
      create_dt: string;
      update_dt: string;
    }
  ];
  travelroute: {
    tr_pk_num: number;
    tr_fk_id: string;
    tr_title: string;
    tr_in: string;
    tr_out: string;
    tr_relationship: string;
    tr_tf: boolean;
  };
}

export type { getTripRs, getTripDetailRs, TripCourseRs };
