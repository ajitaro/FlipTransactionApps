import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '@/constants';

const {width, height} = Dimensions.get('window');

const atomsStyles = StyleSheet.create({
  text: {
    color: Colors.black,
    lineHeight: 20,
  },
  whiteMediumText: {
    color: Colors.white,
    fontWeight: '500',
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  pressable: {
    borderRadius: 5,
    padding: 10,
  },
  statusView: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  modalSafeArea: {
    flex: 1,
    backgroundColor: Colors.backdrop,
    justifyContent: 'center',
    padding: 22,
  },
  modalBackdrop: {
    position: 'absolute',
    width: width,
    height: height,
  },
  modalContent: {
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: 'transparent',
  },
});

export default atomsStyles;
