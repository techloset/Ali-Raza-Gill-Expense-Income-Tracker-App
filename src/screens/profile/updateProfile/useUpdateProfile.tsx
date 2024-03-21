import {ToastAndroid} from 'react-native';
import {useEffect, useState} from 'react';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
export default function useUpdateProfile() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [imageURI, setImageURI] = useState<string | ''>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        const userDoc = await firestore()
          .collection('user')
          .doc(currentUser?.uid)
          .get();
        const userData = userDoc.data();
        if (userData) {
          setEmail(userData.email || '');
          setName(userData.displayName || '');
          setImageURI(userData.imageURL || '');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSelectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        const {uri} = response.assets[0];
        if (uri) {
          setImageURI(uri);
        }
      }
    });
  };

  const uploadImageToStorage = async (uri: string) => {
    try {
      const fileName = `${Date.now()}-image.jpg`;
      const reference = storage().ref(`images/${fileName}`);
      await reference.putFile(uri);
      const downloadURL = await reference.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image: ', error);
      throw error;
    }
  };

  const handleUpdateProfile = async () => {
    try {
      let imageURL = null;
      if (imageURI) {
        imageURL = await uploadImageToStorage(imageURI);
      }

      const currentUser = auth().currentUser;
      await firestore().collection('user').doc(currentUser?.uid).update({
        email,
        displayName: name,
        imageURL,
      });

      ToastAndroid.show('Profile updated successfully!', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error updating profile:', error);
      ToastAndroid.show('Failed to update profile', ToastAndroid.SHORT);
    }
  };

  return {
    email,
    setEmail,
    name,
    setName,
    imageURI,
    setImageURI,
    handleSelectImage,
    handleUpdateProfile,
  };
}
