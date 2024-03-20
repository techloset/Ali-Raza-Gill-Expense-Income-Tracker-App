import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../../screens/auth/signUp/SignUp';
import Login from '../../screens/auth/logIn/Login';
import ForgotPassword from '../../screens/auth/forgotPassword/ForgotPassword';
import TabNavigation from '../tabNavigation/TabNavigation';
import auth from '@react-native-firebase/auth';
import Profile from '../../screens/profile/profile/Profile';
import UpdateProfile from '../../screens/profile/updateProfile/UpdateProfile';
import ResetPassword from '../../screens/profile/resetPassword/ResetPassword';
import FinancialReports from '../../screens/financialReports/FinancialReports';
import EditTransaction from '../../screens/editTransaction/EditTransaction';
export type AuthRoutes = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  TabNavigation: undefined;
  Profile: undefined;
  ResetPassword: undefined;
  UpdateProfile: undefined;
  Home: undefined;
  FinancialReports: undefined;
  EditTransaction:
    | {
        image: any;
        category: string;
        description: string;
        amount: number;
        time: string;
      }
    | undefined;
};
const Stack = createNativeStackNavigator<AuthRoutes>();
const Tab = createBottomTabNavigator<AuthRoutes>();

const StackNav = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
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
          name="FinancialReports"
          component={FinancialReports}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="EditTransaction"
          component={EditTransaction}
          options={{
            headerShown: false,
          }}
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
