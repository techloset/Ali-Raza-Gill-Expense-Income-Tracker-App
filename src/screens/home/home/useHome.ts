import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function useHome() {
  const [activeButton, setActiveButton] = useState<number>(1);

  const handlePress = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  return (
    {
      activeButton,
      handlePress,
      setActiveButton,
    }
  );
}