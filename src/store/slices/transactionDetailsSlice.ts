import {Expense, Income} from './../../types/Types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

interface Transaction {
  category: any;
  transType: 'Expense' | 'Income' | '';
  amount: number;
  id: string;
  Expense: Expense[];
  Income: Income[];
}

// export const TransactionsDetails = createAsyncThunk<Transaction[]>(
//   'transactiondetails/TransactionsDetailsSlice',
//   async () => {
//     // const userEmail: string = auth()?.currentUser?.email as string;
//     const uid = auth()?.currentUser?.uid;
//     try {
//       const incomeSnapshot = await db
//         .collection('user')
//         .doc(uid)
//         .collection('Income')
//         .get();
//       const expenseSnapshot = await db
//         .collection('user')
//         .doc(uid)
//         .collection('Expense')
//         .get();
//       const Income = incomeSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       const Expense = expenseSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       // console.log('Expense', Expense);
//       const TransactionsData = [...Income, ...Expense];

//       return TransactionsData;
//     } catch (error) {
//       console.error('Error getting TransactionsData:', error);
//       throw error;
//     }
//   },
// );
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

      const Income = incomeSnapshot.docs.map(doc => ({
        id: doc.id,
        docId: doc.id,
        category: doc.data().category,
        description: doc.data().description,
        money: doc.data().money,
        transactionType: 'Income',
        imageUrl: doc.data().imageUrl,
        timestamp: doc.data().timestamp,
      })) as unknown as Transaction[];
      const Expense = expenseSnapshot.docs.map(doc => ({
        id: doc.id,
        docId: doc.id,
        category: doc.data().category,
        description: doc.data().description,
        money: doc.data().money,
        transactionType: 'Expense',
        imageUrl: doc.data().imageUrl,
        timestamp: doc.data().timestamp,
      })) as unknown as Transaction[];

      const TransactionsData = [...Income, ...Expense];

      return TransactionsData;
    } catch (error) {
      console.error('Error getting TransactionsData:', error);
      throw error;
    }
  },
);

// Edit Transaction

// export const editTransaction = createAsyncThunk<Transaction, Transaction>(
//   'transactions/editTransaction',
//   async (updatedTransactionData, {dispatch}) => {
//     try {
//       const userEmail = getUserEmail();
//       const collectionName = `${userEmail}`;
//       await db
//         .collection('transactions')
//         .doc(collectionName)
//         .collection(updatedTransactionData.transactionType)
//         .doc(updatedTransactionData.id)
//         .update(updatedTransactionData);
//       dispatch(fetchTransactions() as any); // Assuming fetchTransactions fetches updated data
//       return updatedTransactionData;
//     } catch (error) {
//       ToastAndroid.show('Error editing transaction', ToastAndroid.SHORT);
//       throw error;
//     }
//   },
// );

// // Action to delete transaction
// export const deleteTransaction = createAsyncThunk<Transaction, Transaction>(
//   'transactions/deleteTransaction',
//   async (transactionData, {dispatch}) => {
//     try {
//       const userEmail: string = auth().currentUser?.email || '';
//       const collectionName: string = `${userEmail}`;

//       // Get the transaction document snapshot
//       const docSnapshot = await db
//         .collection('transactions')
//         .doc(collectionName)
//         .collection(transactionData.transType)
//         .doc(transactionData.docId)
//         .get();

//       // Check if the document exists
//       if (!docSnapshot.exists) {
//         return;
//       }
//       await db
//         .collection('transactions')
//         .doc(collectionName)
//         .collection(transactionData.transactionType)
//         .doc(transactionData.docId)
//         .delete();
//       dispatch(fetchTransactions() as any);

//       return transactionData;
//     } catch (error) {
//       ToastAndroid.show('Error deleting transaction', ToastAndroid.SHORT);
//       throw error;
//     }
//   },
// );

export const transactionSlice = createSlice({
  name: 'transactiondetails',
  initialState: {
    transactions: [] as Transaction[],
    isLoading: false,
    isError: false,
  },
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
      });
  },
});

export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
