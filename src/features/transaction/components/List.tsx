import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {FlatList} from 'react-native';
import {TransactionItem} from '@/types';
import {transactionFilter} from '@/utils';
import {SortingType} from '@/types';
import {TransactionCard} from '.';
import type {ListRef, ListProps} from '.';

const renderItem = ({item}: {item: TransactionItem}) => (
  <TransactionCard item={item} />
);

const List = forwardRef((props: ListProps, ref: React.Ref<ListRef>) => {
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);

  const setDefaultData = (data: ListProps['data']) => {
    if (data) {
      setTransactions(Object.values(data));
    } else {
      setTransactions([]);
    }
  };

  const onFilterTransaction = (term: string) => {
    if (term) {
      setTransactions(prev => transactionFilter(prev, term));
    } else {
      setDefaultData(props.data);
    }
  };

  const onSortingTransaction = (type: SortingType) => {
    const tempTransactions = [...transactions];

    switch (type) {
      case SortingType.A_TO_Z:
        tempTransactions.sort((a, b) =>
          a.beneficiary_name.localeCompare(b.beneficiary_name),
        );
        break;
      case SortingType.Z_TO_A:
        tempTransactions.sort((a, b) =>
          b.beneficiary_name.localeCompare(a.beneficiary_name),
        );
        break;
      case SortingType.NEWEST_DATE:
        tempTransactions.sort((a, b) =>
          a.created_at.localeCompare(b.created_at),
        );
        break;
      case SortingType.OLDEST_DATE:
        tempTransactions.sort((a, b) =>
          b.created_at.localeCompare(a.created_at),
        );
        break;
      default:
        setDefaultData(props.data);
        return;
    }

    setTransactions(tempTransactions);
  };

  useEffect(() => {
    setDefaultData(props.data);
  }, [props.data]);

  useImperativeHandle(ref, () => ({
    onFilterTransaction,
    onSortingTransaction,
  }));

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
});

export default List;
