import {useEffect, useState} from 'react';
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
  const [expenses, setExpenses] = useState<TransactionInterface[]>([]);
  const [incomes, setIncomes] = useState<TransactionInterface[]>([]);
  const [categoryExpenseTotals, setCategoryExpenseTotals] = useState<{
    [key: string]: number;
  }>({});
  const [categoryIncomeTotals, setCategoryIncomeTotals] = useState<{
    [key: string]: number;
  }>({});
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
    let totalIncomes = 0;

    const categorAmounts: {[key: string]: number} = {};

    filteredExpenses.forEach(transaction => {
      totalExpenses += parseInt(transaction.amount, 10);
      categorAmounts[transaction.category] =
        (categorAmounts[transaction.category] || 0) +
        parseInt(transaction.amount, 10);
    });

    const categoryAmounts: {[key: string]: number} = {};
    filteredIncomes.forEach(transaction => {
      totalIncomes += parseInt(transaction.amount, 10);
      categoryAmounts[transaction.category] =
        (categoryAmounts[transaction.category] || 0) +
        parseInt(transaction.amount, 10);
    });

    setExpenses(filteredExpenses as any);
    setIncomes(filteredIncomes as any);
    setTotalExpense(totalExpenses);
    setTotalIncome(totalIncomes);
    setAccountBalance(totalIncomes - totalExpenses);
    setCategoryExpenseTotals(categorAmounts);
    setCategoryIncomeTotals(categoryAmounts);
  }, [fetchTransactions]);

  let PassiveIncome = 0;
  PassiveIncome = categoryIncomeTotals.Salary
    ? totalIncome - categoryIncomeTotals.Salary
    : totalIncome - 0;

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
    categoryIncomeTotals,
    categoryExpenseTotals,
    PassiveIncome,
  };
};

export default useFinancialReports;
