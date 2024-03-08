import {configureStore} from '@reduxjs/toolkit';
import expenseReducer from './slices/expenseSlice';
import authReducer from './slices/authSlice';
import transactionReducer from './slices/transactionDetails';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
    transactiondetails: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
