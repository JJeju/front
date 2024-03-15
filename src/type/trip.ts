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

export type { getTripRs };
