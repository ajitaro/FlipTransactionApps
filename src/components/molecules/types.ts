import type {ModalProps} from '@/components/types';

export interface ModalWrapperProps extends ModalProps {}

export interface ModalWrapperRef {
  showModal: (status: boolean) => void;
}
