import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomHeader from '../../../components/CustomHeader';
import Button from '../../../components/Button';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const UpdateProfile: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [imageURI, setImageURI] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user data from Firestore on component mount
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
          setName(userData.name || '');
          setImageURI(userData.imageURL || null);
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
      console.error('Error uploading image to Firebase Storage:', error);
      throw error;
    }
  };

  const handleUpdateProfile = async () => {
    try {
      // Upload image if it's selected
      let imageURL = null;
      if (imageURI) {
        imageURL = await uploadImageToStorage(imageURI);
      }

      // Update user profile data in Firestore
      const currentUser = auth().currentUser;
      await firestore().collection('user').doc(currentUser?.uid).update({
        email,
        name,
        imageURL,
      });

      ToastAndroid.show('Profile updated successfully!', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error updating profile:', error);
      ToastAndroid.show('Failed to update profile', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <CustomHeader title="Update Profile" style={{}} />
          <View style={styles.profileView}>
            <TouchableOpacity onPress={handleSelectImage}>
              <View style={styles.imageContainer}>
                {imageURI ? (
                  <Image style={styles.profileImage} source={{uri: imageURI}} />
                ) : (
                  <Image
                    style={styles.profileImage}
                    source={require('../../../assets/images/Profile/AvatarProfile.png')}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>

          <View style={styles.updateProfileBtn}>
            <Button name="Update Profile" onPress={handleUpdateProfile} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    height: 712,
  },
  container: {
    margin: 16,
    position: 'relative',
    height: '100%',
  },
  profileView: {
    marginTop: 26,
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderColor: '#7F3DFF',
    borderWidth: 2,
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },
  inputLabel: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 24,
    fontFamily: 'Inter-SemiBold',
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingHorizontal: 10,
    fontFamily: 'Inter-Medium',
  },
  updateProfileBtn: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
});
