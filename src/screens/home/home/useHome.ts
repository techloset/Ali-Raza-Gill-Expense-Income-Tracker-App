import { View, Text } from 'react-native'
import React, { useState } from 'react'
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore'
const uid =auth().currentUser?.uid
export default function useHome() {
  const [activeButton, setActiveButton] = useState<number>(1);
const [expence,setExpence]=useState<any>([])
console.log(expence.length)
const [income,setIncome]=useState<any>([])
  const handlePress = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  const currentDate = new Date(); 
  const month = currentDate.toLocaleString('default', { month: 'long' });
 const submit=async()=>{
  try {
    const collection = `${uid}`;
    const res=await firestore().collection("user").doc(collection).collection("Income").get()
    const data=res.docs.map(doc => doc.data());
    const resu=await firestore().collection("user").doc(collection).collection("Expense").get()
    const daa=resu.docs.map(doc => doc.data());
setExpence([...data,...daa])

  
  } catch (error) {
    console.error("Error in adding data:", error);
    throw error;
  }
 }
  return (
    {
      activeButton,
      handlePress,
      setActiveButton,
      month,
      submit,
      expence
    }
  );
}