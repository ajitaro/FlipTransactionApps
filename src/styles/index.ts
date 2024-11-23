import {StyleSheet, type ViewStyle} from 'react-native';

const Preset: Record<string, ViewStyle> = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const styles = StyleSheet.create({
  rowContainer: {
    ...Preset.row,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  flexRow: {
    ...Preset.row,
  },

  textInput: {
    width: '100%',
  },
  textInputView: {
    flex: 1,
    padding: 10,
  },
});

export default styles;
