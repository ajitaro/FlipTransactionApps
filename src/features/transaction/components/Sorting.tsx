import {FlatList, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable, Radio, Text} from '@atoms';
import ModalWrapper from '@/components/molecules/ModalWrapper';
import type {ModalWrapperRef} from '@/components/molecules/types';
import {Strings, Colors} from '@/constants';
import styles from '@/styles';
import {SortingType} from '@/types';
import type {SortingModalProps, SortingProps} from '.';

const sortingOptions: SortingType[] = [
  Strings.sortBy,
  Strings.aToZ,
  Strings.zToA,
  Strings.newestDate,
  Strings.oldestDate,
];

const SortingModalContent = (props: SortingModalProps) => {
  const onToggle = (item: SortingType, index: number) => {
    props.setChecked(index);
    props.listRef?.current?.onSortingTransaction(item);
    props.modalRef?.current?.showModal(false);
  };

  const renderItem = ({item, index}: {item: SortingType; index: number}) => (
    <Radio
      label={item}
      checked={props.checkedIndex === index}
      index={index}
      onPress={onToggle}
    />
  );
  return (
    <FlatList
      data={sortingOptions}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      scrollEnabled={false}
    />
  );
};

const Sorting = (props: SortingProps) => {
  const [checkedIndex, setCheckedIndex] = useState<number>(0);
  const modalRef = useRef<ModalWrapperRef>(null);

  const setChecked = (index: number) => {
    setCheckedIndex(index);
  };

  const openModal = () => {
    modalRef.current?.showModal(true);
  };

  return (
    <>
      <Pressable style={styles.flexRow} onPress={openModal}>
        <Text style={localStyles.sortByText}>
          {Strings.sortBy.toUpperCase()}
        </Text>
        <Icon name="chevron-down" size={20} color={Colors.orange} />
      </Pressable>
      <ModalWrapper ref={modalRef}>
        <SortingModalContent
          listRef={props.listRef}
          modalRef={modalRef}
          checkedIndex={checkedIndex}
          setChecked={setChecked}
        />
      </ModalWrapper>
    </>
  );
};

export default Sorting;

const localStyles = StyleSheet.create({
  sortByText: {
    color: Colors.orange,
    fontWeight: 'bold',
  },
});
