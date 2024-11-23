import {SortingType} from '@/types';

const Strings = {
  success: 'Berhasil',
  checking: 'Pengecekan',
  sortBy: SortingType.SORT_BY,
  aToZ: SortingType.A_TO_Z,
  zToA: SortingType.Z_TO_A,
  newestDate: SortingType.NEWEST_DATE,
  oldestDate: SortingType.OLDEST_DATE,
  searchPlaceholder: 'Cari nama, bank, atau nominal',
} as const;

export const TransactionDetailStrings = {
  id: 'ID Transaksi',
  detail: 'Detail Transaksi',
  amount: 'Nominal',
  uniqueCode: 'Kode Unik',
  remark: 'Berita Transfer',
  createdAt: 'Waktu Dibuat',
} as const;

export default Strings;
