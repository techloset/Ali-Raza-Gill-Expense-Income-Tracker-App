import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../../screens/auth/signUp/SignUp';
import Login from '../../screens/auth/logIn/Login';
import ForgotPassword from '../../screens/auth/forgotPassword/ForgotPassword';
import TabNavigation from '../tabNavigation/TabNavigation';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import Profile from '../../screens/profile/profile/Profile';
import UpdateProfile from '../../screens/profile/updateProfile/UpdateProfile';
import ResetPassword from '../../screens/profile/resetPassword/ResetPassword';
export type AuthRoutes = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  TabNavigation: undefined;
  Profile: undefined;
  ResetPassword: undefined;
  UpdateProfile: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<AuthRoutes>();
const Tab = createBottomTabNavigator<AuthRoutes>();

const StackNav = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      <>
        <Stack.Navigator>
          <Stack.Group>
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
          </Stack.Group>
        </Stack.Navigator>
      </>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNav;
