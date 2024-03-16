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

const useEditTransaction = (
  documentId: string,
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
        documentId,
        discription: editableDiscription,
        amount: editableMoney,
        transType: '',
      };
      dispatch(editTransaction as any, {data: updatedTransactionData});
      // navigation.goBack();
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

// import {useNavigation} from '@react-navigation/native';
// import {useState} from 'react';
// import {Alert} from 'react-native';
// import {db} from '../../config/Firebase';
// import auth from '@react-native-firebase/auth';

// interface TransactionDetailHook {
//   handleEdit: () => void;
//   editableCategory: string;
//   setEditableCategory: React.Dispatch<React.SetStateAction<string>>;
//   editableDiscription: string;
//   setEditableDiscription: React.Dispatch<React.SetStateAction<string>>;
//   editableMoney: number;
//   setEditableMoney: React.Dispatch<React.SetStateAction<number>>;
// }

// const useEditTransaction = (
//   documentId: string,
//   category: string,
//   discription: string,
//   amount: number,
// ): TransactionDetailHook => {
//   const navigation = useNavigation();

//   const [editableCategory, setEditableCategory] = useState<string>(category);
//   const [editableDiscription, setEditableDiscription] =
//     useState<string>(discription);
//   const [editableMoney, setEditableMoney] = useState<number>(amount);

//   const handleEdit = async () => {
//     try {
//       const uid = auth().currentUser?.uid;
//       const updatedTransactionData = {
//         discription: editableDiscription,
//         amount: editableMoney,
//       };

//       await db
//         .collection('user')
//         .doc(uid)
//         .collection(category === 'Income' ? 'Income' : 'Expense')
//         .doc(documentId)
//         .update(updatedTransactionData);

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

// export default useEditTransaction;
