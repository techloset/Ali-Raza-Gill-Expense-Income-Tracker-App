import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const uid = auth().currentUser?.uid;
interface Transaction {
  [x: string]: any;
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
  const handlePress = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  const submit = async () => {
    try {
      const collection = `${uid}`;
      const res = await firestore()
        .collection('user')
        .doc(collection)
        .collection('Income')
        .get();
      const incomeData = res.docs.map(doc => doc.data());
      setIncome([...incomeData]);
      const resu = await firestore()
        .collection('user')
        .doc(collection)
        .collection('Expense')
        .get();
      const expenseData = resu.docs.map(doc => doc.data());
      setExpence([...expenseData]);

      const combinedData = [...expenseData, ...incomeData] as Transaction[];
      setCombinedTransactions(combinedData);
    } catch (error) {
      console.error('Error in adding data:', error);
      throw error;
    }
  };

  useEffect(() => {
    setTotalExpense(totalExpense);
    setTotalIncome(totalIncome);
    submit();
  }, []);

  useEffect(() => {
    let TotalExpense = 0;
    for (let i = 0; i < expence.length; i++) {
      const amount = parseInt(expence[i].amount.trim(), 10);
      if (!isNaN(amount)) {
        console.log(TotalExpense);

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
        console.log(amount);
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

  return {
    activeButton,
    handlePress,
    setActiveButton,
    submit,
    totalExpense,
    totalIncome,
    accountBalance,
    combinedTransactions,
  };
}
