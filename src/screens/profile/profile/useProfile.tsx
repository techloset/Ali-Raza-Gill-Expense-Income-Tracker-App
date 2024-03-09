import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const useProfile = () => {
  const hnadleSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('User signed out!'));
  };
  return {hnadleSignOut};
};

export default useProfile;
