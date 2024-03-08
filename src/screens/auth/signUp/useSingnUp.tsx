import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';
import {useAppDispatch} from '../../../store/hooks';
import {Signup, googleSignUp} from '../../../store/slices/authSlice';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const useSignUp = () => {
  const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  const handleSignUp = async () => {
    try {
      await dispatch(Signup({displayName, email, password}));
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

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    passwordVisible,
    setPasswordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleGoogleSignup,
    handleSignUp,
    secureTextEntry,
    toggleSecureEntry,
    navigation,
  };
};
