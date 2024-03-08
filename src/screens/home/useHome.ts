import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface Transaction {
  addExpneseTime: string;
  category: string;
  description: string;
  amount: number;
}
export default function useHome() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [expence, setExpence] = useState<any[]>([]);
  const [income, setIncome] = useState<any>([]);
  const [totalExpense, setTotalExpense] = useState<any>(0);
  const [totalIncome, setTotalIncome] = useState<any>(0);
  const [accountBalance, setAccountBalance] = useState<any>(0);
  const [combinedTransactions, setCombinedTransactions] = useState<
    Transaction[]
  >([]);
  const uid = auth()?.currentUser?.uid;

  const handlePress = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  const submit = async () => {
    try {
      await firestore()
        .collection('user')
        .doc(uid)
        .collection('Income')
        .onSnapshot(snapshot => {
          const incomeData = snapshot.docs.map(doc => doc.data());
          setIncome([...incomeData]);
        });

      await firestore()
        .collection('user')
        .doc(uid)
        .collection('Expense')
        .onSnapshot(snapshot => {
          const expenseData = snapshot.docs.map(doc => doc.data());
          setExpence([...expenseData]);
        });
    } catch (error) {
      console.error('Error in adding data:', error);
      throw error;
    }
  };

  useEffect(() => {
    submit();
  }, []);

  useEffect(() => {
    let TotalExpense = 0;
    for (let i = 0; i < expence.length; i++) {
      const amount = parseInt(expence[i].amount.trim(), 10);
      if (!isNaN(amount)) {
        TotalExpense += amount;
      } else {
        console.log('Invalid amount:', expence[i].amount);
      }
    }
    setTotalExpense(TotalExpense);
  }, [expence]);

  useEffect(() => {
    let TotalIncome = 0;
    for (let i = 0; i < income.length; i++) {
      const amount = parseInt(income[i].amount.trim(), 10);
      if (!isNaN(amount)) {
        TotalIncome += amount;
      } else {
        console.log('Invalid amount:', income[i].amount);
      }
    }
    setTotalIncome(TotalIncome);
  }, [income]);

  useEffect(() => {
    const balance = parseFloat(totalIncome) - parseFloat(totalExpense);
    setAccountBalance(balance);
  }, [totalIncome, totalExpense]);

  useEffect(() => {
    const combinedData = [...expence, ...income] as Transaction[];
    setCombinedTransactions(combinedData);
  }, [expence, income]);

  return {
    activeButton,
    handlePress,
    setActiveButton,
    totalExpense,
    totalIncome,
    accountBalance,
    combinedTransactions,
  };
}
