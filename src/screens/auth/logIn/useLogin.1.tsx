import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAppDispatch} from '../../../store/hooks';
import {Login} from '../../../store/slices/authSlice';

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
  useEffect(() => {
    const ClientId =
      '577251364044-7kqqdtbio0420g24gburmmreheh8cadr.apps.googleusercontent.com';
    GoogleSignin.configure({
      webClientId: ClientId,
    });
  }, []);

  const handleLogIn = () => {
    try {
      dispatch(Login({email, password}));
    } catch (error) {
      console.log('error', error);
    }
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
    handleLogEmail,
    handleLogPassword,
    handleGoogleSignup,
  };
};
