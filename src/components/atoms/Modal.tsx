import {Modal as RNModal, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {atomsStyles} from '.';
import type {ModalProps} from '@/components/types';

const Modal = (props: ModalProps) => {
  return (
    <RNModal
      visible={props.visible}
      animationType={props.animationType}
      transparent>
      <SafeAreaView style={atomsStyles.modalSafeArea}>
        <TouchableWithoutFeedback onPress={props.onPressBackdrop}>
          <View style={atomsStyles.modalBackdrop} />
        </TouchableWithoutFeedback>
        <View style={atomsStyles.modalContent}>{props.children}</View>
      </SafeAreaView>
    </RNModal>
  );
};

export default Modal;
