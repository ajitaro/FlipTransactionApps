import {StyleSheet, View} from 'react-native';
import React from 'react';
import {atomsStyles, Text, type StatusProps} from '@atoms';
import {Strings, Colors} from '@/constants';
import {StatusType} from '@/types';

const Success = () => {
  return (
    <View
      style={[atomsStyles.statusView, {backgroundColor: Colors.oceanGreen}]}>
      <Text style={atomsStyles.whiteMediumText}>{Strings.success}</Text>
    </View>
  );
};

const Checking = () => {
  return (
    <View style={[atomsStyles.statusView, localStyles.checking]}>
      <Text style={localStyles.checkingText}>{Strings.checking}</Text>
    </View>
  );
};

const Status = (props: StatusProps) => {
  return props.type === StatusType.SUCCESS ? <Success /> : <Checking />;
};

export default Status;

const localStyles = StyleSheet.create({
  checking: {
    borderWidth: 1.5,
    borderColor: Colors.orange,
  },
  checkingText: {
    fontWeight: '500',
  },
});
