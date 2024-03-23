import {configureStore} from '@reduxjs/toolkit';
import expenseReducer from './slices/expenseSlice';
import authReducer from './slices/authSlice';
import transactionReducer from './slices/transactionDetailsSlice';
import currentUserReducer from './slices/currentUserSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    currentUser: currentUserReducer,
    expense: expenseReducer,
    transactiondetails: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
