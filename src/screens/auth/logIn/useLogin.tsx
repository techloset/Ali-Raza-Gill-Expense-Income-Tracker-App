import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';
import {useAppDispatch} from '../../../store/hooks';
import {Login, googleSignUp} from '../../../store/slices/authSlice';
import {ToastAndroid} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();

  const handleLogEmail = (text: string) => {
    setEmail(text);
  };

  const handleLogPassword = (text: string) => {
    setPassword(text);
  };

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogIn = () => {
    if (!email.trim() || !password.trim()) {
      ToastAndroid.show('Email and password are required', ToastAndroid.SHORT);
      return;
    }

    if (!isValidEmail(email)) {
      ToastAndroid.show('Invalid email format', ToastAndroid.SHORT);
      return;
    }

    if (password.trim().length < 6) {
      ToastAndroid.show(
        'Password must contain at least 6 characters',
        ToastAndroid.SHORT,
      );
      return;
    }

    try {
      dispatch(Login({email, password}));
    } catch (error) {}
  };

  const handleGoogleSignup = async () => {
    try {
      await dispatch(googleSignUp);
    } catch (error) {
      ToastAndroid.show('SignUp error', ToastAndroid.SHORT);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return {
    email,
    password,
    isChecked,
    handleCheckBoxToggle,
    handleLogIn,
    secureTextEntry,
    handleLogEmail,
    handleLogPassword,
    navigation,
    handleGoogleSignup,
    setPasswordVisible,
    togglePasswordVisibility,
    isPasswordVisible,
  };
};
