import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '@/constants';

const BACKGROUND = Colors.cultured;
const PADDING = 20;

const rowContainer: ViewStyle = {
  padding: PADDING,
  flexDirection: 'row',
  backgroundColor: Colors.white,
};

const containerBase: ViewStyle = {
  flex: 1,
  backgroundColor: BACKGROUND,
};

const featureStyles = StyleSheet.create({
  container: {
    ...containerBase,
  },
  padContainer: {
    ...containerBase,
    padding: 8,
  },
  innerContainer: {
    ...rowContainer,
  },
  detailTransaction: {
    ...rowContainer,
    justifyContent: 'space-between',
  },
  view: {
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    padding: PADDING,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontWeight: '700',
  },
  textBank: {
    fontWeight: '700',
    fontSize: 18,
  },
  textOrange: {
    color: Colors.orange,
    fontWeight: '500',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
});

export default featureStyles;
