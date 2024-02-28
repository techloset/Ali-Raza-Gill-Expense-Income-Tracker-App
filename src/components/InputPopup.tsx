import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

const AttachmentInputPopUp = () => {
  const [image, setImage] = useState<ImageOrVideo | null>(null);
  console.log(image);
  const handleImageThroughGallery = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImage(pickedImage);
      // console.log(pickedImage);
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const handleImageThroughCamera = async () => {
    try {
      const pickedImage = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImage(pickedImage);
    } catch (error) {
      console.log('Error taking picture:', error);
    }
  };

  return <></>;
};

export default AttachmentInputPopUp;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  buttonContainer: {
    padding: 14,
    backgroundColor: '#eee5ff',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 16,
    flex: 1,
  },
  Text: {
    fontFamily: 'Inter-Medium',
  },
});
