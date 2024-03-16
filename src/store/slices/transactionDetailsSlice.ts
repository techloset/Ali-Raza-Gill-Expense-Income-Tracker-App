import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';

interface Transaction {
  id: string;
  documnetId: string;
  category: string;
  discription: string;
  amount: string;
  transType: 'Income' | 'Expense';
  imageUrl: string;
  time: string;
  docId: string;
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
          id: data.docId,
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
            id: data.docId,
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
  id: string;
  docId: string;
  category: string;
  discription: string;
  amount: string;
  transType: string;
  imageUrl: string;
  time: string;
}
export const editTransaction: any = createAsyncThunk<
  Transaction,
  Partial<Transaction>
>('transactions/editTransaction', async TransactionsData => {
  try {
    const uid = auth().currentUser?.uid;
    const {documnetId, discription, amount, transType} = TransactionsData;

    // Update the document with the new data
    await db
      .collection('user')
      .doc(uid)
      .collection(transType === 'Income' ? 'Income' : 'Expense')
      .doc(documnetId)
      .set({
        discription,
        amount,
      });

    console.log('Transaction updated successfully');

    return TransactionsData;
  } catch (error) {
    console.error('Error editing transaction:', error);
    throw error;
  }

  // try {
  //   const uid = auth().currentUser?.uid;
  //   const {documnetId, discription, amount, transType} = TransactionsData;
  //   const docRef = db
  //     .collection('user')
  //     .doc(uid)
  //     .collection(transType === 'Income' ? 'Income' : 'Expense')
  //     .doc(documnetId)
  //     .update({
  //       discription,
  //       amount,
  //     });
  //   console.log('editTransaction', editTransaction);
  //   return editTransaction;
  // } catch (error) {
  //   console.error('Error editing transaction:', error);
  //   throw error;
  // }
});

// Delete data
// export const deleteTransaction = createAsyncThunk<Transaction, Transaction>(
//   'transactions/deleteTransaction',
//   async (transactionData, {dispatch}) => {
//     try {
//       const userEmail: string = auth().currentUser?.email || '';
//       const collectionName: string = `${userEmail}`;

//       const docSnapshot = await db
//         .collection('transactions')
//         .doc(collectionName)
//         .collection(transactionData.transType)
//         // .doc(transactionData.docId)
//         .get();

//       // if (!docSnapshot.exists) {
//         // Return the original transaction data if the document doesn't exist
//         // return transactionData;
//       }

//       await db
//         .collection('transactions')
//         .doc(collectionName)
//         .collection(transactionData.transType)
//         .doc(transactionData.docId)
//         .delete();

//       dispatch(TransactionsDetails() as any);

//       return transactionData;
//     } catch (error) {
//       console.error('Error deleting transaction:', error);
//       throw error;
//     }
//   },
// );

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
        // Find and update the transaction in the state based on its docId
        const index = state.transactions.findIndex(
          transaction => transaction === action.payload.doc,
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
      });

    // .addCase(deleteTransaction.pending, state => {
    //   state.isLoading = true;
    //   state.isError = false;
    // })
    // .addCase(deleteTransaction.fulfilled, (state, action) => {
    //   // Assuming you don't need to push anything here, as the data is being deleted
    //   state.isLoading = false;
    // })
    // .addCase(deleteTransaction.rejected, state => {
    //   state.isLoading = false;
    //   state.isError = true;
    // });
  },
});

export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
