import {ImageSourcePropType} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import AddExpense from '../../screens/expenses/AddExpense';
import {Image} from 'react-native';
import UpdateProfile from '../../screens/profile/updateProfile/UpdateProfile';
import ResetPassword from '../../screens/profile/resetPassword/ResetPassword';
import ProfileHome from '../../screens/profile/profile/Profile';
import TransactionsDetails from '../../screens/transactionsDetails/TransactionsDetail';
import FinancialReports from '../../screens/financialReports/FinancialReports';
import EditTransaction from '../../screens/editTransaction/EditTransaction';

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
        component={TransactionsDetails}
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
        component={FinancialReports}
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
        component={ProfileHome}
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
