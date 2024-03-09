import React, {useEffect, useState} from 'react';
import {TransactionInterface} from '../../types/types';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

const useFinancialReports = () => {
  const [financialReports, setFinancialReports] = useState([]);
  const [isExpenseSelected, setIsExpenseSelected] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [activeButton, setActiveButton] = useState<number>(1);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [expenses, setExpenses] = useState<
    React.SetStateAction<TransactionInterface[]>
  >([]);
  const [incomes, setIncomes] = useState<
    React.SetStateAction<TransactionInterface[]>
  >([]);
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
    } catch (error) {
      console.log('error', error);
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
      const amount = parseInt(filteredExpenses[i]?.amount as any, 10);
      if (!isNaN(amount)) {
        totalExpenses += amount;
      }
    }

    let totalIncomes = 0;
    for (let i = 0; i < filteredIncomes.length; i++) {
      const amount = parseInt(filteredIncomes[i].amount as any, 10);
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
    handlePress,
    totalExpense,
    totalIncome,
    accountBalance,
    expenses,
    incomes,
    isExpenseSelected,
    setIsExpenseSelected,
    isLoading,
    setIsLoading,
    financialReports,
    setFinancialReports,
    setExpenses,
    setIncomes,
    setTotalExpense,
    setTotalIncome,
  };
};

export default useFinancialReports;
