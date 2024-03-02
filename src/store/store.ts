import {configureStore} from '@reduxjs/toolkit';
import expenseReducer from './slices/expenseSlice';
import transactionReducer from './slices/transactionDetails';
export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    transactiondetails: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
