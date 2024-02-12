import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/auth/signUp/SignUp';
import Login from '../screens/auth/logIn/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from '../screens/auth/forgotPassword/ForgotPassword';
import AddTodo from '../screens/frontend/addTodo/AddTodo';

export type AuthRoutes = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  AddTodo: undefined;
};
const Stack = createNativeStackNavigator<AuthRoutes>();

const Navigationscreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={{headerShown: true}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          // options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigationscreen;
