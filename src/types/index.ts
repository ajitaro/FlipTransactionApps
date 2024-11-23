export enum SortingType {
  SORT_BY = 'URUTKAN',
  A_TO_Z = 'Nama A-Z',
  Z_TO_A = 'Nama Z-A',
  NEWEST_DATE = 'Tanggal Terbaru',
  OLDEST_DATE = 'Tanggal Terlama',
}

export enum StatusType {
  SUCCESS = 'SUCCESS',
  CHECKING = 'CHECKING',
}

export interface TransactionItem {
  id: string;
  amount: number;
  unique_code: number;
  status: StatusType;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark?: string;
  created_at: string;
  completed_at: string;
  fee: number;
}
