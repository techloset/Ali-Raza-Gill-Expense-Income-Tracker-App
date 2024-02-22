import { counterState, expenses } from './../../types/types';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore'
import auth from "@react-native-firebase/auth"
const uid =auth().currentUser?.uid

const initialState: counterState = {
  expense:[],
  isLoading: false,
  isError: null,
};

export const addExpense = createAsyncThunk("expense", async ({ expense, transType }: { expense: any, transType: string }) => {
    console.log(expense,transType);
    try {
      const collection = `${uid}`;
      await firestore().collection("user").doc(collection).collection(`${transType}`).add(expense);
    } catch (error) {
      console.error("Error in adding data:", error);
      throw error;
    }
  });
  

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addExpense.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addExpense.fulfilled, (state, action:any) => {
        state.isLoading = false;
        state.isError = null;
        state.expense = action.payload;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string | null;
        state.expense = [];
      });
  },
});
export default expenseSlice.reducer;

