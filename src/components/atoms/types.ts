import type {
  TouchableOpacityProps,
  TextProps as RNTextProps,
} from 'react-native';
import type {SortingType, StatusType} from '@/types';

export interface PressableProps extends TouchableOpacityProps {}

export interface StatusProps {
  type: StatusType;
}

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export interface TextProps extends RNTextProps {}

export interface RadioProps {
  onPress: (item: SortingType, index: number) => void;
  checked: boolean | null;
  label: SortingType;
  index: number;
}

export interface GapProps {
  size?: number;
}

export interface SeparatorProps {
  color?: string;
}
