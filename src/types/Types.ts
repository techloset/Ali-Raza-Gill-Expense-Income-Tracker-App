import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamsList = {
  signUp: undefined;
  login: undefined;
  ForgetPassword: undefined;
};
export interface LoginProps {
  navigation: StackNavigationProp<RootStackParamsList, 'login', 'signUp'>;
}

