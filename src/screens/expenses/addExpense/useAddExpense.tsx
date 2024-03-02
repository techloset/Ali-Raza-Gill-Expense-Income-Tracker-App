import React, {useState} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Shopping from '../../../assets/images/HomeScreenImages/Shopping.png';
import Subscription from '../../../assets/images/HomeScreenImages/Subscription.png';
import Food from '../../../assets/images/HomeScreenImages/Food.png';
import Salary from '../../../assets/images/HomeScreenImages/Salary.png';
import Transpotation from '../../../assets/images/HomeScreenImages/Transpotation.png';
import {useAppDispatch} from '../../../store/hooks';
import {addExpense} from '../../../store/slices/expenseSlice';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';

interface Category {
  id: number;
  name: string;
  image: any;
}

const categories: Category[] = [
  {id: 1, name: 'Shopping', image: Shopping},
  {id: 2, name: 'Subscription', image: Subscription},
  {id: 3, name: 'Food', image: Food},
  {id: 4, name: 'Salary', image: Salary},
  {id: 5, name: 'Transportation', image: Transpotation},
];

export function useAddExpense() {
  const [category, setCategory] = useState<string>('');
  const [discription, setDiscription] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [wallet, setWallet] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fileModalVisible, setFileModalVisible] = useState(false);
  const [transType, setTransType] = useState<string>('Expense');
  const [image, setImage] = useState<string | null>('');
  const [uploading, setUploading] = useState(false);
  const disPatch = useAppDispatch();

  const addExpens = () => {
    if (!amount) {
      Alert.alert('Enter Amount ');
      return;
    }
    if (!category) {
      Alert.alert('Please select a category');
      return;
    }
    if (!discription) {
      Alert.alert('Enter Discription');
      return;
    }
    if (!image) {
      Alert.alert('Enter Image');
      return;
    }

    let expense = {
      amount,
      category,
      discription,
      wallet,
      image,
      addExpenseTime: new Date().toISOString(),
    };

    try {
      disPatch(
        addExpense({
          expense,
          transType,
        }),
      );
      setCategory('');
      setDiscription('');
      setAmount('');
      setImage(null);
    } catch (error) {
      console.log('error', error);
    }
  };

  const selectCategory = (categoryName: string) => {
    setCategory(categoryName);
    setModalVisible(false);
  };

  const toggleFileModal = () => {
    setFileModalVisible(!fileModalVisible);
  };

  const handleOutsidePress = () => {
    setFileModalVisible(false);
  };

  const handleAmount = (text: any) => {
    setAmount(text);
  };

  const handleImageThroughGallery = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      const uri = pickedImage.path;

      if (!uri) {
        console.log('No image selected');
        return;
      }

      const fileName = uri.substring(uri.lastIndexOf('/') + 1);

      const reference = storage().ref(`/images/${fileName}`);

      const response = await fetch(uri);
      const blob = await response.blob();

      await reference.put(blob);

      const downloadURL = await reference.getDownloadURL();

      console.log('Image uploaded successfully. Download URL:', downloadURL);

      setImage(downloadURL);

      setFileModalVisible(false);
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
      const uri = pickedImage.path;

      if (!uri) {
        console.log('No image selected');
        return;
      }

      setUploading(true);

      try {
        const response = await fetch(uri);
        const blob = await response.blob();
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const reference = firebase.storage().ref(`/images/${filename}`);
        await reference.put(blob);
        const downloadURL = await reference.getDownloadURL();
        console.log('Image uploaded successfully:', downloadURL);
        setImage(downloadURL);
        Alert.alert('Photo uploaded!');
      } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Error uploading photo!');
      } finally {
        setUploading(false);
      }

      setFileModalVisible(false);
    } catch (error) {
      console.log('Error taking picture:', error);
    }
  };

  return {
    toggleFileModal,
    handleOutsidePress,
    handleAmount,
    selectCategory,
    modalVisible,
    setModalVisible,
    fileModalVisible,
    setFileModalVisible,
    addExpens,
    category,
    setCategory,
    discription,
    setDiscription,
    amount,
    setAmount,
    image,
    setImage,
    transType,
    setTransType,
    categories,
    handleImageThroughCamera,
    handleImageThroughGallery,
  };
}
