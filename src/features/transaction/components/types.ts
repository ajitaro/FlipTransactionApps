import {ModalWrapperRef} from '@/components/molecules/types';
import {SortingType, TransactionItem} from '@/types';

export interface TransactionCardProps {
  item: TransactionItem;
}

export interface SearchBarProps {
  listRef?: React.RefObject<ListRef>;
}

export interface ListRef {
  onFilterTransaction: (term: string) => void;
  onSortingTransaction: (type: SortingType) => void;
}

export interface SortingProps {
  listRef?: React.RefObject<ListRef>;
}

export interface SortingModalProps {
  listRef?: React.RefObject<ListRef>;
  modalRef?: React.RefObject<ModalWrapperRef>;
  checkedIndex: number;
  setChecked: (index: number) => void;
}

export interface ListProps {
  data?: Record<string, TransactionItem>;
}
