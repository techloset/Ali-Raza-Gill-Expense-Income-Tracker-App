// import {useEffect, useState} from 'react';
// import moment from 'moment';
// import {useAppDispatch, useAppSelector} from '../../store/hooks';
// import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

// interface Transaction {
//   addExpneseTime: string;
//   category: string;
//   description: string;
//   amount: number;
// }

// export default function useTransactionsDetail() {
//   const dispatch = useAppDispatch();
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<boolean>(false);
//   const [combinedTransactions, setCombinedTransactions] = useState<
//     Transaction[]
//   >([]);
//   const [todaysTransactions, setTodaysTransactions] = useState<Transaction[]>(
//     [],
//   );
//   const [yesterdaysTransactions, setYesterdaysTransactions] = useState<
//     Transaction[]
//   >([]);
//   const [previousTransactions, setPreviousTransactions] = useState<
//     Transaction[]
//   >([]);

//   const fetchTransactions = useAppSelector(
//     state => state.transactiondetails.transactions,
//   );

//   useEffect(() => {
//     dispatch(TransactionsDetails());
//   }, []);

//   useEffect(() => {
//     const today = moment().startOf('day');
//     const yesterday = moment().subtract(1, 'days').startOf('day');
//     const previousDays = moment().subtract(2, 'days').startOf('day');

//     const todayTransactions = combinedTransactions.filter(item =>
//       moment(item.addExpneseTime, 'YYYY-MM-DDTHH:mm:ss').isSame(today, 'day'),
//     );
//     const yesterdaysTransactions = combinedTransactions.filter(item =>
//       moment(item.addExpneseTime, 'YYYY-MM-DDTHH:mm:ss').isSame(
//         yesterday,
//         'day',
//       ),
//     );
//     const previousTransactions = combinedTransactions.filter(item =>
//       moment(item.addExpneseTime, 'YYYY-MM-DDTHH:mm:ss').isBefore(
//         previousDays,
//         'day',
//       ),
//     );

//     setTodaysTransactions(todayTransactions);
//     setYesterdaysTransactions(yesterdaysTransactions);
//     setPreviousTransactions(previousTransactions);
//   }, [fetchTransactions]);

//   return {
//     isLoading,
//     isError,
//     todaysTransactions,
//     yesterdaysTransactions,
//     previousTransactions,
//     combinedTransactions,
//     fetchTransactions,
//   };
// }

import {useEffect, useState} from 'react';
import moment from 'moment';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

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

  useEffect(() => {
    if (fetchTransactions && fetchTransactions.length > 0) {
      setCombinedTransactions(fetchTransactions as any);
    }
  }, [fetchTransactions]);

  useEffect(() => {
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');
    const previousDays = moment().subtract(2, 'days').startOf('day');

    const todayTransactions = combinedTransactions.filter(item =>
      moment(item.addExpneseTime, 'YYYY-MM-DDTHH:mm:ss').isSame(today, 'day'),
    );

    const yesterdaysTransactions = combinedTransactions.filter(item =>
      moment(item.addExpneseTime, 'YYYY-MM-DDTHH:mm:ss').isSame(
        yesterday,
        'day',
      ),
    );

    const previousTransactions = combinedTransactions.filter(item =>
      moment(item.addExpneseTime, 'YYYY-MM-DDTHH:mm:ss').isBefore(
        previousDays,
        'day',
      ),
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
    fetchTransactions,
  };
}
