import {View} from 'react-native';
import React from 'react';
import {type SeparatorProps, atomsStyles} from '.';

const Separator = (props: SeparatorProps) => {
  return (
    <View style={[atomsStyles.separator, {backgroundColor: props.color}]} />
  );
};

export default Separator;
