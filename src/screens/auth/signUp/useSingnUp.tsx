// import {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';
// import {useAppDispatch} from '../../../store/hooks';
// import {Signup, googleSignUp} from '../../../store/slices/authSlice';
// import {Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';

// export const useSignUp = () => {
//   const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();
//   const [displayName, setDisplayName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(true);
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [isChecked, setChecked] = useState(false);
//   const dispatch = useAppDispatch();
//   const handleCheckBoxToggle = () => {
//     setChecked(!isChecked);
//   };

//   const handleSignUp = async () => {
//     try {
//       await dispatch(Signup({displayName, email, password}));
//     } catch (error) {
//       console.log('error', error);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       await dispatch(googleSignUp);
//     } catch (error) {
//       console.log('SignUp error', error);
//     }
//   };

//   const toggleSecureEntry = () => {
//     setSecureTextEntry(!secureTextEntry);
//   };
//   return {
//     displayName,
//     setDisplayName,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     passwordVisible,
//     setPasswordVisible,
//     isChecked,
//     handleCheckBoxToggle,
//     handleGoogleSignup,
//     handleSignUp,
//     secureTextEntry,
//     toggleSecureEntry,
//     navigation,
//   };
// };

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
  const [isPasswordVisible, setPasswordVisible] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const dispatch = useAppDispatch();

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    if (!displayName.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (displayName.length < 3) {
      Alert.alert('Error', 'Display name must be at least 3 characters');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must contain at least 6 characters');
      return;
    }

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    isPasswordVisible,
    setPasswordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleGoogleSignup,
    handleSignUp,
    secureTextEntry,
    toggleSecureEntry,
    navigation,
    togglePasswordVisibility,
  };
};
