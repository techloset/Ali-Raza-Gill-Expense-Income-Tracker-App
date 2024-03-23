import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/hooks';
import {useDispatch} from 'react-redux';
import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';
import {getUserData} from '../../store/slices/currentUserSlice';
import {ToastAndroid} from 'react-native';

interface Transaction {
  addExpenseTime: any;
  addExpneseTime: string;
  category: string;
  discription: string;
  amount: number;
  transType: string;
}

export default function useHome() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [expenses, setExpenses] = useState<React.SetStateAction<Transaction[]>>(
    [],
  );
  const [incomes, setIncomes] = useState<React.SetStateAction<Transaction[]>>(
    [],
  );
  const dispatch = useDispatch();
  const fetchTransactions = useAppSelector(
    state => state.transactiondetails.transactions,
  );
  const handlePress = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  useEffect(() => {
    try {
      dispatch(TransactionsDetails() as any);
      dispatch(getUserData() as any);
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.SHORT);
    }
  }, []);

  useEffect(() => {
    const filteredExpenses = fetchTransactions.filter(
      transaction => transaction.transType === 'Expense',
    );
    const filteredIncomes = fetchTransactions.filter(
      transaction => transaction.transType === 'Income',
    );

    let totalExpenses = 0;
    for (let i = 0; i < filteredExpenses?.length; i++) {
      const amount = parseInt(filteredExpenses[i]?.amount, 10);
      if (!isNaN(amount)) {
        totalExpenses += amount;
      }
    }

    let totalIncomes = 0;
    for (let i = 0; i < filteredIncomes.length; i++) {
      const amount = parseInt(filteredIncomes[i].amount, 10);
      if (!isNaN(amount)) {
        totalIncomes += amount;
      }
    }

    setExpenses((_prevExpenses: any) => [...filteredExpenses] as any);
    setIncomes((_prevIncomes: any) => [...filteredIncomes] as any);
    setTotalExpense(_prevTotalExpense => totalExpenses);
    setTotalIncome(_prevTotalIncome => totalIncomes);
    setAccountBalance(_prevAccountBalance => totalIncomes - totalExpenses);
  }, [fetchTransactions]);

  return {
    activeButton,
    setActiveButton,
    totalExpense,
    totalIncome,
    accountBalance,
    expenses,
    incomes,
    fetchTransactions,
    handlePress,
  };
}
