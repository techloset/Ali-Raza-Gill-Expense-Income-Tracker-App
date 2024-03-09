import {Expense, Income} from './../../types/Types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';

interface Transaction {
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
    const uid = auth().currentUser?.uid;
    try {
      const incomeSnapshot = await db
        .collection('user')
        .doc(uid)
        .collection('Income')
        .get();
      const expenseSnapshot = await db
        .collection('user')
        .doc(uid)
        .collection('Expense')
        .get();

      const Income = incomeSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];
      const Expense = expenseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];

      const TransactionsData = [...Income, ...Expense];
      // console.log('first', TransactionsData);
      return TransactionsData;
    } catch (error) {
      console.error('Error getting TransactionsData:', error);
      throw error;
    }
  },
);

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
