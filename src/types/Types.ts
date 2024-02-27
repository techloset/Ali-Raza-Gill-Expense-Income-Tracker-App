import {StackNavigationProp} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

export type RootStackParamsList = {
  signUp: undefined;
  login: undefined;
  ForgetPassword: undefined;
  Home: undefined;
  Settings: undefined;
};
export type expenses = {
  description: string;
  category: string;
};
export interface LoginProps {
  navigation: StackNavigationProp<RootStackParamsList, 'login', 'signUp'>;
}
export type counterState = {
  expense: expenses[];
  isLoading: boolean;
  isError: string | null;
};
