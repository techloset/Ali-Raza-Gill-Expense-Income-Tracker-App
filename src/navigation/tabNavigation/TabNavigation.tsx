import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home/Home';
import AddExpense from '../../screens/expenses/addExpense/AddExpense';
import Expense from '../../screens/expenses/expense/Expense';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
