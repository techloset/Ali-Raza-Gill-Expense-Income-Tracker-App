import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home/Home';
import AddExpense from '../../screens/expenses/addExpense/AddExpense';
import Expense from '../../screens/expenses/expense/Expense';
import TabScreen from '../../screens/expenses/expense/Expense';
import {Image} from 'react-native';
import UpdateProfile from '../../screens/profile/updateProfile/UpdateProfile';
import ResetPassword from '../../screens/profile/resetPassword/ResetPassword';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  image: ImageSourcePropType;
  onPress: () => void;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({image, onPress}) => (
  <Image
    source={image}
    style={{
      width: 60,
      height: 60,
      marginBottom: 20,
    }}
    onProgress={(onPress = () => {})}
  />
);

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/TabIcons/HomeFocused.png')
                  : require('../../assets/images/TabIcons/Home.png')
              }
              style={{width: 25, height: 25}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={AddExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/TabIcons/TransactionFocused.png')
                  : require('../../assets/images/TabIcons/Transaction.png')
              }
              style={{width: 25, height: 25}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="."
        component={AddExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/TabIcons/Add.png')
                  : require('../../assets/images/TabIcons/Add.png')
              }
              style={{width: 25, height: 25}}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Budget"
        component={AddExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/TabIcons/Budget.png')
                  : require('../../assets/images/TabIcons/Budget.png')
              }
              style={{width: 25, height: 25}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UpdateProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/TabIcons/ProfileFocused.png')
                  : require('../../assets/images/TabIcons/Profile.png')
              }
              style={{width: 25, height: 25}}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
