import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const uid = auth().currentUser?.uid;

export default function useHome() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [expence, setExpence] = useState<any[]>([]);
  const [income, setIncome] = useState<any>([]);
  const [totalExpense, setTotalExpense] = useState<any>(0);
  const [totalIncome, setTotalIncome] = useState<any>(0);
  const [accountBalance, setAccountBalance] = useState<any>(0);
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
      const data = res.docs.map(doc => doc.data());
      setIncome([...data]);
      const resu = await firestore()
        .collection('user')
        .doc(collection)
        .collection('Expense')
        .get();
      const daa = resu.docs.map(doc => doc.data());
      setExpence([...daa]);
    } catch (error) {
      console.error('Error in adding data:', error);
      throw error;
    }
  };
  useEffect(() => {
    submit();
    setTotalExpense(totalExpense);
    setTotalIncome(totalIncome);
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
    expence,
    totalExpense,
    totalIncome,
    accountBalance,
  };
}
