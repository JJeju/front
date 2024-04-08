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

export type { getTripRs, getTripDetailRs };
