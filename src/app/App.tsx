import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransactionDetail, TransactionList} from '@/features/transaction';
import {TransactionItem} from '@/types';

export interface RootStackParamList extends ParamListBase {
  TransactionList: undefined;
  TransactionDetail: {item: TransactionItem};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransactionList" component={TransactionList} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
