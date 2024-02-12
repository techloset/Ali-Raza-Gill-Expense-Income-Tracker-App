import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthRoutes} from '../../../navigation/Navigation';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();

export const useLogin = () => {
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isChecked, setChecked] = useState(false);

  const handleLogEmail = (text: string) => {
    setLogEmail(text);
  };

  const handleLogPassword = (text: string) => {
    setLogPassword(text);
  };

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };
  useEffect(() => {
    const ClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    GoogleSignin.configure({
      webClientId: ClientId,
    });
  }, []);

  const handleLogIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return {
    logEmail,
    logPassword,
    passwordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleLogIn,
    secureTextEntry,
    toggleSecureEntry,
    handleLogEmail,
    handleLogPassword,
    navigation,
  };
};
