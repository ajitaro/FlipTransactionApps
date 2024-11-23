import {TouchableOpacity} from 'react-native';
import React from 'react';
import type {PressableProps} from '.';

const Pressable = (props: PressableProps) => {
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={props.activeOpacity || 0.8}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Pressable;
