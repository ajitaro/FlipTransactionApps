import {Text as RNText} from 'react-native';
import React from 'react';
import {type TextProps, atomsStyles} from '.';

const Text = (props: TextProps) => {
  return (
    <RNText style={[atomsStyles.text, props.style]}>{props.children}</RNText>
  );
};

export default Text;
