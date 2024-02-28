import React, {useState} from 'react';
import AppButton from '../../../components/Button';
import {firebase} from '@react-native-firebase/firestore';
// import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AttachmentInputPopUp from '../../../components/InputPopup';
import Shopping from '../../../assets/images/HomeScreenImages/Shopping.png';
import Subscription from '../../../assets/images/HomeScreenImages/Subscription.png';
import Food from '../../../assets/images/HomeScreenImages/Food.png';
import Salary from '../../../assets/images/HomeScreenImages/Salary.png';
import Transpotation from '../../../assets/images/HomeScreenImages/Transpotation.png';
import {useAppDispatch} from '../../../store/hooks';
import {addExpense} from '../../../store/slices/expenseSlice';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
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

// interface CreateTransactionProps {
//   navigation?: any;
//   backgroundColor?: string;
// }

export function useAddExpense() {
  const [category, setCategory] = useState<string>('');
  const [expenseName, setExpenseName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fileModalVisible, setFileModalVisible] = useState(false);
  const [transType, setTransType] = useState<string>('Expense');
  const [image, setImage] = useState<String | null>(null);
  const [uploading, setUploading] = useState(false);
  const disPatch = useAppDispatch();

  // console.log('trans', transType);

  const addExpens = () => {
    let expense = {
      amount,
      category,
      expenseName,
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

  console.log(image);
  const handleImageThroughGallery = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      const uri = pickedImage.path;
      // console.log(uri);
      setImage(uri);
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
      // console.log(uri);
      setImage(uri);
    } catch (error) {
      console.log('Error taking picture:', error);
    }
  };

  // const uploadImage = async () => {
  //   if (!image) {
  //     console.log('No image selected');
  //     return;
  //   }

  //   setUploading(true);

  //   try {
  //     const response = await fetch(image as string);
  //     const blob = await response.blob();
  //     const filename = image.substring(image.lastIndexOf('/') + 1);
  //     const ref = firebase.storage().ref().child(filename);
  //     await ref.put(blob);
  //     console.log('Image uploaded successfully!');
  //     Alert.alert('Photo uploaded!');
  //     setImage(null);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     Alert.alert('Error uploading photo!');
  //   } finally {
  //     setUploading(false);
  //   }
  // };

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
    expenseName,
    setExpenseName,
    amount,
    setAmount,
    image,
    setImage,
    transType,
    setTransType,
    AppButton,
    AttachmentInputPopUp,
    categories,
    handleImageThroughCamera,
    handleImageThroughGallery,
    // uploadImage,
  };
}
