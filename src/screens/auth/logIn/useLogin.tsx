import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';

const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isChecked, setChecked] = useState(false);

  const handleLogEmail = (text: string) => {
    setEmail(text);
  };

  const handleLogPassword = (text: string) => {
    setPassword(text);
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
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
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

  useEffect(() => {
    const ClientId =
      '577251364044-7kqqdtbio0420g24gburmmreheh8cadr.apps.googleusercontent.com';
    GoogleSignin.configure({
      webClientId: ClientId,
    });
  }, []);

  const handleGoogleSignup = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return {
    email,
    password,
    passwordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleLogIn,
    secureTextEntry,
    toggleSecureEntry,
    handleLogEmail,
    handleLogPassword,
    navigation,
    handleGoogleSignup,
  };
};
