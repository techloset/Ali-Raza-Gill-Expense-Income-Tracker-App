import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import AddExpense from '../../screens/expenses/AddExpense';
import {Image} from 'react-native';
import ProfileHome from '../../screens/profile/profile/Profile';
import TransactionsDetails from '../../screens/transactionsDetails/TransactionsDetail';
import FinancialReports from '../../screens/financialReports/FinancialReports';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60,
          position: 'absolute',
          bottom: 0,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../../assets/images/TabIcons/HomeFocused.png')
                    : require('../../assets/images/TabIcons/Home.png')
                }
                style={{width: 32, height: 32}}
              />
              <Text
                style={[styles.text, {color: focused ? '#7F3DFF' : 'gray'}]}>
                Home
              </Text>
            </>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsDetails}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../../assets/images/TabIcons/TransactionFocused.png')
                    : require('../../assets/images/TabIcons/Transaction.png')
                }
                style={{width: 42, height: 32}}
              />
              <Text
                style={[styles.text, {color: focused ? '#7F3DFF' : 'gray'}]}>
                Transaction
              </Text>
            </>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/TabIcons/Add.png')
                  : require('../../assets/images/TabIcons/Add.png')
              }
              style={{width: 57, height: 56, marginBottom: 68}}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Budget"
        component={FinancialReports}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../../assets/images/TabIcons/BudgetFocused.png')
                    : require('../../assets/images/TabIcons/Budget.png')
                }
                style={{width: 32, height: 32}}
              />
              <Text
                style={[styles.text, {color: focused ? '#7F3DFF' : 'gray'}]}>
                Budget
              </Text>
            </>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileHome}
        options={{
          tabBarIcon: ({focused}) => {
            const imageSource = require('../../assets/images/TabIcons/Profile.png');
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={imageSource}
                  tintColor={focused ? '#7F3DFF' : 'gray'}
                  style={{width: 32, height: 38}}
                />
                <Text
                  style={[styles.text, {color: focused ? '#7F3DFF' : 'grey'}]}>
                  Profile
                </Text>
              </View>
            );
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    fontWeight: '500',
  },
});
