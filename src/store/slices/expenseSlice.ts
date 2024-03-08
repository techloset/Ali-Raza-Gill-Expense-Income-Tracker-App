import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Expense} from '../../types/types';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const uid = auth().currentUser?.uid;

interface ExpenseState {
  expense: Expense[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: ExpenseState = {
  expense: [],
  isLoading: false,
  isError: null,
};

export const addExpense = createAsyncThunk<
  Expense,
  {expense: Expense; transType: string}
>('expense/addExpense', async ({expense, transType}) => {
  try {
    const uid = auth().currentUser?.uid;
    await firestore()
      .collection('user')
      .doc(uid)
      .collection(`${transType}`)
      .add(expense);
    return expense;
  } catch (error) {
    console.error('Error in adding data:', error);
    throw error;
  }
});

export const getExpense = createAsyncThunk(
  'expense/getExpense',
  async ({transType}: {transType: string}, {rejectWithValue}) => {
    try {
      const uid = auth().currentUser?.uid;
      if (uid) {
        const collection = `user/${uid}/${transType}`;
        const querySnapshot = await firestore().collection(collection).get();
        const expenses: Expense[] = [];
        querySnapshot.forEach(doc => {
          expenses.push(doc.data() as Expense);
        });
        return expenses;
      } else {
        throw new Error('User not authenticated');
      }
    } catch (error) {
      console.error('Error in getting data:', error);
      return rejectWithValue(error);
    }
  },
);

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        addExpense.fulfilled,
        (state, action: PayloadAction<Expense>) => {
          state.isLoading = false;
          state.isError = null;
          state.expense.push(action.payload);
        },
      )
      .addCase(addExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message as string | null;
      })
      .addCase(getExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getExpense.fulfilled,
        (state, action: PayloadAction<Expense[]>) => {
          state.isLoading = false;
          state.isError = null;
          state.expense = action.payload;
        },
      )
      .addCase(getExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message as string | null;
        state.expense = [];
      });
  },
});

export default expenseSlice.reducer;
