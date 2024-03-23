import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

interface ExpenseCardProps {
  imag: any;
  name: string;
  amount: number;
  style: object;
  onPress: () => void;
}
const ExpenseCard: React.FC<ExpenseCardProps> = ({
  imag,
  name,
  amount,
  style,
}) => {
  return (
    <View style={[styles.ExpenseCardContainer, style]}>
      <View style={styles.ExpenseCard1}>
        <View style={styles.ExpenseCard1ImageOuter}>
          <Image source={imag} style={styles.ExpenseCard1Image} />
        </View>
        <View style={styles.ExpenseCard1Text}>
          <Text style={styles.ExpenseCard1Text1}>{name}</Text>
          <Text style={styles.ExpenseCard1Text2}>${amount}</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  ExpenseCardContainer: {
    height: 80,
    width: 158,
    marginTop: 12,
    borderRadius: 25,
    paddingHorizontal: 12,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A86B',
  },
  ExpenseCard1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ExpenseCard1Text: {},
  ExpenseCard1ImageOuter: {
    backgroundColor: 'white',
    height: 48,
    width: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ExpenseCard1Image: {},
  ExpenseCard1Text1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  ExpenseCard1Text2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
    color: 'white',
    width: 80,
    maxHeight: 55,
  },
});

export default ExpenseCard;
