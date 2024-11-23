import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors, Strings} from '@/constants';
import styles from '@/styles';
import Gap from '@/components/atoms/Gap';
import {SearchBarProps, Sorting} from '.';

const SearchBar = (props: SearchBarProps) => {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);

  const onChangeText = (text: string) => {
    setLoading(true);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTerm(text);
    setTypingTimeout(
      setTimeout(() => {
        props.listRef?.current?.onFilterTransaction?.(text);
        setLoading(false);
      }, 500) as unknown as number,
    );
  };

  return (
    <View style={[styles.rowContainer, localStyles.searchbar]}>
      <Icon name="search1" size={20} color={Colors.gray} />
      <Gap size={5} />
      <View style={styles.textInputView}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          placeholder={Strings.searchPlaceholder}
          placeholderTextColor={Colors.gray}
          style={styles.textInput}
          onChangeText={onChangeText}
          value={term}
        />
      </View>
      {loading && <ActivityIndicator size="small" color={Colors.orange} />}
      <Gap size={5} />
      <Sorting listRef={props.listRef} />
    </View>
  );
};

export default SearchBar;

const localStyles = StyleSheet.create({
  searchbar: {
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
});
