import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

const uid = auth()?.currentUser?.uid;

interface Transaction {
  addExpneseTime: string;
  category: string;
  description: string;
  amount: number;
}

export default function useTransactionsDetail() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [combinedTransactions, setCombinedTransactions] = useState<
    Transaction[]
  >([]);
  const [todaysTransactions, setTodaysTransactions] = useState<Transaction[]>(
    [],
  );
  const [yesterdaysTransactions, setYesterdaysTransactions] = useState<
    Transaction[]
  >([]);
  const [previousTransactions, setPreviousTransactions] = useState<
    Transaction[]
  >([]);

  const fetchTransactions = useAppSelector(
    state => state.transactiondetails.transactions,
  );

  useEffect(() => {
    dispatch(TransactionsDetails());
  }, []);
  console.log('currentTransaction =>', fetchTransactions);

  // // const fetchTransactions = async () => {
  // //   try {
  // //     setIsLoading(true);
  // //     const collection = `${uid}`;
  // //     const incomeSnapshot = await firestore()
  // //       .collection('user')
  // //       .doc(collection)
  // //       .collection('Income')
  // //       .get();
  // //     const incomeData = incomeSnapshot.docs.map(
  // //       doc => doc.data() as Transaction,
  // //     );
  // //     const expenseSnapshot = await firestore()
  // //       .collection('user')
  // //       .doc(collection)
  // //       .collection('Expense')
  // //       .get();
  // //     const expenseData = expenseSnapshot.docs.map(
  // //       doc => doc.data() as Transaction,
  // //     );
  // //     const combinedData = [...expenseData, ...incomeData];
  // //     setCombinedTransactions(combinedData);
  // //     setIsLoading(false);
  // //   } catch (error) {
  // //     console.error('Error fetching transactions:', error);
  // //     setIsLoading(false);
  // //     setIsError(true);
  // //   }
  // // };

  // useEffect(() => {
  //   fetchTransactions();
  // }, []);

  useEffect(() => {
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');
    const previousDays = moment().subtract(2, 'days').startOf('day');

    const todayTransactions = combinedTransactions.filter(item =>
      moment(item.addExpneseTime)?.isSame(today, 'day'),
    );
    const yesterdaysTransactions = combinedTransactions.filter(item =>
      moment(item.addExpneseTime)?.isSame(yesterday, 'day'),
    );
    const previousTransactions = combinedTransactions.filter(item =>
      moment(item.addExpneseTime)?.isBefore(previousDays, 'day'),
    );

    setTodaysTransactions(todayTransactions);
    setYesterdaysTransactions(yesterdaysTransactions);
    setPreviousTransactions(previousTransactions);
  }, [combinedTransactions]);

  return {
    isLoading,
    isError,
    todaysTransactions,
    yesterdaysTransactions,
    previousTransactions,
    combinedTransactions,
  };
}
