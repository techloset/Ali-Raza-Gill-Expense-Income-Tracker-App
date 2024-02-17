import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginProps} from '../../../types/Types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';

export const useSignUp = () => {
  const navigation = useNavigation<StackNavigationProp<AuthRoutes>>();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
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
  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
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
  interface ButtonGoogleProps {
    icon: any;
    text: string;
  }
  return {
    userName,
    setUserName,
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
