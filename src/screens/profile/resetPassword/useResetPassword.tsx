import {Alert} from 'react-native';
import {useState} from 'react';
import auth, {firebase} from '@react-native-firebase/auth';

interface Reset {
  currentPass: string;
  newPass: string;
  setNewPass: string | ((text: string) => void);
  confirmNewPass: string;
  setConfirmNewPass: string | ((text: string) => void);
  setCurrentPass: (pass: string) => void;
  handleResetPassword: () => void;
}

const useResetPassword = (): Reset => {
  const [currentPass, setCurrentPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confirmNewPass, setConfirmNewPass] = useState<string>('');

  const handleResetPassword = () => {
    if (!currentPass || !newPass || !confirmNewPass) {
      Alert.alert('Please fill all fields');
      return;
    }

    if (newPass !== confirmNewPass) {
      Alert.alert('New passwords do not match');
      return;
    }

    const emailCred = firebase.auth.EmailAuthProvider.credential(
      auth().currentUser?.email || '',
      currentPass,
    );

    auth()
      .currentUser?.reauthenticateWithCredential(emailCred)
      .then(() => {
        return auth().currentUser?.updatePassword(newPass);
      })
      .then(() => {
        Alert.alert('Password updated successfully');
        setCurrentPass('');
        setNewPass('');
        setConfirmNewPass('');
      })
      .catch((error: any) => {
        Alert.alert('Error', error.message);
      });
  };

  return {
    currentPass,
    setCurrentPass,
    newPass,
    setNewPass,
    confirmNewPass,
    setConfirmNewPass,
    handleResetPassword,
  };
};

export default useResetPassword;
