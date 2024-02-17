import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function useHome() {
  const [activeButton, setActiveButton] = useState<number>(1);

  const handlePress = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  const currentDate = new Date(); 
  const month = currentDate.toLocaleString('default', { month: 'long' });
 
  return (
    {
      activeButton,
      handlePress,
      setActiveButton,
      month,
    }
  );
}