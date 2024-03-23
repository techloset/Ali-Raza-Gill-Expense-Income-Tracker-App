import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';

interface Transaction {
  addExpneseTime(addExpneseTime: any): unknown;
  itemId: string;
  documentId: string;
  category: string;
  discription: string;
  amount: string;
  transType: 'Income' | 'Expense';
  imageUrl: string;
  time: string;
  docId: string;
  data: any;
}

export const TransactionsDetails = createAsyncThunk<Transaction[]>(
  'transactiondetails/TransactionsDetailsSlice',
  async () => {
    const userEmail: string = auth()?.currentUser?.email as string;
    const uid = auth().currentUser?.uid;
    try {
      const expenseSnapshot = await db
        .collection('user')
        .doc(uid)
        .collection('Expense')
        .get();

      const incomeSnapshot = await db
        .collection('user')
        .doc(uid)
        .collection('Income')
        .get();

      const Income = incomeSnapshot.docs.map(doc => {
        const data = doc.data();

        return {
          docId: doc.id,
          itemId: data.docId,
          category: data.category,
          discription: data.discription,
          amount: data.amount,
          transType: 'Income',
          imageUrl: data.image,
          time: data.addExpenseTime,
        };
      }) as Transaction[];
      const Expense = expenseSnapshot.docs.map(doc => {
        const data = doc.data();
        {
          return {
            docId: doc.id,
            itemId: data.docId,
            category: data.category,
            discription: data.discription,
            amount: data.amount,
            transType: 'Expense',
            imageUrl: data.image,
            time: data.addExpenseTime,
          };
        }
      }) as Transaction[];

      const TransactionsData = [...Income, ...Expense];
      return TransactionsData;
    } catch (error) {
      console.error('Error getting TransactionsData:', error);
      throw error;
    }
  },
);

const getUserEmail = () => auth().currentUser?.email || '';
interface UpdatedTransactionData {
  documentId: string;
  discription: string;
  amount: string;
  data: any;
}

export const editTransaction = createAsyncThunk<
  Partial<Transaction>,
  UpdatedTransactionData
>('transactions/editTransaction', async ({data: updatedTransactionData}) => {
  try {
    const uid = auth().currentUser?.uid;
    const {documentId, discription, amount, transType} = updatedTransactionData;
    console.log(transType, documentId);

    // Update Income collection
    const incomeDocRef = db
      .collection('user')
      .doc(uid)
      .collection('Income')
      .doc(documentId);

    const incomeDocSnapshot = await incomeDocRef.get();

    // Update Income document if it exists
    if (incomeDocSnapshot.exists) {
      await incomeDocRef.update({
        discription,
        amount,
      });
    }

    // Update Expense collection
    const expenseDocRef = db
      .collection('user')
      .doc(uid)
      .collection('Expense')
      .doc(documentId);

    const expenseDocSnapshot = await expenseDocRef.get();

    // Update Expense document if it exists
    if (expenseDocSnapshot.exists) {
      await expenseDocRef.update({
        discription,
        amount,
      });
    }

    // If document doesn't exist in either collection, log a warning
    if (!incomeDocSnapshot.exists && !expenseDocSnapshot.exists) {
      console.warn(
        `Document with ID ${documentId} not found in either collection`,
      );
    }

    console.log('Transaction updated successfully', updatedTransactionData);
    console.log('documentId', documentId);

    return updatedTransactionData;
  } catch (error) {
    console.error('Error editing transaction:', error);
    throw error;
  }
});

export const deleteTransaction = createAsyncThunk<string, string>(
  'transactions/deleteTransaction',
  async (documentId, {dispatch}) => {
    try {
      const uid = auth()?.currentUser?.uid;
      const incomeDocRef = db
        .collection('user')
        .doc(uid)
        .collection('Income')
        .doc(documentId);
      const expenseDocRef = db
        .collection('user')
        .doc(uid)
        .collection('Expense')
        .doc(documentId);
      await incomeDocRef.delete();
      await expenseDocRef.delete();
      console.log('Transaction deleted successfully', documentId);
      dispatch(TransactionsDetails());

      return documentId;
    } catch (error) {
      console.error('Error deleting transaction:', error);
      throw error;
    }
  },
);

interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: TransactionState = {
  transactions: [],
  isLoading: false,
  isError: false,
};

export const transactionSlice = createSlice({
  name: 'transactiondetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(TransactionsDetails.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(TransactionsDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(TransactionsDetails.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(editTransaction.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.transactions.findIndex(
          transaction => transaction.documentId === action.payload.documentId,
        );
        if (index !== -1) {
          state.transactions[index] = {
            ...state.transactions[index],
            ...action.payload,
          };
        }
      })
      .addCase(editTransaction.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTransaction.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
