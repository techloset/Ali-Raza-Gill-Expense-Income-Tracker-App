import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';

interface Transaction {
  id: string;
}

export const TransactionsDetails = createAsyncThunk<Transaction[]>(
  'transactiondetails/TransactionsDetails',
  async () => {
    const userEmail: string = auth().currentUser?.email || '';

    try {
      const incomeSnapshot = await db
        .collection('users')
        .doc(userEmail)
        .collection('Income')
        .get();

      const expenseSnapshot = await db
        .collection('users')
        .doc(userEmail)
        .collection('Expense')
        .get();

      const Income = incomeSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      const Expense = expenseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const TransactionsData = [...Income, ...Expense];

      console.log('total tans', TransactionsData);

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

// export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
