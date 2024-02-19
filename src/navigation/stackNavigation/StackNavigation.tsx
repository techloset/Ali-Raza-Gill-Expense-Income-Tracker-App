import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../../screens/auth/signUp/SignUp';
import Login from '../../screens/auth/logIn/Login';
import ForgotPassword from '../../screens/auth/forgotPassword/ForgotPassword';
import TabNavigation from '../tabNavigation/TabNavigation';

export type AuthRoutes = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  TabNavigation: undefined;
};
const Stack = createNativeStackNavigator<AuthRoutes>();
const Tab = createBottomTabNavigator<AuthRoutes>();

const StackNav = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNav;
