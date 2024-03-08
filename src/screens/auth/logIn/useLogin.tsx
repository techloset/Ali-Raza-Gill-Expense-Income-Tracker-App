import {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';
import {useAppDispatch} from '../../../store/hooks';
import {Login, googleSignUp} from '../../../store/slices/authSlice';

const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const handleLogEmail = (text: string) => {
    setEmail(text);
  };

  const handleLogPassword = (text: string) => {
    setPassword(text);
  };

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  const handleLogIn = () => {
    try {
      dispatch(Login({email, password}));
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleGoogleSignup = async () => {
    try {
      await dispatch(googleSignUp);
    } catch (error) {
      console.log('SignUp error', error);
    }
  };

  return {
    email,
    password,
    passwordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleLogIn,
    secureTextEntry,
    handleLogEmail,
    handleLogPassword,
    navigation,
    handleGoogleSignup,
  };
};
