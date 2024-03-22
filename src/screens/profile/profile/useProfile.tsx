import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {AppDispatch} from '../../../store/store';
import {LogOut} from '../../../store/slices/authSlice';

interface ProfileData {
  userImageURL: string | null;
  name: string;
  fileModalVisible: boolean;
  confirmLogout: () => void;
  handleLogout: () => void;
  cancelLogout: () => void;
}

export default function useProfile(): ProfileData {
  const dispatch: AppDispatch = useDispatch();
  const [userImageURL, setUserImageURL] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [fileModalVisible, setFileModalVisible] = useState(false);

  useEffect(() => {
    const currentUser = auth()?.currentUser;
    if (!currentUser) {
      console.log('No current user found');
      setLoading(false);
      return;
    }

    const unsubscribeImageURL = firestore()
      .collection('user')
      .doc(currentUser.uid)
      .onSnapshot(snapshot => {
        const data = snapshot.data();
        if (data) {
          setUserImageURL(data.imageURL || null);
          setName(data.displayName || 'Hello');
        }
        setLoading(false);
      });

    return () => {
      unsubscribeImageURL();
    };
  }, []);

  const handleLogout = () => {
    setFileModalVisible(true);
  };

  const confirmLogout = () => {
    dispatch(LogOut());
    setFileModalVisible(false);
  };

  const cancelLogout = () => {
    setFileModalVisible(false);
  };

  return {
    userImageURL,
    name,
    handleLogout,
    fileModalVisible,
    confirmLogout,
    cancelLogout,
  };
}
