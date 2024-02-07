import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/auth/signUp/SignUp';
import Login from '../screens/auth/logIn/Login';

export type AuthRoutes = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<AuthRoutes>();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
