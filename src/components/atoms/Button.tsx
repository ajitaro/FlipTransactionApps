import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Text, atomsStyles, type ButtonProps} from '.';

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={atomsStyles.button}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
