import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Gap, Pressable, Text, Separator} from '@atoms';
import {Colors, TransactionDetailStrings as Strings} from '@/constants';
import {formatDate, formatBank} from '@/utils';
import styles from '@/styles';
import {RootStackParamList} from '@/app/App';
import {type TransactionDetailProps, featureStyles} from '.';

const TransactionDetail = (props: TransactionDetailProps) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'TransactionDetail'>
    >();

  const onPressClose = () => {
    navigation.pop();
  };

  const item = props.route.params.item;

  return (
    <SafeAreaView style={featureStyles.container}>
      {/* TRANSACTION ID */}
      <View style={featureStyles.innerContainer}>
        <Text style={featureStyles.text}>
          {`${Strings.id.toUpperCase()}: #${item.id}`}
        </Text>
      </View>

      <Separator />
      {/* DETAIL */}
      <View style={[featureStyles.detailTransaction]}>
        <Text style={featureStyles.text}>{Strings.detail.toUpperCase()}</Text>
        <Pressable onPress={onPressClose}>
          <Text style={featureStyles.textOrange}>Tutup</Text>
        </Pressable>
      </View>

      <Separator color={Colors.lightGray} />

      <View style={featureStyles.view}>
        {/* BANK */}
        <View style={styles.flexRow}>
          <Text style={featureStyles.textBank}>
            {formatBank(item.sender_bank)}
          </Text>
          <Icon name="arrow-right-thick" size={20} color={Colors.black} />
          <Text style={featureStyles.textBank}>
            {formatBank(item.beneficiary_bank)}
          </Text>
        </View>
        <Gap size={8} />
        <View style={featureStyles.rowView}>
          {/* BENEFICIARY */}
          <View style={featureStyles.flex2}>
            <Text style={featureStyles.text}>
              - {item.beneficiary_name.toUpperCase()}
            </Text>
            <Text>{item.account_number}</Text>
          </View>
          {/* AMOUNT */}
          <View style={featureStyles.flex1}>
            <Text style={featureStyles.text}>
              {Strings.amount.toUpperCase()}
            </Text>
            <Text>{item.amount}</Text>
          </View>
        </View>

        <Gap size={8} />

        <View style={featureStyles.rowView}>
          {/* REMARK */}
          <View style={featureStyles.flex2}>
            <Text style={featureStyles.text}>
              {Strings.remark.toUpperCase()}
            </Text>
            <Text>{item.remark}</Text>
          </View>
          {/* UNIQUE CODE */}
          <View style={featureStyles.flex1}>
            <Text style={featureStyles.text}>
              {Strings.uniqueCode.toUpperCase()}
            </Text>
            <Text>{item.unique_code}</Text>
          </View>
        </View>

        <Gap size={8} />
        {/* CREATED AT */}
        <View>
          <Text style={featureStyles.text}>
            {Strings.createdAt.toUpperCase()}
          </Text>
          <Text>{formatDate(item.created_at)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
