import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {editTransaction} from '../../store/slices/transactionDetailsSlice';
import {useAppSelector} from '../../store/hooks';

interface TransactionDetailHook {
  handleEdit: () => void;
  editableCategory: string;
  setEditableCategory: React.Dispatch<React.SetStateAction<string>>;
  editableTransactionType: string;
  setEditableTransactionType: React.Dispatch<React.SetStateAction<string>>;
  editableDiscription: string;
  setEditableDiscription: React.Dispatch<React.SetStateAction<string>>;
  editableMoney: number;
  setEditableMoney: React.Dispatch<React.SetStateAction<number>>;
  typeModalVisible: boolean;
  setTypeModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  categoryModalVisible: boolean;
  setCategoryModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// const useEditTransaction = (
//   docId: string,
//   category: string,
//   discription: string,
//   amount: number,
// ): TransactionDetailHook => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const [editableCategory, setEditableCategory] = useState<string>(category);
//   const [editableDiscription, setEditableDiscription] =
//     useState<string>(discription);
//   const [editableMoney, setEditableMoney] = useState<number>(amount);

//   const handleEdit = async () => {
//     try {
//       const updatedTransactionData = {
//         docId,
//         discription: editableDiscription,
//         money: editableMoney,
//         transactionType: '',
//       };
//       dispatch(editTransaction(updatedTransactionData));

//       navigation.goBack();
//     } catch (error) {
//       console.error('Error editing transaction:', error);
//       Alert.alert('Error', 'Failed to edit transaction. Please try again.');
//     }
//   };

//   return {
//     handleEdit,
//     editableCategory,
//     setEditableCategory,
//     editableDiscription,
//     setEditableDiscription,
//     editableMoney,
//     setEditableMoney,
//   };
// };

// const useEditTransaction = (
//   docId: string,
//   category: string,
//   discription: string,
//   amount: number,
// ): TransactionDetailHook => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const [editableCategory, setEditableCategory] = useState<string>(category);
//   const [editableDiscription, setEditableDiscription] =
//     useState<string>(discription);
//   const [editableMoney, setEditableMoney] = useState<number>(amount);

//   const handleEdit = async () => {
//     try {
//       const updatedTransactionData = {
//         docId,
//         discription: editableDiscription,
//         amount: editableMoney,
//       };
//       await dispatch(editTransaction(updatedTransactionData));
//       console.log('Updated transaction data:', updatedTransactionData);
//       console.log('Transaction updated successfully');
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error editing transaction:', error);
//     }
//   };

//   return {
//     handleEdit,
//     editableCategory,
//     setEditableCategory,
//     editableDiscription,
//     setEditableDiscription,
//     editableMoney,
//     setEditableMoney,
//   };
// };

const useEditTransaction = (
  documnetId: string,
  category: string,
  discription: string,
  amount: number,
): TransactionDetailHook => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [editableCategory, setEditableCategory] = useState<string>(category);
  const [editableDiscription, setEditableDiscription] =
    useState<string>(discription);
  const [editableMoney, setEditableMoney] = useState<number>(amount);

  const handleEdit = async () => {
    try {
      const updatedTransactionData = {
        documnetId,
        discription: editableDiscription,
        amount: editableMoney,
      };
      dispatch(editTransaction as any, updatedTransactionData);
      console.log('Updated transaction data:', updatedTransactionData);
      console.log('Transaction updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error editing transaction:', error);
    }
  };

  return {
    handleEdit,
    editableCategory,
    setEditableCategory,
    editableDiscription,
    setEditableDiscription,
    editableMoney,
    setEditableMoney,
  };
};

export default useEditTransaction;
