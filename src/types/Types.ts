import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamsList = {
  signUp: undefined;
  login: undefined;
  ForgetPassword: undefined;
  Home: undefined;
  Settings: undefined;
  FinancialReports: undefined;
  EditTransaction: undefined;
};
export type Expense = {
  discription: string;
  category: string;
  amount: string;
  image: string | null;
  transType: string;
  wallet: string;
};
export type Income = {
  discription: string;
  category: string;
  amount: string;
  image: string | null;
  transType: string;
  wallet: string;
};
export interface LoginProps {
  navigation: StackNavigationProp<RootStackParamsList, 'login', 'signUp'>;
}
export type counterState = {
  expense: Expense[];
  isLoading: boolean;
  isError: string | null;
  income: Income[];
};

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface TransactionInterface {
  addExpenseTime: string;
  amount: any;
  id: string;
  docId: string;
  category: string;
  description: string;
  money: string;
  transactionType: string;
  time: string;
  imageUrl: string | null;
  wallet: string;
  transType: string;
}

export interface financeSummary {
  balance: any;
  income: any;
  expenses: any;
}

export interface PasswordResetData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  handleResetPassword: () => void;
  setCurrentPassword: (value: string) => void;
  setNewPassword: (value: string) => void;
  setConfirmNewPassword: (value: string) => void;
}

export interface SignUp {
  displayName: string;
  email: string;
  password: string;
}

export interface SignIn {
  email: string;
  password: string;
}
export interface UserProfile {
  password: string;
  displayName: string;
  email: string;
}
export interface AuthState {
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
  error: string | null;
}
export type UserData = {
  email: string;
  uid: string;
  displayName: string;
  photoUrl: string | null;
};

export interface User {
  displayName: string;
  email: string;
}
