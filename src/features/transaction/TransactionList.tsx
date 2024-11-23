import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAxios} from '@/hooks/useAxios';
import {Gap} from '@atoms';
import {featureStyles, List, SearchBar, type ListRef} from '.';

const TransactionList = () => {
  const {response, fetchData} = useAxios();
  const listRef = useRef<ListRef>(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={featureStyles.padContainer}>
      <SearchBar listRef={listRef} />
      <Gap size={5} />
      <List ref={listRef} data={response} />
    </SafeAreaView>
  );
};

export default TransactionList;
