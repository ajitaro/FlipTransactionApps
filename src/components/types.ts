import type {ModalProps as RNModalProps} from 'react-native';

export interface ModalProps extends RNModalProps {
  onPressBackdrop?: () => void;
}
