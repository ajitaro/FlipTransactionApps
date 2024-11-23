import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@/constants';
import {SortingType} from '@/types';
import {Pressable, Text, Gap, type RadioProps} from '.';

const Radio = (props: RadioProps) => {
  return (
    <Pressable
      style={localStyles.container}
      onPress={() => props.onPress(props.label, props.index)}>
      <Icon
        name={props.checked ? 'radiobox-marked' : 'radiobox-blank'}
        size={20}
        color={Colors.orange}
      />
      <Gap size={5} />
      <Text>
        {props.label === SortingType.SORT_BY
          ? props.label.toUpperCase()
          : props.label}
      </Text>
    </Pressable>
  );
};

export default Radio;

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
    paddingVertical: 8,
  },
});
