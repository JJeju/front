interface BestRs {
  lodgment: {
    c_pk_cnum: string;
    c_fk_id: string;
    c_name: string;
    c_phone: string;
    c_cnum: number;
    c_category: string;
    c_addr: string;
    c_contents: string;
    c_condition: string;
    c_check: string;
    c_img: string;
    c_pk_num: string;
    c_type: string;
    c_price: string;
  }[];
  leisure: {
    c_pk_cnum: string;
    c_fk_id: string;
    c_cnum: number;
    c_name: string;
    c_phone: string;
    c_category: string;
    c_addr: string;
    c_contents: string;
    c_condition: string;
    c_pk_num: string;
    c_check: string;
    c_img: string;
    c_type: string;
    c_price: string;
  }[];
  restaurant: {
    c_pk_cnum: string;
    c_fk_id: string;
    c_name: string;
    c_pk_num: string;
    c_phone: string;
    c_cnum: number;
    c_category: string;
    c_addr: string;
    c_contents: string;
    c_condition: string;
    c_check: string;
    c_img: string;
    c_type: string;
    c_price: string;
  }[];
}

interface EventRs {
  spot: {
    s_pk_num: number;
    s_tittle: string;
    s_addr: string;
    s_info: string;
    s_img: string;
    s_guide: string;
  }[];
  event: {
    e_pk_enum: number;
    e_date: string;
    e_title: string;
    e_addr: string;
    e_eday: string;
    e_img: string;
    e_info: string;
    e_eventing: string;
  }[];
}

interface NoticeRs {
  notice: {
    n_pk_num: number;
    n_title: string;
    n_views: number;
    n_date: string;
  }[];
}
interface ReviewRs {
  b_pk_num: number;
  b_fk_tnum: number;
  b_fk_id: string;
  b_title: string;
  b_cost: number;
  b_star: number;
  b_contents: string;
  file_group_no: number;
  b_public_check: boolean;
}
export type { BestRs, EventRs, NoticeRs, ReviewRs };
