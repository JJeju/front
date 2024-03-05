interface PurchaseHistoryRq {
  category: string;
  name: string;
  pageNum: number;
}

interface PurchaseHistoryRs {
  bk_fk_cnum: string;
  bk_fk_num: number;
  bk_goods: string;
  bk_price: number;
  bk_name: string;
  bk_paych: boolean;
  bk_paytime: string;
  bk_fk_id: string;
  c_category: string;
  c_name: string;
  pageNum: number;
  listCnt: number;
}
interface UpdateMemberRq {
  m_birth: string;
  m_email: string;
}
interface TravelReviewRq {
  pageNum: number;
  title: string;
}
interface TravelReviewRs {
  b_pk_num: number;
  b_fk_tnum: number;
  b_fk_id: string;
  b_title: string;
  b_cost: number;
  b_contents: string;
  b_img: {
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
interface TravelReviewDetailRs {
  blog: {
    b_pk_num: number;
    b_fk_tnum: number;
    b_fk_id: string;
    b_title: string;
    b_cost: number;
    b_contents: string;
    file_group_no: number;
  };
  files: [
    {
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
    }
  ];
  mainFile: {
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

export type {
  PurchaseHistoryRq,
  PurchaseHistoryRs,
  UpdateMemberRq,
  TravelReviewRq,
  TravelReviewRs,
  TravelReviewDetailRs
};
