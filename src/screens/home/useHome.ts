// import {useEffect, useState} from 'react';
// import {useAppSelector} from '../../store/hooks';
// import {useDispatch} from 'react-redux';
// import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

// interface Transaction {
//   addExpenseTime: any;
//   addExpneseTime: string;
//   category: string;
//   description: string;
//   amount: number;
// }
// export default function useHome() {
//   const [activeButton, setActiveButton] = useState<number>(1);
//   const [expence, setExpence] = useState<any[]>([]);
//   const [income, setIncome] = useState<any>([]);
//   const [totalExpense, setTotalExpense] = useState<any>(0);
//   const [totalIncome, setTotalIncome] = useState<any>(0);
//   const [accountBalance, setAccountBalance] = useState<any>(0);
//   const [combinedTransactions, setCombinedTransactions] = useState<
//     Transaction[]
//   >([]);
//   const dispatch = useDispatch();
//   const handlePress = (buttonNumber: number) => {
//     setActiveButton(buttonNumber);
//   };
//   const fetchTransactions = useAppSelector(
//     state => state.transactiondetails.transactions,
//   );

//   useEffect(() => {
//     try {
//       dispatch(TransactionsDetails() as any);
//     } catch (error) {
//       console.log('error', error);
//     }
//   }, [fetchTransactions]);

//   useEffect(() => {
//     let TotalExpense = 0;
//     for (let i = 0; i < expence.length; i++) {
//       const amount = parseInt(expence[i].amount.trim(), 10);
//       if (!isNaN(amount)) {
//         TotalExpense += amount;
//       } else {
//         console.log('Invalid amount:', expence[i].amount);
//       }
//     }
//     setTotalExpense(TotalExpense);
//   }, [expence]);

//   useEffect(() => {
//     let TotalIncome = 0;
//     for (let i = 0; i < income.length; i++) {
//       const amount = parseInt(income[i].amount.trim(), 10);
//       if (!isNaN(amount)) {
//         TotalIncome += amount;
//       } else {
//         console.log('Invalid amount:', income[i].amount);
//       }
//     }
//     setTotalIncome(TotalIncome);
//   }, [income]);

//   useEffect(() => {
//     const balance = parseFloat(totalIncome) - parseFloat(totalExpense);
//     setAccountBalance(balance);
//   }, [totalIncome, totalExpense]);

//   useEffect(() => {
//     const combinedData = [...expence, ...income] as Transaction[];
//     setCombinedTransactions(combinedData);
//   }, [expence, income]);

//   return {
//     activeButton,
//     handlePress,
//     setActiveButton,
//     totalExpense,
//     totalIncome,
//     accountBalance,
//     combinedTransactions,
//     fetchTransactions,
//   };
// }

import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/hooks';
import {useDispatch} from 'react-redux';
import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

interface Transaction {
  addExpenseTime: any;
  addExpneseTime: string;
  category: string;
  description: string;
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
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    // Filter expenses and incomes from combinedTransactions
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
    totalExpense,
    totalIncome,
    accountBalance,
    expenses,
    incomes,
    fetchTransactions,
    handlePress,
  };
}
