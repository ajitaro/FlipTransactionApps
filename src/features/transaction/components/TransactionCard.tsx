import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable, Text} from '@atoms';
import styles from '@/styles';
import {Colors} from '@/constants';
import {formatDate, formatRupiah, formatBank} from '@/utils';
import {RootStackParamList} from '@/app/App';
import {StatusType} from '@/types';
import {type TransactionCardProps, Status} from '.';

const TransactionCard = (props: TransactionCardProps) => {
  const {item} = props;

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'TransactionList'>
    >();

  const onPressCard = () => {
    navigation.navigate('TransactionDetail', {item});
  };

  return (
    <Pressable
      onPress={onPressCard}
      style={[
        localStyles.card,
        {
          backgroundColor:
            item.status === StatusType.SUCCESS
              ? Colors.oceanGreen
              : Colors.orange,
        },
      ]}>
      <View style={[styles.flexRow, localStyles.innerCard]}>
        <View>
          <View style={[styles.flexRow, localStyles.transferText]}>
            <Text>{formatBank(item.sender_bank)}</Text>
            <Icon name="arrow-right-thick" size={16} color={Colors.black} />
            <Text>{formatBank(item.beneficiary_bank)}</Text>
          </View>
          <Text>{item.beneficiary_name}</Text>
          <View style={styles.flexRow}>
            <Text>{formatRupiah(item.amount)}</Text>
            <Entypo name="dot-single" size={20} color={Colors.black} />
            <Text>{formatDate(item.created_at)}</Text>
          </View>
        </View>
        <Status type={item.status} />
      </View>
    </Pressable>
  );
};

export default TransactionCard;

const localStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 6,
  },
  innerCard: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.white,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  transferText: {
    justifyContent: 'flex-start',
  },
});
