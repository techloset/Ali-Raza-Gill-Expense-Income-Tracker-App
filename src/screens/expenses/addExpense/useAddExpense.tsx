import React, {useState} from 'react';
import AppButton from '../../../components/Button';
import AttachmentInputPopUp from '../../../components/InputPopup';
import Shopping from '../../../assets/images/HomeScreenImages/Shopping.png';
import Subscription from '../../../assets/images/HomeScreenImages/Subscription.png';
import Food from '../../../assets/images/HomeScreenImages/Food.png';
import Salary from '../../../assets/images/HomeScreenImages/Salary.png';
import Transpotation from '../../../assets/images/HomeScreenImages/Transpotation.png';
import {useAppDispatch} from '../../../store/hooks';
import {addExpense} from '../../../store/slices/expenseSlice';

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
  const [image, setImage] = useState<string | null>(null);
  const disPatch = useAppDispatch();
  console.log('trans', transType);

  const addExpens = () => {
    let expense = {
      amount,
      category,
      expenseName,
      image,
      addExpneseTime: new Date(Date()).toString(),
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
  };
}
