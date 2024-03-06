interface TravelCreateRq {
  tr_title: string;
  tr_in: string;
  tr_out: string;
  tr_relationship: string;
}
interface TravelCreateRs {
  tr_pk_num: number;
  tr_fk_id: string;
  tr_title: string;
  tr_in: string;
  tr_out: string;
  tr_relationship: string;
  tr_tf: string;
}

export type { TravelCreateRq, TravelCreateRs };
