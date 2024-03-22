import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {TransactionsDetails} from '../../store/slices/transactionDetailsSlice';

export default function useTransactionsDetail() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchTransactions = useAppSelector(
    state => state.transactiondetails.transactions,
  );

  useEffect(() => {
    dispatch(TransactionsDetails());
  }, []);

  return {
    isLoading,
    isError,
    fetchTransactions,
  };
}
