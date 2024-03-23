import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  deleteTransaction,
  editTransaction,
} from '../../store/slices/transactionDetailsSlice';

interface TransactionDetailHook {
  handleEdit: () => void;
  editableCategory: string;
  setEditableCategory: React.Dispatch<React.SetStateAction<string>>;
  editableDiscription: string;
  setEditableDiscription: React.Dispatch<React.SetStateAction<string>>;
  editableMoney: number;
  setEditableMoney: React.Dispatch<React.SetStateAction<number>>;
  handleDelete: () => void;
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
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    setLoading(true);
    try {
      const updatedTransactionData = {
        documentId,
        discription: editableDiscription,
        amount: editableMoney,
        transType: '',
      };
      dispatch(editTransaction({data: updatedTransactionData} as any) as any);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.error('Error editing transaction:', error);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTransaction(documentId as any) as any);
    navigation.goBack();
  };
  return {
    handleEdit,
    editableCategory,
    setEditableCategory,
    editableDiscription,
    setEditableDiscription,
    editableMoney,
    setEditableMoney,
    handleDelete,
  };
};

export default useEditTransaction;
