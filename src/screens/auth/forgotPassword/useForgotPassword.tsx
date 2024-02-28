// import React, {useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import {Alert} from 'react-native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';

// type ForgotPasswordScreenNavigationProp = StackNavigationProp<
//   AuthRoutes,
//   'ForgotPassword'
// >;
// type Props = {
//   navigation: ForgotPasswordScreenNavigationProp;
// };

// const useForgotPassword = ({navigation}: Props) => {
//   const [email, setEmail] = useState<string>('');

//   const forgotPassword = async () => {
//     try {
//       if (!email) {
//         Alert.alert('Please enter your email address');
//         return;
//       }
//       await auth().sendPasswordResetEmail(email);
//       Alert.alert('Password reset email sent!');
//       navigation.goBack();
//     } catch (error: any) {
//       let errorMessage =
//         'An error occurred while sending the password reset email. Please try again.';
//       if (error.code === 'auth/user-not-found') {
//         errorMessage = 'That email address is not registered!';
//       }
//       Alert.alert(errorMessage);
//       console.error(error);
//     }
//   };

//   return {forgotPassword, email, setEmail};
// };

// export default useForgotPassword;

import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';

type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  AuthRoutes,
  'ForgotPassword'
>;

type Props = {
  navigation: ForgotPasswordScreenNavigationProp;
};

const useForgotPassword = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const forgotPassword = async () => {
    try {
      if (!email) {
        Alert.alert('Please enter your email address');
        return;
      }
      if (!validateEmail(email)) {
        Alert.alert('Please enter a valid email address');
        return;
      }

      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password reset email sent!');
      navigation.goBack();
    } catch (error: any) {
      let errorMessage =
        'An error occurred while sending the password reset email. Please try again.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'That email address is not registered!';
      }
      Alert.alert(errorMessage);
      console.error(error);
    }
  };

  return {forgotPassword, email, setEmail};
};

export default useForgotPassword;
