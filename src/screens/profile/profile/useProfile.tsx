import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {AppDispatch} from '../../../store/store';
import {LogOut} from '../../../store/slices/authSlice';

interface ProfileData {
  userImageURL: string | null;
  email: string;
  name: string;
  handleLogout: () => void;
}

export default function useProfile(): ProfileData {
  const dispatch: AppDispatch = useDispatch();
  const [userImageURL, setUserImageURL] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth()?.currentUser;
        if (currentUser) {
          const userDocument = await firestore()
            .collection('user')
            .doc(currentUser.uid)
            .get();

          if (userDocument.exists) {
            const userData = userDocument.data();
            if (userData) {
              setEmail(userData.email || '');
              setName(userData.name || 'Hello');
              setUserImageURL(userData.imageURL || null);
            }
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('No current user found');
        }
      } catch (error) {
        console.error("Error fetching current user's data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(LogOut());
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return {userImageURL, email, name, handleLogout};
}
