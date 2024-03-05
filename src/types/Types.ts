import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamsList = {
  signUp: undefined;
  login: undefined;
  ForgetPassword: undefined;
  Home: undefined;
  Settings: undefined;
};
export type Expense = {
  discription: string;
  category: string;
  amount: string;
  image: string | null;
  transactionType: string | null;
};
export interface LoginProps {
  navigation: StackNavigationProp<RootStackParamsList, 'login', 'signUp'>;
}
export type counterState = {
  expense: Expense[];
  isLoading: boolean;
  isError: string | null;
};
