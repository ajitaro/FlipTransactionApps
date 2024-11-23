import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal} from '@atoms';
import {ModalWrapperProps, ModalWrapperRef} from '.';

const ModalWrapper = forwardRef<ModalWrapperRef, ModalWrapperProps>(
  (props, ref) => {
    const [isVisible, setVisible] = useState(false);

    const showModal = (status: boolean) => {
      setVisible(status);
    };

    useImperativeHandle(ref, () => ({
      showModal,
    }));
    return (
      <Modal visible={isVisible} onPressBackdrop={() => showModal(false)}>
        {props.children}
      </Modal>
    );
  },
);

export default ModalWrapper;
