import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home/Home';
import AddExpense from '../../screens/expenses/addExpense/AddExpense';
import Expense from '../../screens/expenses/expense/Expense';
import TabScreen from '../../screens/expenses/expense/Expense';
import {Image} from 'react-native';

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
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Transactions"
        component={AddExpense}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="."
        component={AddExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              image={require('../../assets/images/TabIcons/Add.png')}
              onPress={() => {}}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Budget"
        component={AddExpense}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Porfile "
        component={AddExpense}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
